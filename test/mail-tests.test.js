'use strict';

// End-to-end tests for the IMAP, POP3 and SMTP probes against local mock servers.
// Run with `npm run test:unit`.

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const test = require('node:test');
const assert = require('node:assert');
const net = require('node:net');
const tls = require('node:tls');
const fs = require('node:fs');
const path = require('node:path');
const { imap, pop3, smtp } = require('../scripts/mail-tests');

const creds = {
  key: fs.readFileSync(path.join(__dirname, 'fixtures', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'fixtures', 'cert.pem'))
};

// A tiny line-based server. `handle(line, socket)` returns the reply, or { reply, upgrade: true }.
function server({ secure, greeting, handle }) {
  const onConnection = (socket) => {
    socket.setEncoding('utf8');
    socket.write(greeting);
    let buf = '';
    const onData = (d) => {
      buf += d;
      let i;
      while ((i = buf.indexOf('\r\n')) !== -1) {
        const line = buf.slice(0, i);
        buf = buf.slice(i + 2);
        const out = handle(line);
        if (out && out.upgrade) {
          socket.write(out.reply);
          socket.removeListener('data', onData);
          const secured = new tls.TLSSocket(socket, { isServer: true, ...creds });
          secured.setEncoding('utf8');
          secured.on('data', (x) => {
            for (const l of x.split('\r\n').filter(Boolean)) {
              const r = handle(l);
              if (r) secured.write(typeof r === 'string' ? r : r.reply);
            }
          });
          return;
        }

        if (out) socket.write(out);
      }
    };

    socket.on('data', onData);
    socket.on('error', () => {});
  };

  const s = secure ? tls.createServer(creds, onConnection) : net.createServer(onConnection);
  return new Promise((resolve) => s.listen(0, '127.0.0.1', () => resolve(s)));
}

const closed = () => new Promise((resolve) => {
  const s = net.createServer();
  s.listen(0, '127.0.0.1', () => {
    const { port } = s.address();
    s.close(() => resolve(port));
  });
});

test('IMAP over implicit TLS reads CAPABILITY', async () => {
  const s = await server({
    secure: true,
    greeting: '* OK ready\r\n',
    handle: (l) => (l.startsWith('a1') ? '* CAPABILITY IMAP4rev1 IMAP4rev2 IDLE MOVE AUTH=PLAIN\r\na1 OK done\r\n' : l.startsWith('a2') ? '* BYE\r\na2 OK\r\n' : null)
  });
  const r = await imap('127.0.0.1', { implicit: s.address().port, starttls: await closed() });
  s.close();
  assert.equal(r.tls, 'implicit');
  assert.deepEqual(r.capabilities, ['IMAP4REV1', 'IMAP4REV2', 'IDLE', 'MOVE', 'AUTH=PLAIN']);
});

test('IMAP falls back to STARTTLS', async () => {
  const s = await server({
    secure: false,
    greeting: '* OK ready\r\n',
    handle: (l) => (l.startsWith('a1') ? { reply: 'a1 OK begin TLS\r\n', upgrade: true } : l.startsWith('a2') ? '* CAPABILITY IMAP4rev1 IDLE\r\na2 OK\r\n' : null)
  });
  const r = await imap('127.0.0.1', { implicit: await closed(), starttls: s.address().port });
  s.close();
  assert.equal(r.tls, 'starttls');
  assert.deepEqual(r.capabilities, ['IMAP4REV1', 'IDLE']);
});

test('POP3 over implicit TLS reads CAPA', async () => {
  const s = await server({
    secure: true,
    greeting: '+OK POP3 ready\r\n',
    handle: (l) => (l === 'CAPA' ? '+OK list\r\nTOP\r\nUIDL\r\nUSER\r\nSASL PLAIN\r\n.\r\n' : l === 'QUIT' ? '+OK bye\r\n' : null)
  });
  const r = await pop3('127.0.0.1', { implicit: s.address().port, starttls: await closed() });
  s.close();
  assert.equal(r.tls, 'implicit');
  assert.equal(r.capa, true);
  assert.deepEqual(r.capabilities, ['TOP', 'UIDL', 'USER', 'SASL']);
});

test('SMTP submission over implicit TLS reads EHLO extensions', async () => {
  const s = await server({
    secure: true,
    greeting: '220 mx ready\r\n',
    handle: (l) => (l.startsWith('EHLO') ? '250-mx hello\r\n250-PIPELINING\r\n250-8BITMIME\r\n250-SMTPUTF8\r\n250-AUTH PLAIN LOGIN\r\n250 ENHANCEDSTATUSCODES\r\n' : l === 'QUIT' ? '221 bye\r\n' : null)
  });
  const r = await smtp('127.0.0.1', { implicit: s.address().port, starttls: await closed() });
  s.close();
  assert.equal(r.tls, 'implicit');
  assert.deepEqual(r.extensions, ['PIPELINING', '8BITMIME', 'SMTPUTF8', 'AUTH', 'ENHANCEDSTATUSCODES']);
});

test('SMTP falls back to STARTTLS on 587', async () => {
  let secured = false;
  const s = await server({
    secure: false,
    greeting: '220 mx ready\r\n',
    handle: (l) => {
      if (l.startsWith('EHLO')) return secured ? '250-mx\r\n250-SMTPUTF8\r\n250 AUTH PLAIN\r\n' : '250-mx\r\n250 STARTTLS\r\n';
      if (l === 'STARTTLS') {
        secured = true;
        return { reply: '220 go ahead\r\n', upgrade: true };
      }

      return null;
    }
  });
  const r = await smtp('127.0.0.1', { implicit: await closed(), starttls: s.address().port });
  s.close();
  assert.equal(r.tls, 'starttls');
  assert.deepEqual(r.extensions, ['SMTPUTF8', 'AUTH']);
});

test('reports an error when nothing answers', async () => {
  const r = await imap('127.0.0.1', { implicit: await closed(), starttls: await closed() });
  assert.ok(r.error);
});

test('a reply that never ends is cut off', async () => {
  const { session, MAX_REPLY } = require('../scripts/mail-tests');
  const s = net.createServer((socket) => {
    socket.on('error', () => {});
    socket.write('x'.repeat(MAX_REPLY + 10));
  });
  await new Promise((resolve) => s.listen(0, '127.0.0.1', resolve));
  const r = await session({ host: '127.0.0.1', port: s.address().port, secure: false, steps: [] });
  s.close();
  assert.equal(r.ok, false);
  assert.equal(r.error, 'reply too long');
});

test('servers from SRV records must be public host names', async () => {
  const { mailTests } = require('../scripts/mail-tests');
  const checkDns = async () => ({ srv: { imaps: { host: 'localhost', port: 993 }, pop3s: { host: 'internal.example.com', port: 995 }, submissions: { host: '10.0.0.1', port: 465 } } });
  const lookup = async () => [{ address: '192.168.1.10', family: 4 }];
  const r = await mailTests('example.com', {}, { checkDns, lookup });
  for (const proto of ['imap', 'pop3', 'smtp']) assert.match(r[proto].error, /SRV record not used/, proto);
});

test('servers from rating files must be public host names too', async () => {
  const { mailTests } = require('../scripts/mail-tests');
  const checkDns = async () => ({ srv: {} });
  const lookup = async () => [{ address: '10.0.0.5', family: 4 }];
  const r = await mailTests('example.com', { imap: 'imap.example.com', pop3: '127.0.0.1', smtp: 'localhost' }, { checkDns, lookup });
  for (const proto of ['imap', 'pop3', 'smtp']) assert.match(r[proto].error, /rating file not used/, proto);
});

#!/usr/bin/env node
import { main } from '../src/main.js';
import { clean } from '../src/sanitize.js';

// `privacyratings search email | head -1` closes the pipe early; that is not an error.
for (const stream of [process.stdout, process.stderr]) {
  stream.on('error', (err) => {
    if (err && err.code === 'EPIPE') process.exit(0);
    throw err;
  });
}

main(process.argv.slice(2)).catch((err) => {
  console.error(clean(err && err.message ? err.message : String(err)));
  process.exit(1);
});

---
name: Forward Email
description: >-
  Open-source email service with encrypted mailboxes, custom domains, and IMAP, POP3, SMTP, CalDAV and CardDAV on every paid plan.
website: https://forwardemail.net
smtp_host: smtp.forwardemail.net
pop3_host: pop3.forwardemail.net
imap_host: imap.forwardemail.net
jurisdiction: US
source: https://github.com/forwardemail/forwardemail.net
license: BUSL-1.1 AND MPL-2.0
platforms: [web, windows, macos, linux, android, ios]
domain: forwardemail.net
mail_domain: forwardemail.net
pick: true
pick_reason: >-
  The whole service is published on GitHub, server code included. Each mailbox is a separately encrypted SQLite file, IMAP, POP3, SMTP, CalDAV and CardDAV work with any app, and custom domains are included on low-cost plans.
disclosure: >-
  Privacy Ratings is maintained by the team behind Forward Email. This entry is scored by the same criteria as every other email provider, and changes to it are reviewed under the published conflict-of-interest rules.
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/forwardemail/forwardemail.net/blob/master/LICENSE.md
    note: The entire service (web, API, IMAP, POP3, SMTP, MX, CalDAV and CardDAV servers) is public. Core mail storage and protocol code is MPL-2.0. The rest is BUSL-1.1, which is source-available and becomes MPL-2.0 four years after each release. BUSL-1.1 is not OSI-approved today.
  no_trackers:
    answer: partial
    evidence: https://forwardemail.net/en/privacy#analytics
    note: No third-party analytics or telemetry. First-party page statistics keep no IP addresses, cookies or identifiers and are deleted after 30 days. Cloudflare Turnstile loads only on sign-in and sign-up forms to stop bots.
  no_ads:
    answer: yes
    evidence: https://forwardemail.net/en/private-business-email
    note: Funded by paid plans. No ads.
  independent_audit:
    answer: yes
    evidence: https://cure53.de/pentest-report_forward-email.pdf
    note: Two independent Cure53 audits of the code and infrastructure, published by Cure53 and on forwardemail.net.
  transparency_report:
    answer: partial
    evidence: https://forwardemail.net/technical-whitepaper.pdf
    note: The technical whitepaper (section 9.3) publishes the government request policy and commits to regular transparency reports with request counts. A report with counts is not published yet.
  user_notice:
    answer: yes
    evidence: https://forwardemail.net/technical-whitepaper.pdf
    note: Users are notified of requests when legally allowed, with notice after disclosure when advance notice is prohibited.
  e2ee:
    answer: yes
    evidence: https://forwardemail.net/en/faq#do-you-support-openpgpmime-end-to-end-encryption-e2ee-and-web-key-directory-wkd
    note: Mail is automatically encrypted with OpenPGP when the recipient publishes a key through Web Key Directory. OpenPGP/MIME and S/MIME work with any app.
  encrypted_storage:
    answer: yes
    evidence: https://forwardemail.net/technical-whitepaper.pdf
    note: Each mailbox is a separately encrypted SQLite file (ChaCha20-Poly1305). The technical whitepaper states Forward Email cannot access mailbox contents.
  open_protocols:
    answer: yes
    evidence: https://forwardemail.net/en/faq#do-you-support-receiving-email-with-imap
    note: IMAP, POP3, SMTP, CalDAV and CardDAV on every paid plan, with no bridge app.
  custom_domains:
    answer: yes
    evidence: https://forwardemail.net/en/private-business-email
    note: Unlimited domains on every plan.
  anonymous_signup:
    answer: yes
    evidence: https://forwardemail.net/en/faq#how-do-i-get-started-and-set-up-email-forwarding
    note: Free forwarding is set up entirely with DNS records, with no account at all. Paid mailboxes need only an email address and password, never a phone number.
  srs:
    answer: yes
    evidence: https://forwardemail.net/en/faq#how-do-i-set-up-srs-for-forward-email
    note: Applied automatically to all forwarded mail.
  arc:
    answer: yes
    evidence: https://forwardemail.net/en/faq#do-you-support-email-best-practices
    note: ARC chains are validated (RFC 8617) and forwarded mail is ARC-sealed.
---

## Jurisdiction and the CLOUD Act

Forward Email is based in the United States, a Five Eyes country, and is subject to the [CLOUD Act](/cloud-act/). Its [technical whitepaper](https://forwardemail.net/technical-whitepaper.pdf) describes how the design limits what any legal request could reach:

- Mailboxes are individually encrypted SQLite files that Forward Email cannot read.
- Email content and metadata are not logged to disk.
- Data that could be disclosed is limited to basic account details (such as the account email, sign-up date and payment information) and limited IP address logs that may be kept temporarily for security and abuse prevention.
- Requests need valid US legal process (subpoena, court order or search warrant). Foreign requests must come through a US court, a mutual legal assistance treaty or a CLOUD Act agreement. Overbroad requests are challenged.

## Independent audits

- [Cure53: architecture and infrastructure](https://cure53.de/pentest-report_forward-email.pdf)
- [Cure53: code, Nodemailer and infrastructure](https://forwardemail.net/pentest-report_forward-email.pdf)

## Notes

Forward Email also publishes [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers), a comparison of hosts for running a mail server.

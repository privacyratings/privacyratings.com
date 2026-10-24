---
name: "anon.li Alias"
description: >-
  Open-source email alias service that forwards mail from random or custom aliases to existing mailboxes, with
  optional OpenPGP encryption and replies through the alias. Has a free plan.
website: "https://anon.li/alias"
source: https://github.com/anondotli/anon.li
platforms: [web]
domain: anon.li
mail_domain: anon.li
imap_host: false
pop3_host: false
smtp_host: false
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/anondotli/anon.li/blob/main/LICENSE
    note: The web app is AGPL-3.0. The Haraka mail server that forwards alias mail is published separately at codeberg.org/anonli/mx, also under AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://anon.li/sub-processors
    note: No ad trackers or cookies for analytics. PostHog (EU region) receives pseudonymous product analytics through a first-party proxy, and Cloudflare Turnstile runs on sign-in.
  no_ads:
    answer: yes
    evidence: https://anon.li/privacy
    note: Funded by paid plans. The privacy policy states user data is not used for advertising, profiling or sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee:
    answer: partial
    evidence: https://anon.li/security
    note: Forwarded mail can be encrypted with the recipient's own OpenPGP key. Not on by default.
  no_mail_storage:
    answer: yes
    evidence: https://codeberg.org/anonli/mx/src/branch/main/plugins/queue.forward.js
    note: Mail is forwarded without a hosted mailbox. The mail server may queue messages briefly before delivery, and sender, alias and time are logged for up to 7 days.
  open_protocols:
    answer: no
    note: No IMAP or SMTP access. Mail is forwarded to an existing mailbox and replies go through the alias.
  custom_domains:
    answer: yes
    evidence: https://anon.li/pricing
    note: From the Plus plan up.
  anonymous_signup:
    answer: no
    evidence: https://anon.li/privacy
    note: An existing email address is required to sign in and to receive forwarded mail.
  srs:
    answer: yes
    evidence: https://codeberg.org/anonli/mx/src/branch/main/plugins/queue.forward.js
    note: The envelope sender of forwarded mail and replies is rewritten with SRS on the anon.li domain.
  arc:
    answer: yes
    evidence: https://codeberg.org/anonli/mx/src/branch/main/plugins/arc.sign.js
    note: Forwarded mail is ARC-sealed with mailauth, and the chain validation result of any earlier ARC set is carried into the seal.
---

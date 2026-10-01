---
name: FairEmail
description: Open-source email app for Android that works with any IMAP, POP3 and SMTP provider and supports multiple accounts with a unified inbox.
website: https://email.faircode.eu
source: https://github.com/M66B/FairEmail
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/M66B/FairEmail/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/eu.faircode.email/latest/
    note: Exodus finds 0 trackers. Error reporting through Bugsnag is opt-in and off by default.
  no_ads:
    answer: yes
    evidence: https://github.com/M66B/FairEmail/blob/master/README.md
    note: No ads. Funded by optional paid pro features.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: partial
    evidence: https://github.com/M66B/FairEmail/blob/master/FAQ.md#faq12
    note: PGP needs the separate OpenKeychain or PGPony app. S/MIME is built in.
  no_cloud_relay:
    answer: yes
    evidence: https://github.com/M66B/FairEmail/blob/master/PRIVACY.md
    note: Connects directly to mail servers. Apart from opt-in error reports, no data is sent to the developer.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/M66B/FairEmail/blob/master/README.md
    note: Remote images must be confirmed before they load, and known tracking images are disabled.
  any_provider:
    answer: yes
    evidence: https://github.com/M66B/FairEmail/blob/master/README.md
    note: Works with any IMAP, POP3 and SMTP provider.
---

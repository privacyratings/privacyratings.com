---
name: Alpine
description: Text-based email client derived from Pine, for Unix-like systems and Windows, with built-in IMAP, POP3 and SMTP support and S/MIME encryption.
website: https://alpineapp.email
source: https://repo.or.cz/alpine.git
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://repo.or.cz/alpine.git/blob/HEAD:/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://repo.or.cz/alpine.git
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://alpineapp.email
    note: Free software distributed at no cost. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: partial
    evidence: https://repo.or.cz/alpine.git/blob/HEAD:/pith/pine.hlp
    note: S/MIME is built in. PGP needs an external display and sending filter such as GnuPG wrappers.
  no_cloud_relay:
    answer: yes
    evidence: https://repo.or.cz/alpine.git
    note: Connects directly to IMAP, POP3 and SMTP servers. No vendor service is involved.
  remote_content_blocked:
    answer: yes
    evidence: https://repo.or.cz/alpine.git/blob/HEAD:/pith/pine.hlp
    note: Text-based client that does not load remote content. When a message is opened in an external browser, links to external images are removed by default.
  any_provider:
    answer: yes
    evidence: https://repo.or.cz/alpine.git/blob/HEAD:/pith/pine.hlp
    note: Works with any IMAP, POP3 and SMTP provider.
---

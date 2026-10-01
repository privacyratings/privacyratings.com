---
name: Dovecot
description: IMAP and POP3 server for Linux and Unix that stores and serves mailboxes, with support for Sieve filtering through Pigeonhole. The Community Edition is open source.
website: https://dovecot.org
source: https://github.com/dovecot/core
jurisdiction: FI
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/dovecot/core/blob/main/COPYING
    note: LGPL-2.1 and MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/dovecot/core
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://www.dovecotpro.com/
    note: Funded by the commercial Dovecot Pro edition sold by Open-Xchange. No ads.
  independent_audit:
    answer: partial
    evidence: https://cure53.de/pentest-report_dovecot.pdf
    note: Code audit by Cure53, older than three years.
---

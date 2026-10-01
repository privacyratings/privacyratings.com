---
name: imapsync
description: Command-line tool that copies or migrates mail between two IMAP accounts, often used for mailbox migrations and incremental backups to another IMAP server.
website: https://imapsync.lamiral.info/
source: https://github.com/imapsync/imapsync
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/imapsync/imapsync/blob/master/LICENSE
    note: Source code is public under the NO LIMIT Public License, which is not OSI-approved.
  no_trackers:
    answer: no
    note: The website loads Google Analytics and Google Ads tags. The tool's release check is off by default.
  no_ads:
    answer: partial
    evidence: https://imapsync.lamiral.info/
    note: Funded by paid downloads and support, with no ads in the tool, but the website sends visitor data to Google Ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

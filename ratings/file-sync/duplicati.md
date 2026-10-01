---
name: Duplicati
description: Backup client with deduplication, compression and AES-256 encryption, managed through a web interface. Stores backups on local disks, SFTP, WebDAV and many cloud storage services.
website: https://duplicati.com
source: https://github.com/duplicati/duplicati
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/duplicati/duplicati/blob/master/LICENSE
    note: MIT. A disk imaging module in the proprietary directory needs a paid subscription.
  no_trackers:
    answer: no
    evidence: https://github.com/duplicati/duplicati/blob/master/Duplicati/Library/UsageReporter/Reporter.cs
    note: The client sends usage reports to Duplicati by default unless turned off, and the website loads PostHog and Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://duplicati.com/pricing
    note: Free client funded by paid Duplicati Console and enterprise plans, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

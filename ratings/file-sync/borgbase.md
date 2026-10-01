---
name: BorgBase
description: Hosted backup storage for BorgBackup and restic repositories, with append-only mode, monitoring alerts and a choice of EU or US storage regions.
website: https://www.borgbase.com
jurisdiction: MT
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/borgbase/vorta
    note: Works with open source clients such as Borg, restic and its own Vorta app, but the hosting service is not published.
  no_trackers:
    answer: partial
    evidence: https://www.borgbase.com/privacy/
    note: The website uses self-hosted Fathom analytics with no third-party service, and Sentry for error reports.
  no_ads:
    answer: yes
    evidence: https://www.borgbase.com/privacy/
    note: Funded by paid plans. The privacy policy says backups are not sold or used for advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

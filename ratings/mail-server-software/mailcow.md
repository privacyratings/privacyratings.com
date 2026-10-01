---
name: mailcow
description: Self-hosted mail server suite based on Docker, with SMTP, IMAP, the SOGo webmail and groupware, spam filtering and a web admin interface.
website: https://mailcow.email
source: https://github.com/mailcow/mailcow-dockerized
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mailcow/mailcow-dockerized/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/mailcow/mailcow-dockerized
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://mailcow.email/
    note: Funded by sponsorships and optional paid supporter licenses. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

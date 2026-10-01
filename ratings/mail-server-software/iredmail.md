---
name: iRedMail
description: Installer script that sets up a complete mail server on Linux or BSD from open-source components such as Postfix, Dovecot, Roundcube and SpamAssassin.
website: https://www.iredmail.org
source: https://github.com/iredmail/iRedMail
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/iredmail/iRedMail/blob/master/LICENSE
    note: GPL-3.0. The paid iRedAdmin-Pro panel and Enterprise Edition are separate products.
  no_trackers:
    answer: yes
    evidence: https://www.iredmail.org/
    note: No third-party trackers. The website uses GoatCounter, which is cookieless and aggregate-only, and the installer has no telemetry.
  no_ads:
    answer: yes
    evidence: https://www.iredmail.org/pricing.html
    note: Funded by sales of iRedAdmin-Pro, the Enterprise Edition and support. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

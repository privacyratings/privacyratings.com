---
name: Nebulo
description: Android DNS changer that sends queries over DNS-over-HTTPS or DNS-over-TLS without root, using Android's VPN interface by default.
website: https://play.google.com/store/apps/details?id=com.frostnerd.smokescreen
source: https://github.com/Ch4t4r/Nebulo
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Ch4t4r/Nebulo/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.frostnerd.smokescreen/latest/
    note: Exodus finds the Sentry crash reporting SDK in the app, and the website loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.frostnerd.smokescreen/latest/
    note: Free app with no advertising SDKs or in-app purchases.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---

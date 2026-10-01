---
name: FreshTomato
description: Linux-based replacement firmware for Broadcom-based routers, with a web interface for VPN, bandwidth monitoring, quality of service and access control.
website: https://freshtomato.org
source: https://github.com/FreshTomato-Project/freshtomato-arm
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/FreshTomato-Project/freshtomato-arm/blob/arm-master/LICENSE.md
    note: GPL-3.0, but some Broadcom wireless and acceleration drivers are included only as prebuilt binaries.
  no_trackers:
    answer: yes
    evidence: https://github.com/FreshTomato-Project/freshtomato-arm
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://freshtomato.org/donations.html
    note: Volunteer project funded by donations through PayPal, GitHub Sponsors, Patreon and Bitcoin, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

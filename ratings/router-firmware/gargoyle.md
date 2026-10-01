---
name: Gargoyle
description: Router firmware based on OpenWrt with a web interface focused on ease of use, offering per-device bandwidth monitoring, quotas, quality of service, website blocking and VPN.
website: https://www.gargoyle-router.com
source: https://github.com/ericpaulbishop/gargoyle
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ericpaulbishop/gargoyle/tree/master/LICENSES
    note: GPL-2.0, with some components under LGPL-2.1, MIT and BSD-3-Clause.
  no_trackers:
    answer: no
    evidence: https://www.gargoyle-router.com/donate.php
    note: Pages of the website, such as the donation page, load Google Analytics.
  no_ads:
    answer: yes
    evidence: https://www.gargoyle-router.com/donate.php
    note: Funded by donations and sales of routers with Gargoyle pre-installed, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

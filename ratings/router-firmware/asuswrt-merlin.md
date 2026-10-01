---
name: Asuswrt-Merlin
description: Customized version of the stock Asus router firmware that fixes known issues and adds features such as user scripts and extended VPN options, while keeping Asus features and hardware acceleration.
website: https://www.asuswrt-merlin.net
source: https://github.com/RMerl/asuswrt-merlin.ng
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/RMerl/asuswrt-merlin.ng/blob/main/README.proprietary
    note: GPL-2.0 base, but includes proprietary binary components from Asus, Broadcom, Trend Micro and Tuxera.
  no_trackers:
    answer: no
    evidence: https://www.asuswrt-merlin.net/
    note: The website loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://www.asuswrt-merlin.net/
    note: Developed by an independent developer and supported by PayPal donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

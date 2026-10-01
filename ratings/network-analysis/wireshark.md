---
name: Wireshark
description: Network protocol analyzer that captures network traffic and lets users inspect packets across hundreds of protocols, live or from saved capture files.
website: https://www.wireshark.org
source: https://gitlab.com/wireshark/wireshark
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/wireshark/wireshark/-/blob/master/COPYING
    note: GPL-2.0-or-later.
  no_trackers:
    answer: no
    evidence: https://www.wireshark.org/
    note: The application has no telemetry, but the website loads Google Analytics and Cloudflare Web Analytics.
  no_ads:
    answer: yes
    evidence: https://wiresharkfoundation.org/about/
    note: Maintained by the non-profit Wireshark Foundation, funded by donations and memberships, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

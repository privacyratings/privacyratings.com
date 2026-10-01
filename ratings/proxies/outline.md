---
name: Outline
description: Tool for setting up a personal Shadowsocks-based VPN server on a cloud provider and sharing access keys, with a manager app for servers and client apps for users.
website: https://getoutline.org
source: https://github.com/OutlineFoundation/outline-apps
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/OutlineFoundation/outline-apps/blob/master/LICENSE
    note: Apache-2.0 for the apps and the server.
  no_trackers:
    answer: no
    evidence: https://getoutline.org/policies/data-collection/
    note: The website loads Google Analytics, and the apps send crash reports to Sentry; usage metrics are opt-in.
  no_ads:
    answer: yes
    evidence: https://getoutline.org/faq/
    note: Free software maintained by a non-profit foundation, with no ads or data sales.
  independent_audit:
    answer: yes
    evidence: https://getoutline.org/reports/cure53-report-SDK-2024.pdf
    note: Full Cure53 report on the Outline SDK; older full reports from Radically Open Security and Cure53 are also published.
---

---
name: V2Ray
description: Proxy platform maintained by the V2Fly community that supports VMess, VLESS, Shadowsocks, Trojan and other protocols with configurable routing, used as a server and client core for censorship circumvention.
website: https://www.v2fly.org
source: https://github.com/v2fly/v2ray-core
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/v2fly/v2ray-core/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/v2fly/v2ray-core
    note: No telemetry or analytics in the source code, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/v2fly/v2ray-core
    note: Free community project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

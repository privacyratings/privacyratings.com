---
name: mitmproxy
description: Interactive HTTPS proxy for intercepting, inspecting, modifying and replaying web traffic, with a console interface, a web interface and a Python scripting API.
website: https://www.mitmproxy.org
source: https://github.com/mitmproxy/mitmproxy
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mitmproxy/mitmproxy/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/mitmproxy/mitmproxy
    note: No telemetry or analytics in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://www.mitmproxy.org/
    note: Funded by grants from NLnet and GitHub Sponsors donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

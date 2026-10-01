---
name: Falcon
description: Minimal Python framework for building REST APIs and microservices, supporting both WSGI and ASGI.
website: https://falconframework.org
source: https://github.com/falconry/falcon
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/falconry/falcon/blob/master/LICENSE
    note: Apache-2.0 licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/falconry/falcon
    note: No telemetry in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: partial
    evidence: https://falcon.readthedocs.io/en/stable/
    note: Funded by donations through Open Collective, but the documentation hosted on Read the Docs shows EthicalAds.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

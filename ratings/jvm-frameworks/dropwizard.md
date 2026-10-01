---
name: Dropwizard
description: Java framework for building RESTful web services that bundles Jetty, Jersey and Jackson into one application package with built-in metrics and health checks.
website: https://www.dropwizard.io
source: https://github.com/dropwizard/dropwizard
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/dropwizard/dropwizard/blob/release/5.0.x/LICENSE
    note: Apache 2.0-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/dropwizard/dropwizard
    note: No telemetry in the source code, and the Read the Docs site has analytics turned off.
  no_ads:
    answer: partial
    evidence: https://www.dropwizard.io/en/stable/
    note: No ads in the framework, but the documentation site on Read the Docs shows EthicalAds contextual ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

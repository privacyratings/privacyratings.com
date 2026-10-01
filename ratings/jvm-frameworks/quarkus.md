---
name: Quarkus
description: Java framework for cloud and Kubernetes applications, designed for fast startup and low memory use, with GraalVM native compilation and a live-reload dev mode.
website: https://quarkus.io
source: https://github.com/quarkusio/quarkus
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/quarkusio/quarkus/blob/main/LICENSE
    note: Apache 2.0-licensed.
  no_trackers:
    answer: partial
    evidence: https://quarkus.io/guides/build-analytics/
    note: Build analytics are opt-in, but the quarkus.io website uses Matomo analytics hosted at ossupstream.org and loads a Mailjet newsletter script.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/quarkus
    note: Commonhaus Foundation project funded by sponsors and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

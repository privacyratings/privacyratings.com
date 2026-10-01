---
name: Micronaut
description: JVM framework for microservices and serverless applications in Java, Kotlin and Groovy, using compile-time dependency injection instead of reflection.
website: https://micronaut.io
source: https://github.com/micronaut-projects/micronaut-core
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/micronaut-projects/micronaut-core/blob/5.3.x/LICENSE
    note: Apache 2.0-licensed.
  no_trackers:
    answer: no
    evidence: https://micronaut.io/
    note: The framework has no telemetry, but the micronaut.io website loads Google Analytics through Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://micronaut.io/support/
    note: Commonhaus Foundation project supported by sponsors and commercial support providers, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

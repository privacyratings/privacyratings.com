---
name: Spring Boot
description: Java framework from the Spring project for building standalone applications, with auto-configuration, embedded web servers and starter dependencies.
website: https://spring.io/projects/spring-boot/
aliases:
  - Spring
  - Spring Framework
source: https://github.com/spring-projects/spring-boot
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/spring-projects/spring-boot/blob/main/LICENSE.txt
    note: Apache 2.0-licensed.
  no_trackers:
    answer: no
    evidence: https://spring.io/projects/spring-boot/
    note: The framework has no telemetry, but the spring.io website loads Google Tag Manager, OneTrust and Cloudflare Web Analytics.
  no_ads:
    answer: yes
    evidence: https://enterprise.spring.io/
    note: Developed by Broadcom and funded by its paid Tanzu Spring support, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

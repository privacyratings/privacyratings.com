---
name: Grails
description: Web application framework for the Groovy language built on Spring Boot, with convention over configuration, the GORM data layer and GSP templates.
website: https://grails.apache.org
source: https://github.com/apache/grails-core
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/apache/grails-core/blob/8.0.x/LICENSE
    note: Apache 2.0-licensed.
  no_trackers:
    answer: no
    evidence: https://grails.apache.org/
    note: The grails.apache.org website loads the kapa.ai assistant widget with fingerprint-based analytics, alongside the Apache self-hosted Matomo.
  no_ads:
    answer: yes
    evidence: https://www.apache.org/foundation/sponsorship.html
    note: Hosted by the Apache Software Foundation, which is funded by sponsors and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

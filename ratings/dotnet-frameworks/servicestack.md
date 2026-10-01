---
name: ServiceStack
description: Framework for building message-based web services and APIs on .NET, with typed clients, an ORM and generated admin interfaces. Dual-licensed under the AGPL and a commercial license.
website: https://servicestack.net
source: https://github.com/ServiceStack/ServiceStack
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ServiceStack/ServiceStack/blob/main/license.txt
    note: AGPL-3.0-licensed with a FOSS exception, and a paid commercial license for closed-source use.
  no_trackers:
    answer: no
    evidence: https://servicestack.net/
    note: The servicestack.net website loads Google Analytics through Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://account.servicestack.net/pricing
    note: Funded by commercial licenses, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

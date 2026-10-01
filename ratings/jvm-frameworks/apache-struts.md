---
name: Apache Struts
description: Apache MVC framework for building Java web applications, based on actions, interceptors and result views.
website: https://struts.apache.org
source: https://github.com/apache/struts
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/apache/struts/blob/main/LICENSE
    note: Apache 2.0-licensed.
  no_trackers:
    answer: no
    evidence: https://struts.apache.org/
    note: The struts.apache.org website loads the Facebook SDK for a Like button, alongside the Apache self-hosted Matomo.
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

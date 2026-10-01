---
name: Laminas
description: PHP framework and component collection, the successor to Zend Framework, with an MVC layer and the Mezzio middleware framework.
website: https://getlaminas.org
aliases:
  - Zend Framework
source: https://github.com/laminas/laminas-mvc
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/laminas/laminas-mvc/blob/3.9.x/LICENSE.md
    note: BSD 3-Clause licensed.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: yes
    evidence: https://github.com/laminas/laminas-mvc
    note: No telemetry in the framework source code, and getlaminas.org loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://crowdfunding.linuxfoundation.org/initiatives/laminas-project
    note: A Linux Foundation project funded by member companies and crowdfunding, with no ads.
platforms:
  - linux
  - macos
  - windows
jurisdiction: US
---

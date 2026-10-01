---
name: Phalcon
description: Full-stack PHP framework delivered as a C extension, with MVC components, an ORM and the Volt template engine.
website: https://phalcon.io
source: https://github.com/phalcon/cphalcon
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/phalcon/cphalcon/blob/master/LICENSE.txt
    note: BSD 3-Clause licensed.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: no
    evidence: https://phalcon.io/en-us
    note: The framework has no telemetry, but phalcon.io loads Google Analytics through Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/phalcon
    note: Funded by donations through Open Collective, with no ads.
platforms:
  - linux
  - macos
  - windows
---

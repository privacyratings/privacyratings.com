---
name: Play Framework
description: Web framework for Java and Scala with a stateless, non-blocking architecture, hot reloading during development and type-safe templates.
website: https://www.playframework.com
source: https://github.com/playframework/playframework
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/playframework/playframework/blob/main/LICENSE
    note: Apache 2.0-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/playframework/playframework
    note: No telemetry in the source code, and playframework.com loads no analytics, only sponsor images from Open Collective, Clearbit and Gravatar.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/playframework
    note: Funded by sponsors and donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

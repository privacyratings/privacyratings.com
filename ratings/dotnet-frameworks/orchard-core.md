---
name: Orchard Core
description: Modular application framework and content management system built on ASP.NET Core, with multi-tenancy and a headless CMS mode.
website: https://orchardcore.net
source: https://github.com/OrchardCMS/OrchardCore
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/OrchardCMS/OrchardCore/blob/main/LICENSE
    note: BSD 3-Clause-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/OrchardCMS/OrchardCore
    note: No telemetry in the source code, and orchardcore.net and its Read the Docs documentation load no third-party trackers.
  no_ads:
    answer: partial
    evidence: https://docs.orchardcore.net/en/latest/
    note: A .NET Foundation project with no ads in the framework, but the documentation site on Read the Docs shows EthicalAds contextual ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

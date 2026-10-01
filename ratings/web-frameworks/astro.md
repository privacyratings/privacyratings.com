---
name: Astro
description: Web framework for content-driven websites that renders pages to HTML and loads JavaScript only for interactive components.
website: https://astro.build
source: https://github.com/withastro/astro
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/withastro/astro/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://astro.build/telemetry/
    note: The CLI sends anonymous telemetry by default until disabled, and astro.build uses Fathom analytics.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/astrodotbuild
    note: Funded by Cloudflare and sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - web
jurisdiction: US
---

---
name: Starlight
description: Documentation website framework built on Astro, with navigation, search, internationalization and theming included.
website: https://starlight.astro.build
source: https://github.com/withastro/starlight
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/withastro/starlight/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://astro.build/telemetry/
    note: Astro, which Starlight runs on, sends anonymous CLI telemetry by default until disabled, and the website uses Fathom, a cookieless analytics service.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/astrodotbuild
    note: Developed by the Astro team at Cloudflare and supported by Open Collective donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

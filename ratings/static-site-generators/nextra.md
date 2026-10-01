---
name: Nextra
description: Static site and documentation framework built on Next.js and React, which turns Markdown and MDX files into websites with themes for docs and blogs.
website: https://nextra.site
source: https://github.com/shuding/nextra
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/shuding/nextra/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://nextjs.org/telemetry
    note: The nextra.site website has no third-party trackers, but Nextra sites are built with the Next.js CLI, which sends anonymous telemetry by default until disabled.
  no_ads:
    answer: yes
    evidence: https://nextra.site/sponsors
    note: Funded by sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

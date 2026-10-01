---
name: Bun
description: JavaScript runtime, package manager, test runner and bundler in a single executable, built on JavaScriptCore and written in Zig.
website: https://bun.com
source: https://github.com/oven-sh/bun
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/oven-sh/bun/blob/main/LICENSE.md
    note: MIT, with the statically linked JavaScriptCore under LGPL-2.
  no_trackers:
    answer: partial
    evidence: https://bun.com/docs/runtime/bunfig
    note: Anonymous crash reports are on by default and can be turned off, and the website uses Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://bun.com/blog/bun-joins-anthropic
    note: Free MIT-licensed software backed by Anthropic, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

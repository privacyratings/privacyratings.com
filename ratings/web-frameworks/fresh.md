---
name: Fresh
description: Web framework for Deno from Deno Land that renders pages on the server with Preact and ships JavaScript only for interactive islands.
website: https://usefresh.dev
source: https://github.com/denoland/fresh
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/denoland/fresh/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: no
    evidence: https://github.com/denoland/fresh/blob/main/www/routes/_middleware.ts
    note: The framework has no telemetry, but the usefresh.dev website sends page views with visitor IP addresses to Google Analytics from its server.
  no_ads:
    answer: yes
    evidence: https://deno.com/deploy/pricing
    note: Developed by Deno Land and funded by its paid Deno Deploy hosting, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

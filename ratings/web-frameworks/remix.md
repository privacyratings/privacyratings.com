---
name: Remix
description: Full-stack web framework for JavaScript and TypeScript from Shopify, built on web standards such as the Fetch API and HTML forms. Its earlier React-based version continues as the framework mode of React Router.
website: https://remix.run
source: https://github.com/remix-run/remix
jurisdiction: CA
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/remix-run/remix/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://remix.run/
    note: The framework has no telemetry, but remix.run loads Fathom, a cookieless analytics service.
  no_ads:
    answer: yes
    evidence: https://www.shopify.com/pricing
    note: Developed by Shopify and funded by its paid commerce platform, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

---
name: Leptos
description: Full-stack web framework for Rust based on fine-grained reactivity, with server-side rendering, hydration and server functions, compiling to WebAssembly for the browser.
website: https://leptos.dev
source: https://github.com/leptos-rs/leptos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/leptos-rs/leptos/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://leptos.dev/
    note: The framework has no telemetry, but the leptos.dev website loads cookieless Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://github.com/sponsors/gbj
    note: Funded by sponsors of its maintainer through GitHub Sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - web
---

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
    answer: yes
    evidence: https://leptos.dev/
    note: No third-party trackers, and the framework has no telemetry. The website's Plausible analytics are cookieless and aggregate-only.
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

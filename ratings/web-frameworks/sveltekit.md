---
name: SvelteKit
description: Framework for building web applications with Svelte, a compiler-based UI framework, with routing, server-side rendering and static site generation.
website: https://svelte.dev
source: https://github.com/sveltejs/kit
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/sveltejs/kit/blob/version-3/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/package.json
    note: The framework has no telemetry, but svelte.dev uses Vercel Speed Insights.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/svelte
    note: Funded by donations and sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - web
---

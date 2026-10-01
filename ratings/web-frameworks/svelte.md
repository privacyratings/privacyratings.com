---
name: Svelte
description: Component framework for JavaScript and TypeScript that compiles components into JavaScript at build time instead of using a virtual DOM.
website: https://svelte.dev
source: https://github.com/sveltejs/svelte
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/sveltejs/svelte/blob/main/LICENSE.md
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/src/routes/+layout.svelte
    note: The compiler and CLI have no telemetry, but svelte.dev loads Vercel Web Analytics and Speed Insights, which are cookieless.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/svelte
    note: Funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
pick: 1
pick_reason: Compiles components to small, fast JavaScript with no virtual DOM and no telemetry, and works well with TypeScript. The Forward Email webmail and apps use Svelte and TypeScript on Tauri (github.com/forwardemail/mail.forwardemail.net).
---

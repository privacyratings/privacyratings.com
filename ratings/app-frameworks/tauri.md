---
name: Tauri
description: Framework for building desktop and mobile applications with a web frontend and a Rust backend, using the operating system's webview.
website: https://tauri.app
source: https://github.com/tauri-apps/tauri
jurisdiction: NL
platforms:
  - linux
  - macos
  - windows
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/tauri-apps/tauri/blob/dev/LICENSE.spdx
    note: Dual-licensed under MIT and Apache 2.0.
  no_trackers:
    answer: partial
    evidence: https://tauri.app/
    note: The framework and CLI have no telemetry, but tauri.app loads Netlify Real User Monitoring.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/tauri
    note: Run by the Tauri Programme within the Commons Conservancy and funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: yes
    evidence: https://github.com/tauri-apps/tauri/blob/dev/audits/Radically_Open_Security-v2-report.pdf
    note: Radically Open Security published a full penetration test report on Tauri 2.0.
pick: 1
pick_reason: Small, fast apps for desktop and mobile from one web codebase, using the system web view instead of a bundled browser. A Rust core with a permission system, no telemetry, and a public independent audit. Pairs well with Svelte and TypeScript, as in the Forward Email apps (github.com/forwardemail/mail.forwardemail.net), which ship to Windows, macOS, Linux, Android and iOS from one Tauri, Svelte and TypeScript codebase.
---

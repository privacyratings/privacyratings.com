---
name: Cap
description: Open-source screen recorder for macOS, Windows and Linux. Recordings can be edited locally, or uploaded to Cap's cloud, a self-hosted server, S3-compatible storage or Google Drive and shared as a link.
website: https://cap.so
source: https://github.com/CapSoftware/Cap
platforms:
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/CapSoftware/Cap/blob/main/LICENSE
    note: AGPL-3.0, with some recording crates under MIT. The web platform is included and can be self-hosted.
  no_trackers:
    answer: partial
    evidence: https://github.com/CapSoftware/Cap/blob/main/apps/desktop/src/utils/analytics.ts
    note: The desktop app and website send usage analytics to OpenPanel, a cookieless analytics service, by default. The app has a setting to turn telemetry off.
  no_ads:
    answer: yes
    evidence: https://cap.so/pricing
    note: Funded by paid licenses and subscriptions, with no ads.
  independent_audit:
    answer: partial
    evidence: https://cap.so/faq
    note: Cap states SOC 2 Type II and ISO 27001 compliance, but the reports are only available on request through its Trust Portal.
  local_by_default:
    answer: partial
    evidence: https://cap.so/docs/recording/studio-mode
    note: Studio Mode keeps recordings local until you choose to share them. Instant Mode uploads recordings to the cloud while recording.
  no_account_needed:
    answer: partial
    evidence: https://github.com/CapSoftware/Cap/blob/main/apps/desktop/src-tauri/src/recording.rs
    note: Local Studio recordings work without signing in. Instant Mode and shareable links need a Cap account.
---

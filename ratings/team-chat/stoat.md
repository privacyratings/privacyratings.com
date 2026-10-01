---
name: Stoat
description: Open source chat platform for friends and communities with servers, channels, direct messages and voice chat, formerly named Revolt. The server software can be self-hosted.
website: https://stoat.chat
aliases:
  - Revolt
source: https://github.com/stoatchat/stoatchat
jurisdiction: GB
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/stoatchat/stoatchat/blob/main/LICENSE
    note: Server and apps are AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://github.com/stoatchat/for-web/blob/main/packages/client/src/sentry.ts
    note: The official web and Android builds enable Sentry crash reporting by default; no ad or analytics trackers are used.
  no_ads:
    answer: yes
    evidence: https://stoat.chat/legal/privacy
    note: No ads; the privacy policy states data is never sold to third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

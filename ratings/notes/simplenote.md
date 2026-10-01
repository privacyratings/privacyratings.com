---
name: Simplenote
description: Plain-text note-taking app from Automattic with Markdown support, tags, version history and sync across devices. Free, with open source client apps.
website: https://simplenote.com
source: https://github.com/Automattic/simplenote-electron
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Automattic/simplenote-electron/blob/trunk/LICENSE.md
    note: The desktop, Android and iOS apps are GPL-2.0, but the Simperium sync server is closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.automattic.simplenote/latest/
    note: Exodus finds Sentry in the Android app, and the Automattic privacy policy allows third-party analytics providers.
  no_ads:
    answer: partial
    evidence: https://automattic.com/privacy/
    note: No ads in the app, but the Automattic privacy policy shares device identifiers and browsing activity with advertising partners.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

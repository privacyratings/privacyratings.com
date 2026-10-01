---
name: Clipy
description: Open-source clipboard manager for macOS, based on ClipMenu, with a clipboard history menu, snippets and keyboard shortcuts.
website: https://clipy-app.com
source: https://github.com/Clipy/Clipy
platforms:
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Clipy/Clipy/blob/develop/LICENSE
    note: MIT.
  no_trackers:
    answer: no
    evidence: https://github.com/Clipy/Clipy/blob/develop/Clipy/Sources/Dependencies/Firebase.swift
    note: The app sends Google Firebase Analytics events and crash reports by default, with a setting to turn them off. The website loads Google Analytics and the Facebook SDK.
  no_ads:
    answer: yes
    evidence: https://clipy-app.com
    note: Free open-source app with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

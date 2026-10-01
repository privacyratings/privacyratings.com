---
name: Cromite
description: Chromium fork and successor of Bromite for Android, Windows and Linux. Adds built-in ad blocking, removes Google service integrations and adds fingerprinting mitigations.
website: https://github.com/uazo/cromite
imported_from: awesome-privacy
source: https://github.com/uazo/cromite
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/uazo/cromite/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/uazo/cromite/blob/master/docs/FEATURES.md
    note: Google telemetry, Safe Browsing reporting and sign-in are removed.
  no_ads:
    answer: yes
    evidence: https://github.com/uazo/cromite#readme
    note: No ads. Funded by donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://github.com/uazo/cromite/blob/master/docs/FEATURES.md
    note: Built-in ad and tracker blocking is enabled by default.
  fingerprinting_protection:
    answer: yes
    evidence: https://github.com/uazo/cromite/blob/master/docs/FEATURES.md
    note: Canvas, client rect, media and audio fingerprinting mitigations are built in. The project notes they are not comprehensive.
  no_google_services:
    answer: yes
    evidence: https://github.com/uazo/cromite/blob/master/docs/FEATURES.md
    note: Google sign-in, sync, Translate, Safe Browsing and Play Services integrations are removed or disabled.
  security_updates:
    answer: no
    evidence: https://github.com/uazo/cromite/releases
    note: Stable releases often trail Chromium by several weeks or more.
---

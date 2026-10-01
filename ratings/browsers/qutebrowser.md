---
name: qutebrowser
description: Keyboard-driven browser with a minimal interface and Vim-style key bindings, built on Python and QtWebEngine.
website: https://qutebrowser.org
source: https://github.com/qutebrowser/qutebrowser
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/qutebrowser/qutebrowser/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/qutebrowser/qutebrowser
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://qutebrowser.org/
    note: Funded by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://qutebrowser.org/doc/help/settings.html#content.blocking.enabled
    note: The ad and host blocker is on by default, using EasyList and EasyPrivacy or a hosts list.
  fingerprinting_protection:
    answer: no
    note: No fingerprinting protection is documented.
  no_google_services:
    answer: yes
    evidence: https://github.com/qutebrowser/qutebrowser
    note: QtWebEngine has no Google Safe Browsing or other Google services, and no such connections are in the source code.
  security_updates:
    answer: no
    evidence: https://wiki.qt.io/QtWebEngine/ChromiumVersions
    note: QtWebEngine is based on an older Chromium branch, and backported security fixes arrive with Qt releases, often weeks after Chrome.
---

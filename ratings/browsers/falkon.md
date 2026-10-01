---
name: Falkon
description: KDE web browser built on QtWebEngine, with a built-in ad blocker, session management, and integration with the Plasma desktop.
website: https://www.falkon.org
source: https://invent.kde.org/network/falkon
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://invent.kde.org/network/falkon/-/blob/master/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://invent.kde.org/network/falkon
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: Developed by the KDE community and funded by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: partial
    evidence: https://github.com/KDE/falkon/blob/master/src/lib/adblock/adblockmanager.cpp
    note: The built-in ad blocker is on by default with EasyList and NoCoin, but tracker lists such as EasyPrivacy must be added by hand.
  fingerprinting_protection:
    answer: no
    note: No fingerprinting protection is documented.
  no_google_services:
    answer: yes
    evidence: https://invent.kde.org/network/falkon
    note: QtWebEngine has no Google Safe Browsing or other Google services, and no such connections are in the source code.
  security_updates:
    answer: no
    evidence: https://wiki.qt.io/QtWebEngine/ChromiumVersions
    note: QtWebEngine is based on an older Chromium branch, and backported security fixes arrive with Qt releases, often weeks after Chrome.
---

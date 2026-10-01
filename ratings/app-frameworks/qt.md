---
name: Qt
description: Cross-platform C++ application framework with the Qt Widgets and Qt Quick/QML user interface toolkits, for desktop, mobile and embedded devices.
website: https://www.qt.io
source: https://code.qt.io/cgit/qt/qtbase.git/
jurisdiction: FI
criteria:
  open_source:
    answer: partial
    evidence: https://code.qt.io/cgit/qt/qtbase.git/tree/LICENSES/LGPL-3.0-only.txt
    note: Available under LGPLv3 and GPL, or under a commercial license, but a few add-on modules and tools are commercial only.
  no_trackers:
    answer: no
    evidence: https://www.qt.io/
    note: The qt.io website loads Google Tag Manager, HubSpot, Optimizely and Sentry.
  no_ads:
    answer: yes
    evidence: https://www.qt.io/pricing
    note: Funded by commercial licenses from The Qt Company, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - android
  - ios
  - web
---

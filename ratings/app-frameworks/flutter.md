---
name: Flutter
description: Google's UI toolkit for building natively compiled mobile, web and desktop apps from one Dart codebase, drawing its own widgets with its rendering engine.
website: https://flutter.dev
source: https://github.com/flutter/flutter
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/flutter/flutter/blob/master/LICENSE
    note: BSD-3-Clause licensed.
  no_trackers:
    answer: no
    evidence: https://docs.flutter.dev/reference/crash-reporting
    note: The flutter tool sends usage statistics and crash reports to Google by default until disabled, and flutter.dev loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://flutter.dev/
    note: Developed and funded by Google, with no ads in the framework.
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

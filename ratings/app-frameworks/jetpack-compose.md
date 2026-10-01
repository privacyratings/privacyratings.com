---
name: Jetpack Compose
description: Google's declarative UI toolkit for Android apps, written in Kotlin, where interfaces are built from composable functions.
website: https://developer.android.com/compose
source: https://github.com/androidx/androidx
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/androidx/androidx/blob/androidx-main/LICENSE.txt
    note: Apache-2.0-licensed.
  no_trackers:
    answer: no
    evidence: https://developer.android.com/compose
    note: The developer.android.com website loads Google Analytics.
  no_ads:
    answer: yes
    evidence: https://github.com/androidx/androidx/blob/androidx-main/LICENSE.txt
    note: Developed and funded by Google, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - android
---

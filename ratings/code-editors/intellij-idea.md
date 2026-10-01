---
name: IntelliJ IDEA
description: IDE from JetBrains for Java, Kotlin and other JVM languages, with code analysis, refactoring, debugging and AI features. Some features require a paid subscription.
website: https://www.jetbrains.com/idea/
aliases:
  - JetBrains
mainstream: true
source: https://github.com/JetBrains/intellij-community
jurisdiction: CZ
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/JetBrains/intellij-community/blob/master/LICENSE.txt
    note: The core platform is Apache 2.0 and available as open-source builds, but the standard IntelliJ IDEA distribution includes proprietary features.
  no_trackers:
    answer: no
    evidence: https://www.jetbrains.com/legal/docs/privacy/privacy/#how-we-collect-data
    note: The website loads Google Tag Manager and shares data with third-party advertising partners. In the IDE, anonymous usage statistics are opt-in.
  no_ads:
    answer: partial
    evidence: https://www.jetbrains.com/idea/buy/
    note: Funded by paid subscriptions, with no ads in the IDE. The privacy policy allows sharing website data with advertising partners to market JetBrains products.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

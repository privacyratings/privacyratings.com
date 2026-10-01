---
name: Psiphon
description: Censorship circumvention tool that connects through a network of Psiphon servers using several obfuscated transport protocols, switching automatically when one is blocked.
website: https://psiphon.ca
source: https://github.com/Psiphon-Labs/psiphon-tunnel-core
jurisdiction: CA
platforms:
  - windows
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Psiphon-Labs/psiphon-tunnel-core/blob/master/LICENSE
    note: The tunnel core and apps are mostly GPL-3.0, but store builds bundle proprietary advertising SDKs.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.psiphon3.subscription/latest/
    note: The Android app contains Google AdMob, and the website uses Google Analytics.
  no_ads:
    answer: no
    evidence: https://psiphon.ca/en/privacy.html
    note: The free service is supported by advertising partners that may serve ads based on usage data.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

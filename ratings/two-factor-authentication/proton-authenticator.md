---
name: Proton Authenticator
description: Free, open source authenticator app from Proton for Android, iOS, macOS, Windows and Linux. It works without an account, and signing in with a Proton account adds end-to-end encrypted sync.
website: https://proton.me/authenticator
family: proton
source: https://github.com/protonpass/android-authenticator
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/protonpass/android-authenticator/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://proton.me/support/share-usage-statistics
    note: No third-party analytics, but Proton apps share usage statistics and crash reports by default, and these can be turned off in settings.
  no_ads:
    answer: yes
    evidence: https://proton.me/authenticator
    note: Free with no ads. Proton is funded by paid plans.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
jurisdiction: CH
---

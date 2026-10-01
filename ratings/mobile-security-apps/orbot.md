---
name: Orbot
description: Android and iOS app from the Guardian Project that routes app traffic through the Tor network as a VPN or proxy.
website: https://orbot.app/en/
source: https://github.com/guardianproject/orbot-android
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/guardianproject/orbot-android/blob/master/LICENSE
    note: BSD-3-Clause.
  no_trackers:
    answer: yes
    evidence: https://orbot.app/en/privacy-policy/
    note: The privacy policy states Orbot collects no activity data and uses no third-party analytics; the Exodus report finds no trackers.
  no_ads:
    answer: yes
    evidence: https://orbot.app/en/donate/
    note: Developed by the Guardian Project, funded by grants and donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

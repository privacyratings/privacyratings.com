---
name: Proton Calendar
description: End-to-end encrypted calendar from Proton for web, Android and iOS. Supports shared calendars, recurring events, time zones, ICS import and subscriptions, and integrates with Proton Mail.
website: https://proton.me/calendar
family: proton
source: https://github.com/ProtonMail/android-calendar
imported_from: awesome-privacy
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/ProtonMail/WebClients/blob/main/LICENSE
    note: The web, Android and iOS apps are GPL-3.0. The server code is not published.
  no_trackers:
    answer: partial
    evidence: https://proton.me/support/share-usage-statistics
    note: No third-party trackers, but anonymous usage statistics and crash reports are sent by default and can be turned off.
  no_ads:
    answer: yes
    evidence: https://proton.me/legal/privacy
    note: Funded by paid plans. The privacy policy rules out targeted advertising and profiling.
  independent_audit:
    answer: partial
    evidence: https://res.cloudinary.com/dbulfrlrz/images/v1707571626/wp-pme/securitum-protonmail-security-audit/securitum-protonmail-security-audit.pdf
    note: Securitum published a full audit of the Proton Mail and Calendar web apps, but it is older than three years.
jurisdiction: CH
---

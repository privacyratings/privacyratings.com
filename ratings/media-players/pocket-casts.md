---
name: Pocket Casts
description: Podcast player from Automattic for Android, iOS, the web and desktop, with syncing across devices, discovery and a paid Plus tier. The mobile apps are open source.
website: https://pocketcasts.com
source: https://github.com/Automattic/pocket-casts-android
jurisdiction: US
platforms:
  - android
  - ios
  - web
  - windows
  - macos
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Automattic/pocket-casts-android/blob/main/LICENSE.md
    note: The Android and iOS apps are MPL-2.0, but the sync server and web player are closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/au.com.shiftyjelly.pocketcasts/latest/
    note: The Android app contains Google Firebase Analytics and Sentry. In-app analytics can be turned off in settings.
  no_ads:
    answer: partial
    evidence: https://support.pocketcasts.com/article/privacy-policy/
    note: The free app shows banner ads that Plus removes, and the privacy policy states personal data is not sold or shared for targeted advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

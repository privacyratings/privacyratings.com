---
name: Stardust
description: Period tracking app with cycle predictions, symptom logging and moon-phase features, funded by subscriptions. Health data is stored against a random account ID, separate from contact details.
website: https://stardust.app
jurisdiction: US
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.stardust.app/latest/
    note: The Exodus report finds AppsFlyer, Google CrashLytics, Mixpanel, OneSignal and other trackers, and the website loads Google Tag Manager and New Relic.
  no_ads:
    answer: partial
    evidence: https://stardust.app/privacy-policy
    note: Funded by subscriptions with no data sales, but with consent device data is shared with AppsFlyer and Firebase to target Stardust's own ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_storage:
    answer: no
    evidence: https://stardust.app/your-data
    note: Health data is stored on Stardust's servers, encrypted and linked to a random account ID, but not end-to-end encrypted.
  no_account_needed:
    answer: no
    evidence: https://stardust.app/terms-of-use
    note: An account is required.
---

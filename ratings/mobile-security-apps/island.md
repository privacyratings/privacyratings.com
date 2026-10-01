---
name: Island
description: Android sandbox that uses a work profile to clone selected apps, isolate them from personal data, and freeze them when not in use.
website: https://island.oasisfeng.com
source: https://github.com/oasisfeng/island
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/oasisfeng/island/blob/master/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.oasisfeng.island/latest/
    note: The Exodus report for the Google Play build finds Google Analytics, Google Firebase Analytics and Google Crashlytics.
  no_ads:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.oasisfeng.island/latest/
    note: Free app with no ads; the Exodus report finds no advertising libraries.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

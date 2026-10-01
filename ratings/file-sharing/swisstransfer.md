---
name: SwissTransfer
description: Free file transfer service from Infomaniak for sending large files by link or email without an account, with files stored in Switzerland for a limited time.
website: https://www.swisstransfer.com/en
jurisdiction: CH
domain: www.swisstransfer.com
source: https://github.com/Infomaniak/android-SwissTransfer
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Infomaniak/android-SwissTransfer/blob/main/LICENSE
    note: The mobile apps are GPL-3.0, but the server is closed source.
  no_trackers:
    answer: partial
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.infomaniak.swisstransfer/latest/
    note: The Android app includes Matomo analytics and Sentry crash reporting, and the website uses Matomo, which Infomaniak hosts on its own servers.
  no_ads:
    answer: yes
    evidence: https://www.infomaniak.com/en/legal/confidentiality-policy
    note: Funded by Infomaniak's paid services. The site promotes Infomaniak products but shows no third-party ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---

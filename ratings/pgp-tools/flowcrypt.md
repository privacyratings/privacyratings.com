---
name: FlowCrypt
description: Browser extension for OpenPGP email encryption in Gmail on Chrome, Firefox and other browsers, with companion apps for Android and iOS.
website: https://flowcrypt.com
source: https://github.com/FlowCrypt/flowcrypt-browser
imported_from: awesome-privacy
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/FlowCrypt/flowcrypt-browser/blob/master/LICENSE
    note: Source available under a custom license. Not an OSI license.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.flowcrypt.email/latest/
    note: The website loads Mouseflow session recording, and Exodus finds ACRA and OpenTelemetry in the Android app.
  no_ads:
    answer: yes
    evidence: https://flowcrypt.com/privacy
    note: Funded by enterprise licenses. The privacy policy states personal information is not sold.
  independent_audit:
    answer: partial
    evidence: https://flowcrypt.com/assets/documents/FLO-02-report.pdf
    note: Cure53 published full reports on the extension and apps, but they are older than three years.
jurisdiction: CZ
---

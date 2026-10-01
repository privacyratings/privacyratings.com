---
name: ONLYOFFICE
description: Office suite for documents, spreadsheets, presentations and PDFs with a focus on Microsoft Office format compatibility, available as desktop editors, mobile apps, a self-hosted server and the DocSpace cloud.
website: https://www.onlyoffice.com
source: https://github.com/ONLYOFFICE/DesktopEditors
jurisdiction: LV
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/ONLYOFFICE/DesktopEditors/blob/master/LICENSE
    note: The desktop editors and Docs server are AGPL-3.0. The mobile apps are closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.onlyoffice.documents/latest/
    note: The Android app includes Google Firebase Analytics, Crashlytics and Facebook Login, and the website uses Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://www.onlyoffice.com/privacy
    note: Funded by commercial editions and cloud plans. The privacy policy states that personal data is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

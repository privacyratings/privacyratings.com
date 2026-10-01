---
name: Docusign
description: Electronic signature service for sending, signing and tracking agreements, part of Docusign's agreement management platform.
website: https://www.docusign.com
mainstream: true
domain: apps.docusign.com
jurisdiction: US
platforms:
  - web
  - android
  - ios
aliases:
  - DocuSign
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.docusign.ink/latest/
    note: The Android app includes 7 trackers, including AppsFlyer, Mixpanel and Google Firebase Analytics, and the website uses Google Tag Manager and Optimizely.
  no_ads:
    answer: partial
    evidence: https://www.docusign.com/privacy
    note: Funded by subscriptions, but Docusign discloses personal information to advertising partners in ways that may count as a sale or targeted advertising under US state laws.
  independent_audit:
    answer: partial
    evidence: https://www.docusign.com/trust/compliance/certifications
    note: Docusign has SOC 1 Type II and SOC 2 Type II audits. The reports are only available through the Docusign Trust Portal.
  transparency_report:
    answer: partial
    evidence: https://www.docusign.com/legal/law-enforcement
    note: Publishes law enforcement guidelines. The annual transparency report is only given to data protection authorities on request.
  user_notice:
    answer: yes
    evidence: https://www.docusign.com/legal/law-enforcement
    note: Docusign notifies customers whose data is requested unless a non-disclosure order or statute prohibits it.
---

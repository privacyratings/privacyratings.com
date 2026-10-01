---
name: DocuSeal
description: Open-source platform for creating fillable PDF forms and collecting electronic signatures, available as a hosted service or for self-hosting.
website: https://www.docuseal.com
domain: www.docuseal.com
source: https://github.com/docusealco/docuseal
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/docusealco/docuseal/blob/master/LICENSE
    note: The core is AGPL-3.0. Pro features in the hosted service and the paid self-hosted edition are closed source.
  no_trackers:
    answer: partial
    evidence: https://www.docuseal.com/privacy
    note: No tracking or analytics cookies. The hosted service sends error logs to Rollbar.
  no_ads:
    answer: yes
    evidence: https://www.docuseal.com/privacy
    note: Funded by paid plans. The privacy policy states that personal information is not sold.
  independent_audit:
    answer: partial
    evidence: https://www.docuseal.com/security
    note: DocuSeal Cloud has a SOC 2 Type II audit. The report is only available on request.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---

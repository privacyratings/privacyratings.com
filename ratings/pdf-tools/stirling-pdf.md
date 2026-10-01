---
name: Stirling PDF
description: Open-core PDF toolkit that runs as a desktop app, in the browser or on a self-hosted server, with tools to merge, split, convert, OCR, sign and redact PDFs.
website: https://www.stirling.com
source: https://github.com/Stirling-Tools/Stirling-PDF
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - web
aliases:
  - Stirling-PDF
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Stirling-Tools/Stirling-PDF/blob/main/LICENSE
    note: The core is MIT-licensed. The engine and proprietary directories use the source-available Stirling PDF User License.
  no_trackers:
    answer: no
    evidence: https://www.stirling.com/legal/privacy-policy
    note: The website uses Google Analytics through Google Tag Manager, and the product can send PostHog analytics.
  no_ads:
    answer: yes
    evidence: https://www.stirling.com/legal/privacy-policy
    note: Funded by paid plans. The privacy policy states that personal data is not sold or shared for targeted advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

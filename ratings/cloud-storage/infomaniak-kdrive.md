---
name: Infomaniak kDrive
description: Cloud storage from Swiss company Infomaniak, hosted in its own data centers in Switzerland, with open-source desktop and mobile apps.
website: https://www.infomaniak.com/en/ksuite/kdrive
domain: kdrive.infomaniak.com
jurisdiction: CH
platforms:
  - web
  - windows
  - macos
  - linux
  - android
  - ios
source: https://github.com/Infomaniak/desktop-kDrive
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Infomaniak/desktop-kDrive/blob/master/LICENSE
    note: Desktop and mobile apps are open source under GPL-3.0. The server is not.
  no_trackers:
    answer: no
    evidence: https://www.infomaniak.com/en/legal/confidentiality-policy
    note: Traffic is measured with self-hosted Matomo, but with consent the website also loads Google Ads and other advertising partners' tracking.
  no_ads:
    answer: yes
    evidence: https://www.infomaniak.com/en/ksuite/kdrive/prices
    note: Funded by paid plans, with no ads in the service.
  independent_audit:
    answer: partial
    evidence: https://www.infomaniak.com/en/certifications
    note: Infomaniak is ISO 27001 certified, but only the certificate is public.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---

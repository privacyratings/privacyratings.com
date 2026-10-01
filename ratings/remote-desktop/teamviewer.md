---
name: TeamViewer
description: Proprietary remote access and support software that connects to computers and mobile devices through TeamViewer's relay servers, free for personal use and paid for commercial use.
website: https://www.teamviewer.com
mainstream: true
jurisdiction: DE
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.teamviewer.com/en/legal/privacy-and-cookies/
    note: The website loads Adobe, Facebook and LinkedIn trackers, and the privacy policy describes analysis of product usage data, including in the free version.
  no_ads:
    answer: yes
    evidence: https://www.teamviewer.com/en-us/pricing/overview/
    note: Funded by paid licenses with no ads in the software, and the privacy policy states personal information is not sold.
  independent_audit:
    answer: partial
    evidence: https://media.teamviewer.com/is/content/teamviewergmbh/teamviewer/central-image-hub/pdf/en/teamviewer-type-2-soc-3-report-en.pdf
    note: Only a public SOC 3 summary of the independent SOC 2 audit is published; the full SOC 2 report is not public.
---

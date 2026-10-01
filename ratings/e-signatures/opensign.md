---
name: OpenSign
description: Open-source electronic signature platform for preparing, sending and signing PDF documents, offered as a hosted service or for self-hosting.
website: https://www.opensignlabs.com
domain: app.opensignlabs.com
source: https://github.com/OpenSignLabs/OpenSign
jurisdiction: IN
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/OpenSignLabs/OpenSign/blob/main/LICENSE
    note: Mostly AGPL-3.0. The license file excludes one server directory, which has no OSI-approved license.
  no_trackers:
    answer: no
    evidence: https://www.opensignlabs.com/
    note: The website loads Google Tag Manager and Google Analytics.
  no_ads:
    answer: yes
    evidence: https://www.opensignlabs.com/plans-pricing
    note: Funded by paid plans, with no ads.
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

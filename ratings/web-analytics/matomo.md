---
name: Matomo
description: Open source web analytics platform, formerly Piwik, with detailed reports, goals, heatmaps and a tag manager. Can be self-hosted or used as the hosted Matomo Cloud.
website: https://matomo.org
source: https://github.com/matomo-org/matomo
domain: matomo.org
jurisdiction: NZ
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/matomo-org/matomo/blob/5.x-dev/LEGALNOTICE
    note: GPL-3.0-or-later. Some premium plugins are sold separately.
  no_trackers:
    answer: no
    evidence: https://matomo.org/privacy-policy/
    note: The privacy policy lists Google Ads tracking on the website, with consent where required.
  no_ads:
    answer: yes
    evidence: https://matomo.org/privacy-policy/
    note: Funded by Matomo Cloud subscriptions and paid plugins. The privacy policy states personal data is never sold.
  independent_audit:
    answer: no
    note: No independent audit is published. Paid external penetration tests are mentioned but no report is public.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_cookies:
    answer: partial
    evidence: https://matomo.org/faq/general/faq_157/
    note: The default tracking code sets first-party cookies, and a cookieless mode can be turned on.
  no_personal_data:
    answer: partial
    evidence: https://matomo.org/faq/general/configure-privacy-settings-in-matomo/
    note: IP masking is on by default, and full anonymization and data retention limits can be configured.
  self_hostable:
    answer: yes
    evidence: https://matomo.org/faq/on-premise/installing-matomo/
    note: Matomo On-Premise is officially supported for self-hosting.
---

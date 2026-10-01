---
name: LimeSurvey
description: Open-source survey software from LimeSurvey GmbH in Hamburg. It can be self-hosted for free or used as the paid LimeSurvey Cloud service hosted in Germany.
website: https://www.limesurvey.org
source: https://github.com/LimeSurvey/LimeSurvey
jurisdiction: DE
domain: account.limesurvey.org
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/LimeSurvey/LimeSurvey/master/LICENSE
    note: Licensed under GPL-2.0 or later.
  no_trackers:
    answer: no
    evidence: https://www.limesurvey.org/privacy-notice
    note: The website uses Google Analytics, Google Tag Manager and Zoho PageSense.
  no_ads:
    answer: yes
    evidence: https://www.limesurvey.org/pricing
    note: Funded by LimeSurvey Cloud subscriptions and services. The privacy notice states no external marketing providers are involved.
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

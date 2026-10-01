---
name: Ecosia
description: Search engine from the Berlin company Ecosia that shows results and ads from Microsoft Bing or Google and uses its profits for tree planting and climate projects.
website: https://www.ecosia.org
jurisdiction: DE
domain: www.ecosia.org
source: https://github.com/ecosia
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/ecosia/ios-browser/blob/main/LICENSE
    note: The iOS browser app is open source under MPL-2.0. The search engine itself is not.
  no_trackers:
    answer: no
    evidence: https://www.ecosia.org/privacy
    note: Uses third-party services including Microsoft Clarity and Braze, and the apps send device statistics and install attribution data.
  no_ads:
    answer: partial
    evidence: https://www.ecosia.org/privacy
    note: Funded by search ads from Microsoft Bing or Google, which are non-personalized unless the user consents.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_search_logs:
    answer: partial
    evidence: https://www.ecosia.org/privacy
    note: IP addresses are anonymized after at most seven days; search terms are shared with Bing or Google.
  no_personalized_ads:
    answer: yes
    evidence: https://www.ecosia.org/privacy
    note: Ads are non-personalized by default, and personalized ads are shown only with explicit consent.
  no_account_needed:
    answer: partial
    evidence: https://www.ecosia.org/privacy
    note: Search works without an account; sync and AI chat history need an Ecosia account.
---

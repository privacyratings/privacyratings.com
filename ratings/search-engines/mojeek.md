---
name: Mojeek
description: British search engine that uses its own crawler and index and states that it does not track users.
website: https://www.mojeek.com
jurisdiction: GB
domain: mojeek.com
imported_from: awesome-privacy
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://www.mojeek.com/about/privacy/
    note: No user tracking, no cookies by default, and IP addresses are not recorded in logs.
  no_ads:
    answer: partial
    evidence: https://www.mojeek.com/ads/
    note: Shows contextual ads based on the search query, not on user data.
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
    answer: yes
    evidence: https://www.mojeek.com/about/privacy/
    note: IP addresses are replaced with a country code in logs, so searches are not tied to identifiers.
  no_personalized_ads:
    answer: yes
    evidence: https://www.mojeek.com/ads/
    note: Ads are targeted only by keywords in the current search.
  no_account_needed:
    answer: yes
    evidence: https://www.mojeek.com/about/privacy/
    note: Search and preferences work without an account.
---

---
name: DuckDuckGo
description: >-
  Private search engine that does not save search history or tie searches to IP addresses. Ads are based on the search, not a profile.
website: https://duckduckgo.com
jurisdiction: US
source: https://github.com/duckduckgo
domain: duckduckgo.com
pick: true
pick_reason: >-
  Results good enough to replace Google for most searches, no search history, no profile-based ads, and no account needed. Apps and browser extensions are open source.
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/duckduckgo/Android/blob/develop/LICENSE
    note: Apps and extensions are open source, such as the Apache-2.0 Android app. The search engine itself is not.
  no_trackers:
    answer: yes
    evidence: https://duckduckgo.com/privacy
    note: No third-party trackers or tracking cookies; anonymous experiments store no identifiers, and the Android app has no known trackers in its Exodus report.
  no_ads:
    answer: partial
    evidence: https://duckduckgo.com/privacy
    note: Funded by search ads based only on the current search, not a profile.
  no_search_logs:
    answer: yes
    evidence: https://duckduckgo.com/privacy
    note: Search history is not saved, and IP addresses are not saved alongside searches.
  no_personalized_ads:
    answer: yes
    evidence: https://duckduckgo.com/privacy
  no_account_needed:
    answer: yes
    evidence: https://duckduckgo.com/privacy
    note: Search needs no account. Only optional extras such as Email Protection need one.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://duckduckgo.com/privacy
    note: The privacy policy states how legal requests are handled and that search histories cannot be provided, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://duckduckgo.com/privacy
    note: Users with an email address on file are notified of legal disclosures by email unless legally forbidden.
---

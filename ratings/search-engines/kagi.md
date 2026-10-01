---
name: Kagi
description: Paid, ad-free search engine from Kagi Inc. that combines its own index with results from other providers and lets users rank, block or boost websites.
website: https://kagi.com
jurisdiction: US
domain: kagi.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://kagi.com/privacy
    note: The site loads no analytics or telemetry and does not track which results are clicked.
  no_ads:
    answer: yes
    evidence: https://kagi.com/pricing
    note: Funded by paid subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://kagi.com/privacy
    note: The privacy policy includes a warrant canary, but no request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_search_logs:
    answer: partial
    evidence: https://kagi.com/privacy
    note: Searches are not linked to accounts; request logs kept for debugging are purged after seven days.
  no_personalized_ads:
    answer: yes
    evidence: https://kagi.com/pricing
    note: No ads are shown.
  no_account_needed:
    answer: no
    evidence: https://kagi.com/pricing
    note: A paid Kagi account is needed to search; Privacy Pass allows unlinkable authentication.
---

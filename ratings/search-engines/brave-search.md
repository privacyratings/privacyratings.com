---
name: Brave Search
description: Search engine from Brave Software built on its own independent web index, designed not to store searches with identifiers or build user profiles.
website: https://search.brave.com
jurisdiction: US
source: https://github.com/brave/brave-browser
domain: search.brave.com
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/brave/brave-browser/blob/master/LICENSE
    note: The Brave browser is open source. The search engine itself is not.
  no_trackers:
    answer: partial
    evidence: https://search.brave.com/help/usage-metrics
    note: No third-party trackers; anonymous usage metrics are on by default and can be turned off in settings.
  no_ads:
    answer: partial
    evidence: https://search.brave.com/help/privacy-policy
    note: Free search shows ads that are measured without personal data; an ad-free paid tier is available.
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
    evidence: https://search.brave.com/help/privacy-policy
    note: Queries are stored de-identified, and IP addresses are deleted within seconds after bot checks.
  no_personalized_ads:
    answer: yes
    evidence: https://search.brave.com/help/privacy-policy
    note: Ads are not based on personal data or a profile.
  no_account_needed:
    answer: partial
    evidence: https://search.brave.com/help/premium
    note: Search works without an account; the ad-free Search Premium tier needs a Brave account.
imported_from: awesome-privacy
---

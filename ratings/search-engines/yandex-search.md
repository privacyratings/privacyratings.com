---
name: Yandex Search
description: Web search engine from the Russian company Yandex. Searches are linked to cookies, IP addresses and Yandex ID accounts to personalize results and ads.
website: https://yandex.com
mainstream: true
jurisdiction: RU
domain: yandex.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://yandex.com/legal/confidential/en/
    note: The site uses Yandex Metrica and third-party tracking and advertising cookies, and search activity is collected with cookie and account identifiers.
  no_ads:
    answer: no
    evidence: https://yandex.com/legal/confidential/en/
    note: Funded by advertising, including ads personalized from search history.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://yandex.com/company/privacy/transparencyreport
    note: Yandex publishes half-yearly counts of government requests for user data and refusals by service.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_search_logs:
    answer: no
    evidence: https://yandex.com/company/privacy
    note: Search history is collected with cookies, IP addresses and Yandex ID accounts and used to personalize results.
  no_personalized_ads:
    answer: partial
    evidence: https://yandex.com/tune/adv
    note: Ads use interests and location by default, and personalization can be turned off in search settings.
  no_account_needed:
    answer: partial
    evidence: https://yandex.com/company/privacy
    note: Search works without an account; profile features and synced history need a Yandex ID.
---

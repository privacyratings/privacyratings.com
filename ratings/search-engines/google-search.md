---
name: Google Search
description: >-
  Google's web search engine. Searches are linked to accounts, cookies and devices to personalize results and ads.
website: https://www.google.com
mainstream: true
jurisdiction: US
domain: www.google.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Funded by advertising.
  no_personalized_ads:
    answer: partial
    evidence: https://policies.google.com/privacy
    note: Personalized ads are on by default and can be turned off in Google account settings.
  no_trackers:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Search activity is collected with cookie, device and account identifiers for personalization and ads, and this cannot be fully turned off.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Google publishes counts of government requests for user data and how it responds, updated twice a year.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google emails the user before disclosing data in response to a government request, unless prohibited by law.
  no_search_logs:
    answer: no
    evidence: https://policies.google.com/technologies/retention
    note: Searches are tied to accounts and cookies; server logs keep part of the IP address for 9 months and cookie data for 18 months.
  no_account_needed:
    answer: partial
    evidence: https://policies.google.com/privacy
    note: Search works without an account; saved history and some personalized features need a Google account.
---

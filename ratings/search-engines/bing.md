---
name: Bing
description: >-
  Microsoft's search engine, which also supplies results to several other search engines. Searches are linked to cookies and Microsoft accounts to personalize results and ads.
website: https://www.bing.com
family: microsoft
mainstream: true
jurisdiction: US
domain: www.bing.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_ads:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainadvertisingmodule
    note: Funded by advertising, including interest-based ads.
  no_trackers:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainbingmodule
    note: Searches are collected with IP addresses and cookie identifiers for personalization and advertising, and this cannot be turned off.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Microsoft publishes law enforcement request counts and outcomes twice a year.
  user_notice:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Microsoft gives prior notice to consumer users whose data is sought, except where prohibited by law.
  no_search_logs:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainbingmodule
    note: Search logs keep the IP address for six months and cookie identifiers for 18 months before de-identification.
  no_personalized_ads:
    answer: partial
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainadvertisingmodule
    note: Personalized ads are on by default and can be turned off in Microsoft ad settings.
  no_account_needed:
    answer: partial
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainbingmodule
    note: Search works without an account; synced history and personalization need a Microsoft account.
---

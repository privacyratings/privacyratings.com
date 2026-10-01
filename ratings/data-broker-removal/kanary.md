---
name: Kanary
description: Data broker removal service that scans people-search sites, search results and data leaks for a user's personal information and submits removal requests, with a free tier and paid plans. It needs the user's name, locations and other details to work.
website: https://www.kanary.com
domain: www.kanary.com
jurisdiction: US
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.kanary.com/privacy-and-security
    note: The website loads PostHog Cloud and Framer analytics, and the privacy page states PostHog is used for app analytics.
  no_ads:
    answer: yes
    evidence: https://www.kanary.com/privacy-and-security
    note: Funded by subscriptions. The privacy page states Kanary never sells or shares personal information.
  independent_audit:
    answer: no
    note: No independent audit is published. SOC 2 compliance is claimed, but no report or summary is public.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---

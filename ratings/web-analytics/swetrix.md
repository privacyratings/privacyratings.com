---
name: Swetrix
description: Open source, cookieless web analytics with performance monitoring, error tracking and optional session replays. Available as Swetrix Cloud or as the self-hosted Community Edition.
website: https://swetrix.com
source: https://github.com/Swetrix/swetrix
domain: swetrix.com
jurisdiction: GB
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Swetrix/swetrix/blob/main/backend/apps/cloud/COPYING.txt
    note: The Community Edition is AGPL-3.0, but the code for cloud-only features is proprietary.
  no_trackers:
    answer: partial
    evidence: https://swetrix.com/privacy
    note: The website uses Swetrix's own cookieless analytics and loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://swetrix.com/privacy
    note: Funded by subscriptions. The privacy policy states personal information is not sold or rented.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_cookies:
    answer: yes
    evidence: https://swetrix.com/data-policy
    note: No cookies or other client-side identifiers such as local storage are used for tracking.
  no_personal_data:
    answer: yes
    evidence: https://swetrix.com/data-policy
    note: IP addresses and User-Agent strings are only processed in memory to build a daily-salted session hash and are not stored.
  self_hostable:
    answer: yes
    evidence: https://swetrix.com/docs/selfhosting/how-to
    note: The Community Edition is officially documented for self-hosting with Docker.
---

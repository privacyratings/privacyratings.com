---
name: Fathom Analytics
description: Hosted web analytics that counts visitors without cookies using a daily-salted hash, with a single-page dashboard and event tracking.
website: https://usefathom.com
domain: usefathom.com
jurisdiction: CA
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://usefathom.com/legal/privacy
    note: No third-party trackers. The website uses Fathom's own analytics, which are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://usefathom.com/legal/privacy
    note: Funded by subscriptions. The privacy policy states personal data is not rented or sold.
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
    evidence: https://usefathom.com/data
    note: Visitors are counted with a hashed signature and a daily salt instead of cookies.
  no_personal_data:
    answer: partial
    evidence: https://usefathom.com/data
    note: IP addresses of ordinary visitors are hashed with a daily salt, but records of detected bot traffic keep IP addresses.
  self_hostable:
    answer: no
    note: Hosted only.
---

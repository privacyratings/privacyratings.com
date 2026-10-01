---
name: Pirsch
description: Hosted web analytics from Germany that counts visitors without cookies using a daily hash, with server-side tracking options and a built-in link shortener.
website: https://pirsch.io
source: https://github.com/pirsch-analytics/pirsch
domain: pirsch.io
jurisdiction: DE
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/pirsch-analytics/pirsch/blob/master/LICENSE
    note: The core tracking library is AGPL-3.0, but the dashboard and hosted service are closed source.
  no_trackers:
    answer: partial
    evidence: https://pirsch.io/privacy
    note: The website uses Pirsch's own cookieless analytics, with no cookies or social media plugins.
  no_ads:
    answer: yes
    evidence: https://docs.pirsch.io/privacy
    note: Funded by subscriptions. The documentation states no information is sold to third parties.
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
    evidence: https://docs.pirsch.io/privacy
    note: No cookies are used. Visitors are recognized for up to a day with a salted hash computed on the server.
  no_personal_data:
    answer: yes
    evidence: https://docs.pirsch.io/privacy
    note: The visitor's IP address is never stored or logged.
  self_hostable:
    answer: partial
    evidence: https://pirsch.io/pricing
    note: On-premise installation is only offered with the Enterprise plan.
---

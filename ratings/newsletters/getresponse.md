---
name: GetResponse
description: Email marketing platform with newsletters, autoresponders, marketing automation, landing pages, webinars and paid newsletters. Opens and clicks are tracked.
website: https://www.getresponse.com
jurisdiction: PL
domain: getresponse.com
platforms:
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.getresponse.com/help/what-is-click-tracking.html
    note: Click tracking is always on for automation messages and cannot be turned off there, and the website loads Amplitude analytics.
  no_ads:
    answer: partial
    evidence: https://www.getresponse.com/legal/privacy
    note: Funded by subscriptions and states personal information is not sold, but website data is shared with partners for remarketing and with the Google advertising network.
  independent_audit:
    answer: partial
    evidence: https://www.getresponse.com/security
    note: States PCI DSS certification and independent external penetration tests, but the pentest summary, certificate and SOC 2 materials are only available by email request.
  transparency_report:
    answer: no
    evidence: https://www.getresponse.com/legal/privacy
    note: No transparency report or government request policy is published. The privacy policy only says data may be disclosed in response to lawful requests by government authorities.
  user_notice:
    answer: yes
    evidence: https://www.getresponse.com/legal/privacy
    note: The privacy policy states GetResponse will take commercially reasonable steps to inform users when it must disclose personal information as part of a legal process.
---

---
name: Microsoft Clarity
description: Free behavior analytics from Microsoft that records sessions and builds heatmaps of clicks and scrolling on websites and mobile apps.
website: https://clarity.microsoft.com
family: microsoft
mainstream: true
domain: clarity.microsoft.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: The service is closed source. Only the tracking script is published under the MIT license.
  no_trackers:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: Microsoft collects usage data on its websites and uses data about users for personalized advertising.
  no_ads:
    answer: no
    evidence: https://learn.microsoft.com/en-us/clarity/faq
    note: Free service from Microsoft. Clarity uses third-party cookies for purposes such as advertising, with opt-out through the Digital Advertising Alliance.
  independent_audit:
    answer: no
    note: No independent audit of Clarity is published.
  transparency_report:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Microsoft publishes counts of government requests for customer data twice a year.
  user_notice:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Microsoft gives prior notice to users of its consumer services whose data is requested, except where prohibited by law or in emergencies.
  no_cookies:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/clarity/faq
    note: First-party cookies store a persistent Clarity user ID by default. Without cookie consent, Clarity runs without cookies with fragmented sessions.
  no_personal_data:
    answer: no
    evidence: https://learn.microsoft.com/en-us/clarity/faq
    note: Records sessions tied to a persistent user ID, and third-party cookies support advertising.
  self_hostable:
    answer: no
    note: Hosted only.
---

---
name: Klaviyo
description: Email and SMS marketing platform for online stores, with a customer data platform, segmentation, automated flows and open and click tracking.
website: https://www.klaviyo.com
jurisdiction: US
domain: klaviyo.com
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://help.klaviyo.com/hc/en-us/articles/52756655778843
    note: Open tracking is on by default, and the pixel stays in messages even when open tracking is turned off. The website loads Google Tag Manager and Optimizely.
  no_ads:
    answer: no
    evidence: https://www.klaviyo.com/legal/privacy/privacy-notice
    note: The privacy notice states personal information may be sold or shared with advertising networks, social networks and business partners, which may use it for their own purposes.
  independent_audit:
    answer: partial
    evidence: https://www.klaviyo.com/trust
    note: Annual SOC 2 and ISO 27001 audits are done, but the reports are only available through the Trust Center after requesting access.
  transparency_report:
    answer: yes
    evidence: https://www.klaviyo.com/legal/government-data-access-request-transparency-report
    note: The transparency report states no US or non-US government requests for customer personal data have been received, and describes how requests are handled.
  user_notice:
    answer: yes
    evidence: https://www.klaviyo.com/legal/government-data-access-request-transparency-report
    note: Klaviyo will notify affected customers of government data requests unless the law prohibits it.
---

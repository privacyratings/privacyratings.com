---
name: Adobe Acrobat Sign
description: Adobe's electronic signature service for sending, signing and tracking documents, with integrations for Microsoft 365, Salesforce and other business apps.
website: https://www.adobe.com/acrobat/business/sign.html
mainstream: true
domain: secure.adobesign.com
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.adobe.echosign/latest/
    note: The Android app includes 6 trackers, including Facebook Analytics, Demdex and Google Firebase Analytics.
  no_ads:
    answer: no
    evidence: https://www.adobe.com/privacy/policy.html
    note: Funded by subscriptions, but Adobe discloses information about actions in its websites and apps to social media and advertising partners.
  independent_audit:
    answer: partial
    evidence: https://www.adobe.com/trust/compliance/compliance-list.html
    note: Adobe lists SOC 2 Type 2 among its compliance attestations. SOC 2 reports are shared with customers only under NDA.
  transparency_report:
    answer: yes
    evidence: https://www.adobe.com/trust/transparency/government-requests.html
    note: Publishes a yearly report with counts of government requests for user data.
  user_notice:
    answer: yes
    evidence: https://www.adobe.com/trust/transparency/government-requests.html
    note: Adobe gives advance notice to users targeted by a legal request unless a nondisclosure order prohibits it, and notifies them when the order expires.
---

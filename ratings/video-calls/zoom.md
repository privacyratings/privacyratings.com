---
name: Zoom
description: Video meeting platform with desktop, mobile and browser apps, screen sharing, chat, recording and webinars.
website: https://www.zoom.com
mainstream: true
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.zoom.com/en/trust/privacy/privacy-statement/
    note: The privacy statement describes third-party advertising and analytics cookies shared with marketing partners.
  no_ads:
    answer: no
    evidence: https://www.zoom.com/en/trust/privacy/privacy-statement/
    note: The privacy statement allows targeted advertising through third-party partners and sales of business contact data through one product.
  independent_audit:
    answer: partial
    evidence: https://www.zoom.com/en/trust/legal-compliance/
    note: Zoom lists SOC 2 Type 2, ISO 27001 and FedRAMP audits, but the reports are not public.
  e2ee:
    answer: partial
    evidence: https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065408
    note: End-to-end encryption is optional, off by default and disables features such as cloud recording and the web client.
  no_account_needed:
    answer: partial
    evidence: https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060732
    note: Participants can join without an account; hosts need a Zoom account.
  self_hostable:
    answer: partial
    evidence: https://www.zoom.com/en/products/zoom-node/
    note: Zoom Node can keep meeting media on customer servers, but it is managed from and depends on the Zoom cloud.
---

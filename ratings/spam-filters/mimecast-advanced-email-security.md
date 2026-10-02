---
name: Mimecast Advanced Email Security
description: Cloud email security service that filters inbound and outbound mail for spam, phishing, malware and impersonation. It runs as a gateway in front of the mail server or connects by API to Microsoft 365 and Google Workspace.
website: https://www.mimecast.com/products/email-security/
aliases:
  - Mimecast
  - Mimecast Email Security
domain: login.mimecast.com
jurisdiction: GB
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.mimecast.com/legal/privacy-statement/
    note: The website loads Google Tag Manager, and the privacy statement describes Google Analytics with remarketing that shows Mimecast ads on other sites.
  no_ads:
    answer: partial
    evidence: https://www.mimecast.com/legal/privacy-statement/
    note: Paid business service with no ads, and Mimecast says it does not sell or rent personal data, but website cookies are used to target its own ads on third-party sites.
  independent_audit:
    answer: partial
    evidence: https://trust.mimecast.com/
    note: The trust center lists ISO/IEC 27001 certification and a SOC 2 Type 2 report, but no full audit report is published on the website.
  transparency_report:
    answer: no
    evidence: https://www.mimecast.com/legal/privacy-statement/
    note: No transparency report or government request policy is published. The privacy statement only says data may be shared to cooperate with law enforcement, judicial orders and regulatory inquiries.
  user_notice:
    answer: yes
    evidence: https://media.mimecast.com/download/16a9a3ce928e11f1b67872bc9030a2d6
    note: The service agreement requires reasonable prior written notice to the customer before confidential information is disclosed under a law or judicial or administrative order, where lawfully permitted.
---

---
name: Proofpoint Email Protection
description: Secure email gateway for organizations that filters inbound and outbound mail for spam, phishing, malware and impersonation. It runs as a cloud service or on premises in front of Microsoft 365, Google Workspace or other mail servers.
website: https://www.proofpoint.com/us/products/email-protection
aliases:
  - Proofpoint
mainstream: true
domain: admin.proofpoint.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.proofpoint.com/us/legal/privacy-policy
    note: The website uses third-party analytics and a DoubleClick advertising tag, and the privacy policy describes behavioral retargeting by an ad partner.
  no_ads:
    answer: partial
    evidence: https://www.proofpoint.com/us/legal/privacy-policy
    note: Paid business service with no ads, but a third-party partner uses website cookies to retarget visitors with Proofpoint ads on other sites.
  independent_audit:
    answer: partial
    evidence: https://www.proofpoint.com/us/legal/trust/faqs
    note: Proofpoint holds ISO 27001 certification for in-scope products, but no audit report is public.
  transparency_report:
    answer: partial
    evidence: https://www.proofpoint.com/us/legal/trust/information-disclosure-and-law-enforcement-statement
    note: A law enforcement statement describes legal review of each request and challenges to overbroad ones, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://www.proofpoint.com/us/legal/trust/information-disclosure-and-law-enforcement-statement
    note: Proofpoint promises to promptly notify affected customers of requests whenever permitted by law.
---

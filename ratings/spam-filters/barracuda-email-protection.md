---
name: Barracuda Email Protection
description: Email security suite from Barracuda Networks that filters spam, phishing and malware through a cloud gateway or by API for Microsoft 365 and Google Workspace. It adds account takeover detection, encryption, archiving and backup.
website: https://www.barracuda.com/products/email-protection
aliases:
  - Barracuda
  - Barracuda Email Gateway Defense
domain: us.ess.barracudanetworks.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://trust.barracuda.com/privacy/documentation/privacy-notice
    note: The website loads Google Tag Manager, Adobe tags, Marketo and Demandbase, and the privacy notice describes cookies used for behavior-based advertising.
  no_ads:
    answer: partial
    evidence: https://trust.barracuda.com/privacy/documentation/privacy-notice
    note: Paid business service with no ads, and Barracuda says it does not sell personal data for money, but website data is shared with advertising networks for targeted advertising.
  independent_audit:
    answer: partial
    evidence: https://trust.barracuda.com/security
    note: Barracuda offers SOC 2 reports on request and holds ISO 27001 certification for Cloud-to-Cloud Backup, but no audit report is public and Email Protection is not named in scope.
  transparency_report:
    answer: partial
    evidence: https://assets.barracuda.com/assets/docs/dms/US_Law_Enforcement_Guidelines.pdf
    note: Legal process guidelines require a search warrant for US requests for customer data and describe challenges to overbroad requests, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://assets.barracuda.com/assets/docs/dms/US_Law_Enforcement_Guidelines.pdf
    note: Barracuda states it notifies customers when their data is sought by legal process, unless notice is prohibited by law or a court order or would create a risk of harm.
---

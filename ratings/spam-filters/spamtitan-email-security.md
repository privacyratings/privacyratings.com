---
name: SpamTitan Email Security
description: Email filtering service from TitanHQ that blocks spam, phishing and malware with two antivirus engines and sandboxing. It runs as a cloud service or as a self-installed gateway, and works with Microsoft 365 and other mail servers.
website: https://www.titanhq.com/email-protection/
aliases:
  - SpamTitan
  - SpamTitan Cloud
  - SpamTitan Gateway
domain: eu1-smtp-ui.titanhq.com
jurisdiction: IE
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.titanhq.com/about/privacy-policy/
    note: The website loads Google Tag Manager, and the privacy policy names Google Analytics and remarketing from Google, Twitter, Facebook and LinkedIn.
  no_ads:
    answer: partial
    evidence: https://www.titanhq.com/about/privacy-policy/
    note: Paid service with no ads, but the privacy policy says remarketing cookies are used to show TitanHQ ads on third-party sites.
  independent_audit:
    answer: no
    note: No independent audit is published. The website shows an AICPA SOC logo but no report or certificate.
  transparency_report:
    answer: no
    evidence: https://www.titanhq.com/about/privacy-policy/
    note: No transparency report or government request policy is published. The privacy policy only says data may be disclosed when required by law or valid requests by public authorities.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---

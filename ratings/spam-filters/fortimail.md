---
name: FortiMail
description: Email security gateway from Fortinet that filters spam, phishing, malware and business email compromise. It runs as a hardware appliance, a virtual machine or a cloud service, and can also protect Microsoft 365 and Google Workspace through their APIs.
website: https://www.fortinet.com/products/email-security
aliases:
  - Fortinet
  - FortiMail Cloud
  - FortiMail Email Security
domain: www.fortimailcloud.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.fortinet.com/corporate/about-us/privacy
    note: The privacy policy describes Google Analytics and third-party ad services that track visitors across sites with cookies.
  no_ads:
    answer: partial
    evidence: https://www.fortinet.com/corporate/about-us/privacy
    note: Paid product with no ads, but the privacy policy states that Fortinet "sold" and "shared" website visitor data, as the CCPA defines those terms, to marketing and analytics providers.
  independent_audit:
    answer: partial
    evidence: https://trust.fortinet.com/
    note: Fortinet lists ISO/IEC 27001 certification and SOC 2 reports, but audit reports are only shared on request.
  transparency_report:
    answer: no
    evidence: https://www.fortinet.com/corporate/about-us/privacy
    note: No transparency report or government request policy is published. The privacy policy only says data may be disclosed to comply with law or for law enforcement.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---

---
name: Vanta
description: Hosted compliance automation platform that connects to a company's cloud, identity and HR tools to collect evidence and monitor controls for SOC 2, ISO 27001, HIPAA, GDPR and other frameworks. It also offers vendor risk management and public trust center pages.
website: https://www.vanta.com
mainstream: true
domain: app.vanta.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.vanta.com/legal/privacy
    note: The website uses Google Tag Manager, Intercom and HubSpot, and the privacy policy says cookie data is shared with ad networks and analytics providers.
  no_ads:
    answer: partial
    evidence: https://www.vanta.com/legal/privacy
    note: Paid service with no ads, but website cookie data is shared with ad networks to show Vanta ads on other websites.
  independent_audit:
    answer: partial
    evidence: https://www.vanta.com/company/security
    note: Vanta has a SOC 2 Type II attestation, ISO 27001 certification and yearly penetration tests, but the reports are only available through its trust center.
  transparency_report:
    answer: partial
    evidence: https://www.vanta.com/legal/privacy
    note: The privacy policy describes how government demands are handled, including redirecting them to the customer, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://www.vanta.com/legal/privacy
    note: Vanta promises reasonable notice to the customer before a compelled disclosure, unless legally prohibited.
---

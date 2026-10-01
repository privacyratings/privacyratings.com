---
name: Mailgun
description: Email API and SMTP relay from Sinch for transactional and bulk email, with US and EU regions, event logs and optional open and click tracking.
website: https://www.mailgun.com
mainstream: true
jurisdiction: US
domain: mailgun.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.mailgun.com/legal/privacy-policy/
    note: The privacy policy lists Google Analytics and Optimizely on the website.
  no_ads:
    answer: yes
    evidence: https://www.mailgun.com/legal/privacy-policy/
    note: Funded by paid plans. The privacy policy states personal data is not sold or used by third parties for their own interests without consent.
  independent_audit:
    answer: partial
    evidence: https://www.mailgun.com/security/
    note: SOC 2 Type II and ISO 27001 certified, but the audit reports are not public.
  content_retention:
    answer: partial
    evidence: https://help.mailgun.com/hc/en-us/articles/8841411163035-Adjusting-a-domain-s-message-retention-settings
    note: Messages are kept for up to 3 days by default, depending on the plan, and retention can be set to 0 days for each domain.
  tracking_off_by_default:
    answer: yes
    evidence: https://documentation.mailgun.com/docs/mailgun/user-manual/tracking-messages/tracking-messages
    note: Open, click and unsubscribe tracking are off until turned on for a domain.
  enforced_tls:
    answer: yes
    evidence: https://mailgun-docs.redoc.ly/docs/mailgun/user-manual/tls-sending/
    note: TLS is opportunistic by default. A require-tls setting for each domain or message stops delivery without TLS.
  eu_data_location:
    answer: yes
    evidence: https://documentation.mailgun.com/docs/mailgun/api-reference/api-overview
    note: Domains created in the EU region keep messages, event logs and statistics in the EU. Account and billing data is replicated globally.
---

---
name: GoDaddy Email
description: Business email for custom domains sold by GoDaddy. It runs on Microsoft 365 (Exchange Online), with Outlook webmail and apps.
website: https://www.godaddy.com/email/professional-business-email
mainstream: true
jurisdiction: US
domain: www.godaddy.com
mail_domain: godaddy.com
imap_host: outlook.office365.com
pop3_host: outlook.office365.com
smtp_host: smtp.office365.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.godaddy.com/legal/agreements/privacy-policy
    note: The privacy policy lists Google Analytics and third-party cookies, web beacons and scripts.
  no_ads:
    answer: partial
    evidence: https://www.godaddy.com/legal/agreements/privacy-policy
    note: Funded by paid plans and personal data is not sold, but it is disclosed to marketers and advertisers for personalized advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://www.godaddy.com/legal/agreements/subpoena-policy
    note: Publishes a subpoena policy for legal requests, but no request counts.
  user_notice:
    answer: partial
    evidence: https://www.godaddy.com/legal/agreements/subpoena-policy
    note: Customers are notified of valid civil subpoenas. No notice policy is published for criminal requests.
  e2ee:
    answer: no
    note: No end-to-end encryption. Mail is handled by Microsoft 365 with keys Microsoft holds.
  encrypted_storage:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/purview/encryption
    note: Microsoft 365 encrypts data at rest with keys Microsoft holds.
  open_protocols:
    answer: yes
    evidence: https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/pop3-and-imap4/pop3-and-imap4
    note: IMAP, POP3 and SMTP work through Microsoft 365 servers. SMTP authentication must be turned on per user in the GoDaddy dashboard.
  custom_domains:
    answer: yes
    evidence: https://www.godaddy.com/email/professional-business-email
    note: The service is built for custom domains on every plan.
  anonymous_signup:
    answer: no
    evidence: https://www.godaddy.com/legal/agreements/privacy-policy
    note: A GoDaddy account and purchase require contact details such as an email address and payment information.
  srs:
    answer: yes
    evidence: https://learn.microsoft.com/en-us/exchange/reference/sender-rewriting-scheme
    note: Microsoft 365 rewrites the envelope sender with SRS on forwarded mail.
  arc:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/defender-office-365/email-authentication-arc-configure
    note: Microsoft 365 validates ARC chains on inbound mail. ARC sealing of forwarded mail is not documented.
---

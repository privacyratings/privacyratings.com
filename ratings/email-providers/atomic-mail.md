---
name: Atomic Mail
description: >-
  Email service from AtomicMail Systems OÜ in Estonia, with a free plan and paid Plus and Business plans.
  Mail between Atomic Mail users can be end-to-end encrypted, and password-protected mail can be sent to others.
website: https://atomicmail.io
platforms: [web, android, ios, windows, macos, linux]
jurisdiction: EE
domain: atomicmail.io
mail_domain: atomicmail.io
imap_host: false
pop3_host: false
smtp_host: false
criteria:
  open_source:
    answer: no
    evidence: https://atomicmail.io/terms-of-service
    note: Closed source. No source code for the apps or the server is published.
  no_trackers:
    answer: no
    evidence: https://atomicmail.io/privacy-policy
    note: The home page loads Google Tag Manager with a Google Analytics tag and includes Hotjar code, although the privacy policy says atomicmail.io uses only self-hosted analytics. The web app code includes PostHog product analytics.
  no_ads:
    answer: yes
    evidence: https://atomicmail.io/privacy-policy
    note: Funded by paid plans. No ads in any service, and personal data is not sold.
  independent_audit:
    answer: no
    evidence: https://atomicmail.io/support
    note: The FAQ says third-party audits take place, but no audit report is published.
  transparency_report:
    answer: partial
    evidence: https://atomicmail.io/privacy-policy
    note: Only requests from Estonian judicial authorities are answered, after legal review. No request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: partial
    evidence: https://atomicmail.io/blog/zero-access-encryption
    note: Atomic Encryption between users and password-protected mail for others are built in, but each message must be encrypted by choice. Not on by default.
  encrypted_storage:
    answer: partial
    evidence: https://atomicmail.io/blog/zero-access-encryption
    note: Stored mail is encrypted, but mail that was not end-to-end encrypted is not covered by zero-access encryption and can be disclosed under a legal order.
  open_protocols:
    answer: no
    evidence: https://atomicmail.io/support
    note: No IMAP, POP3 or SMTP access. Mail can only be used in Atomic Mail's own apps.
  custom_domains:
    answer: partial
    evidence: https://atomicmail.io/pricing
    note: Only on the Business plans. Not on the free or Plus plans.
  anonymous_signup:
    answer: yes
    evidence: https://atomicmail.io/support
    note: Sign-up asks only for a name, username and password. No phone number or other email address is needed.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

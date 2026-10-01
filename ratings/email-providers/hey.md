---
name: HEY
description: Paid email service from 37signals with a screening-based inbox and its own apps. Works only through the HEY apps, without IMAP or POP3.
website: https://www.hey.com
jurisdiction: US
domain: app.hey.com
mail_domain: hey.com
imap_host: false
pop3_host: false
smtp_host: false
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://37signals.com/policies/privacy
    note: The privacy policy describes web analytics and some third-party cookies for analytics and ad measurement.
  no_ads:
    answer: yes
    evidence: https://www.hey.com/faqs/#does-hey-serve-ads-or-sell-my-personal-data
    note: Funded by subscriptions. No ads, and data is not sold.
  independent_audit:
    answer: partial
    evidence: https://www.hey.com/security/external-audits/trail-of-bits-june-2020.pdf
    note: Trail of Bits and Doyensec reviewed HEY before launch and the full reports are public, but they are more than three years old.
  transparency_report:
    answer: partial
    evidence: https://37signals.com/policies/privacy
    note: Publishes a policy for government data requests, but no request counts.
  user_notice:
    answer: yes
    evidence: https://37signals.com/policies/privacy
    note: Affected users are notified before data is disclosed, unless legally prohibited or in some emergencies.
  e2ee:
    answer: no
    evidence: https://www.hey.com/security/
    note: Not supported.
  encrypted_storage:
    answer: partial
    evidence: https://www.hey.com/security/
    note: Content is encrypted at rest and per field in the database, with keys HEY holds.
  open_protocols:
    answer: no
    evidence: https://www.hey.com/faqs/#can-i-check-my-hey-email-with-my-existing-email-app
    note: Only the HEY apps work. IMAP and POP3 are not supported.
  custom_domains:
    answer: yes
    evidence: https://www.hey.com/domains/
    note: Available with HEY for Domains.
  anonymous_signup:
    answer: no
    evidence: https://www.hey.com/faqs/#what-if-i-forget-my-password
    note: A backup email address is required at sign-up.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

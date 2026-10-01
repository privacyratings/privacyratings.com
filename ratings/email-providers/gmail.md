---
name: Gmail
description: >-
  Google's free email service. Mail is stored and processed on Google's servers, and Google Workspace offers it for business domains.
website: https://mail.google.com
mainstream: true
jurisdiction: US
domain: mail.google.com
mail_domain: gmail.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: The free service shows ads.
  open_protocols:
    answer: yes
    evidence: https://support.google.com/mail/answer/7126229
    note: IMAP and SMTP work with other apps.
  no_trackers:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Google collects activity data across its services and uses it for analytics and personalized ads.
  independent_audit:
    answer: partial
    evidence: https://cloud.google.com/security/compliance/soc-3
    note: Google Workspace, which includes Gmail, has third-party SOC 2 audits. Only the SOC 3 summary report is public.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Publishes counts of government requests for user data and how often data is disclosed, updated twice a year.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google emails the user before disclosing information unless legally prohibited or in emergencies.
  e2ee:
    answer: no
    note: Personal Gmail accounts have no end-to-end encryption. Client-side encryption and S/MIME are limited to some Google Workspace business plans.
  encrypted_storage:
    answer: partial
    evidence: https://docs.cloud.google.com/docs/security/encryption/default-encryption
    note: Data is encrypted at rest with keys Google holds.
  custom_domains:
    answer: partial
    evidence: https://workspace.google.com/pricing
    note: Custom domains require a paid Google Workspace business plan.
  anonymous_signup:
    answer: no
    evidence: https://support.google.com/accounts/answer/27441
    note: Sign-up requires a birthday and gender. Adding a phone number is optional in the documented flow.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    evidence: https://knowledge.workspace.google.com/admin/security/arc-email-authentication
    note: Google's documentation explains ARC but does not state that Gmail validates or adds ARC seals.
imap_host: imap.gmail.com
pop3_host: pop.gmail.com
smtp_host: smtp.gmail.com
---

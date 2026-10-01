---
name: 123 Reg Email Hosting
description: Business email hosting for custom domains from 123 Reg, a UK domain and hosting company owned by GoDaddy. Mailboxes run on GoDaddy mail servers, with webmail and mobile apps.
website: https://www.123-reg.co.uk/email-hosting/
jurisdiction: GB
domain: www.123-reg.co.uk
mail_domain: 123-reg.co.uk
imap_host: imap.secureserver.net
pop3_host: pop.secureserver.net
smtp_host: smtpout.secureserver.net
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.123-reg.co.uk/terms/privacy/
    note: The privacy notice lists Google Analytics and third-party identifiers used for measurement and personalized advertising.
  no_ads:
    answer: partial
    evidence: https://www.123-reg.co.uk/terms/privacy/
    note: Funded by paid plans and personal data is not sold, but it is disclosed to marketers and advertisers for personalized advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: no
    note: Not supported.
  encrypted_storage:
    answer: no
    note: Encryption at rest for stored mail is not documented.
  open_protocols:
    answer: yes
    evidence: https://www.123-reg.co.uk/support/email/how-do-i-set-up-an-email-client-with-123-mail/
    note: IMAP, POP3 and SMTP work with other apps.
  custom_domains:
    answer: yes
    evidence: https://www.123-reg.co.uk/email-hosting/
    note: Every plan uses your own domain.
  anonymous_signup:
    answer: no
    evidence: https://sso.123-reg.co.uk/account/create
    note: Creating an account requires an existing email address, and purchases require contact and payment details.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

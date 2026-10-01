---
name: Zoho Mail
description: Email service from Zoho for businesses and individuals, with custom domains, calendar and contacts, and an ad-free free plan.
website: https://www.zoho.com/mail/
mainstream: true
jurisdiction: IN
domain: mail.zoho.com
mail_domain: zohomail.com
imap_host: imap.zoho.com
pop3_host: pop.zoho.com
smtp_host: smtp.zoho.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.zoho.com/privacy.html
    note: Zoho states it blocks non-essential third-party cookies on its sites and mostly uses first-party cookies for analytics.
  no_ads:
    answer: yes
    evidence: https://www.zoho.com/privacy.html
    note: Funded by paid plans. Zoho states that it never shows ads or sells data, including on free plans.
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
    answer: partial
    evidence: https://www.zoho.com/mail/secure-email.html
    note: S/MIME and OpenPGP encryption are available but not on by default.
  encrypted_storage:
    answer: partial
    evidence: https://www.zoho.com/mail/secure-email.html
    note: Mail is encrypted at rest with keys Zoho holds.
  open_protocols:
    answer: yes
    evidence: https://www.zoho.com/mail/help/imap-access.html
    note: IMAP, POP3 and SMTP work on paid plans. New free accounts have no IMAP or POP3.
  custom_domains:
    answer: yes
    evidence: https://www.zoho.com/mail/zohomail-pricing.html
    note: Available on every plan, including the free one.
  anonymous_signup:
    answer: no
    evidence: https://www.zoho.com/privacy.html
    note: Sign-up asks for a name, contact number and email address.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

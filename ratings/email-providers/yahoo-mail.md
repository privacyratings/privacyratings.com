---
name: Yahoo Mail
description: Free, ad-supported email service from Yahoo with webmail and mobile apps. A paid Yahoo Mail Plus plan removes ads.
website: https://mail.yahoo.com
mainstream: true
jurisdiction: US
domain: mail.yahoo.com
mail_domain: yahoo.com
imap_host: imap.mail.yahoo.com
pop3_host: pop.mail.yahoo.com
smtp_host: smtp.mail.yahoo.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://legal.yahoo.com/us/en/yahoo/privacy/index.html
    note: Yahoo Mail loads Yahoo analytics and a consent platform for advertising partners, and the privacy policy covers ad targeting across services.
  no_ads:
    answer: no
    evidence: https://legal.yahoo.com/us/en/yahoo/privacy/index.html
    note: The free service shows ads. Yahoo Mail Plus removes them.
  independent_audit:
    answer: no
    note: No independent audit report is published. Yahoo states its controls are assessed by an external auditor, but no report is public.
  transparency_report:
    answer: yes
    evidence: https://www.yahooinc.com/transparency/
    note: Publishes counts of government data requests by country and how they were answered.
  user_notice:
    answer: yes
    evidence: https://www.yahooinc.com/transparency/about/global-principles.html
    note: Yahoo notifies users about third-party requests for their information before disclosure, unless prohibited by law.
  e2ee:
    answer: no
    note: Not supported.
  encrypted_storage:
    answer: no
    note: Encryption at rest for stored mail is not documented.
  open_protocols:
    answer: yes
    evidence: https://help.yahoo.com/kb/SLN4075.html
    note: IMAP, POP3 and SMTP work with other apps.
  custom_domains:
    answer: no
    note: Not available for Yahoo Mail accounts.
  anonymous_signup:
    answer: no
    evidence: https://help.yahoo.com/kb/SLN2056.html
    note: Sign-up requires a date of birth and a verified mobile number.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

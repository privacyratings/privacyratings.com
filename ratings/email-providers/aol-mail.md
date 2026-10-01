---
name: AOL Mail
description: Free, ad-supported email service from AOL, owned by Bending Spoons, with webmail and mobile apps. A paid subscription removes ads.
website: https://mail.aol.com
mainstream: true
jurisdiction: US
domain: mail.aol.com
mail_domain: aol.com
imap_host: imap.aol.com
pop3_host: pop.aol.com
smtp_host: smtp.aol.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://legal.aol.com/privacy/index.html
    note: The AOL website loads New Relic, Heap and Google tags, and the privacy policy allows third-party tracking technologies for advertising.
  no_ads:
    answer: no
    evidence: https://help.aol.com/articles/ad-free-aol-mail
    note: The free service is funded by ads, and the privacy policy allows sharing data with advertising networks. A paid subscription removes ads.
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
    evidence: https://help.aol.com/articles/how-do-i-use-other-email-applications-to-send-and-receive-my-aol-mail
    note: IMAP, POP3 and SMTP work with other apps.
  custom_domains:
    answer: no
    note: Not supported. Addresses use AOL domains.
  anonymous_signup:
    answer: no
    evidence: https://help.aol.com/articles/use-whatsapp-to-verify-your-aol-account
    note: Registration requires a mobile phone number to receive a verification code.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

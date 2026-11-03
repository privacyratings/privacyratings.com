---
name: Mail.ru
description: Free, ad-supported email service from VK in Russia, with calendar and cloud storage. A paid Mail Space subscription removes ads, and custom domains are available through VK WorkSpace.
website: https://mail.ru
aliases:
  - Mail.ru Mail
platforms: [web, android]
mainstream: true
jurisdiction: RU
domain: mail.ru
mail_domain: mail.ru
imap_host: imap.mail.ru
pop3_host: pop.mail.ru
smtp_host: smtp.mail.ru
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://help.mail.ru/legal/terms/common/privacy/
    note: The website loads Google Tag Manager, Yandex Metrica and the Top.Mail.Ru counter. The privacy policy names Google Analytics and Yandex Metrica and describes advertising cookies.
  no_ads:
    answer: no
    evidence: https://help.mail.ru/legal/terms/mail/privacy/
    note: The free service shows personalized ads, and the privacy policy allows sharing user data with advertising system operators.
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
    evidence: https://help.mail.ru/mail/login/mailer/
    note: IMAP, POP3 and SMTP work with other apps using an app password. Creating one requires a phone number linked to the account.
  custom_domains:
    answer: partial
    evidence: https://workspace.vk.ru/domain-site-email/
    note: Custom domains require a paid VK WorkSpace business plan.
  anonymous_signup:
    answer: no
    evidence: https://help.mail.ru/mail/faq/signup/
    note: All new accounts are created with a VK ID and a phone number confirmed by SMS.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

---
name: Posteo
description: >-
  Paid, ad-free email service from Germany that runs without collecting names or addresses and accepts anonymous payment.
website: https://posteo.de/en
jurisdiction: DE
domain: posteo.de
mail_domain: posteo.de
criteria:
  open_source:
    answer: no
    evidence: https://posteo.de/en/site/encryption
    note: Closed source. The crypto mail storage plugin for Dovecot is published, but the rest of the service code is not.
  no_trackers:
    answer: yes
    evidence: https://posteo.de/en/site/privacy_policy
    note: The privacy policy states that the website and webmail have no tracking, no Google products and no third-party captchas.
  no_ads:
    answer: yes
    evidence: https://posteo.de/en/site/privacy_policy
    note: Funded by paid accounts. No ads and no advertising partners.
  independent_audit:
    answer: partial
    evidence: https://posteo.de/en/site/encryption
    note: Cure53 audited the crypto mail storage feature, but the report is not published.
  transparency_report:
    answer: yes
    evidence: https://posteo.de/site/transparenzbericht
    note: Publishes yearly counts of authority requests by type, legality and outcome. The German version is the most current.
  user_notice:
    answer: no
    evidence: https://posteo.de/en/site/transparency_report
    note: Posteo states that German law does not allow it to inform affected users.
  e2ee:
    answer: partial
    evidence: https://posteo.de/en/site/encryption
    note: PGP, S/MIME and password-encrypted mail are built into the webmail, but must be set up by the user.
  encrypted_storage:
    answer: yes
    evidence: https://posteo.de/en/site/encryption
    note: Optional crypto mail storage encrypts all stored mail with a key protected by the user's password. It is off by default.
  open_protocols:
    answer: yes
    evidence: https://posteo.de/en/help/how-do-i-set-up-posteo-in-an-email-client-pop3-imap-and-smtp
    note: IMAP, POP3 and SMTP work with any client.
  custom_domains:
    answer: no
    evidence: https://posteo.de/en/site/faq
    note: Posteo does not support custom domains.
  anonymous_signup:
    answer: yes
    evidence: https://posteo.de/en/site/privacy_policy
    note: No name, address, phone number or other email address is required to register.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
imap_host: posteo.de
pop3_host: posteo.de
smtp_host: posteo.de
---

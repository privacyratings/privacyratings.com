---
name: Mailo
description: >-
  Email service from France, formerly Net-C and NetCourrier, with calendar, contacts and cloud storage.
  Mailo Free shows advertising banners. Paid Premium plans have no ads and add POP3 access.
website: https://www.mailo.com
platforms: [web, android, ios]
aliases: [Net-C, NetCourrier]
jurisdiction: FR
domain: www.mailo.com
mail_domain: mailo.com
imap_host: mail.mailo.com
pop3_host: mail.mailo.com
smtp_host: mail.mailo.com
criteria:
  open_source:
    answer: no
    evidence: https://www.mailo.com/mailo/en/technology.php
    note: Closed source. The service runs on Mailo's own MailObject technology.
  no_trackers:
    answer: no
    evidence: https://www.mailo.com/mailo/en/privacy-rules.php
    note: The home page loads no third-party trackers, but the free webmail lets advertising agencies set cookies after consent through the Sirdata consent platform.
  no_ads:
    answer: partial
    evidence: https://www.mailo.com/mailo/en/privacy-rules.php
    note: Mailo Free shows advertising banners, personalized by agency cookies only with consent. Mail content is not used for ads, data is not shared with ad agencies, and paid plans have no ads.
  independent_audit:
    answer: no
    evidence: https://www.mailo.com/mailo/en/privacy-rules.php
    note: No independent audit is published. The privacy rules mention internal audits only.
  transparency_report:
    answer: partial
    evidence: https://www.mailo.com/mailo/en/privacy-rules.php
    note: Data is given to police and justice authorities only within a legal framework with a magistrate's authorization. No request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: partial
    evidence: https://www.mailo.com/mailo/en/pgp-encryption.php
    note: OpenPGP is built into the webmail, with keys held on Mailo's servers as a trusted third party. Not on by default. Keeping keys away from Mailo needs a mail app with PGP support.
  encrypted_storage:
    answer: no
    evidence: https://www.mailo.com/mailo/en/privacy-rules.php
    note: Encryption at rest for stored mail is not documented. Mail is scanned on Mailo's servers for spam and viruses.
  open_protocols:
    answer: yes
    evidence: https://faq.mailo.com/synchronisation/configurer-mailo-dans-outlook-pour-windows.htm
    note: IMAP, SMTP, CalDAV and CardDAV work on every plan, including Mailo Free. POP3 needs a Premium plan.
  custom_domains:
    answer: yes
    evidence: https://faq.mailo.com/compte/creer-des-adresses-avec-mon-propre-nom-de-domaine.htm
    note: An external domain can be added for free and used with a Premium, Family or Pro subscription.
  anonymous_signup:
    answer: yes
    evidence: https://www.mailo.com/mailo/en/privacy-rules.php
    note: No phone number or other email address is required. Registration asks for a name and date of birth to check the minimum age.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

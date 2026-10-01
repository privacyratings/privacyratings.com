---
name: GMX
description: Free, ad-supported email service from 1&1 Mail & Media in Germany, with webmail, mobile apps, calendar and cloud storage.
website: https://www.gmx.com
aliases:
  - GMX Mail
mainstream: true
jurisdiction: DE
domain: www.gmx.com
mail_domain: gmx.com
imap_host: imap.gmx.com
pop3_host: pop.gmx.com
smtp_host: mail.gmx.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.gmx.com/company/privacypolicy/
    note: The website loads Google Tag Manager, and the privacy policy describes usage analysis and interest-based advertising.
  no_ads:
    answer: no
    evidence: https://www.gmx.com/company/privacypolicy/
    note: The free service is funded by advertising, including interest-based ads.
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
    evidence: https://www.gmx.com/security/encryption/
    note: OpenPGP encryption is available through the Mailvelope browser extension and the GMX apps. Not on by default.
  encrypted_storage:
    answer: no
    note: Encryption at rest for stored mail is not documented.
  open_protocols:
    answer: yes
    evidence: https://support.gmx.com/pop-imap/index.html
    note: IMAP, POP3 and SMTP work with other apps once enabled in settings.
  custom_domains:
    answer: no
    note: Not supported. Addresses use GMX domains.
  anonymous_signup:
    answer: no
    evidence: https://www.gmx.com/company/privacypolicy/
    note: Registration asks for personal data such as name, date of birth and a phone number or contact email address.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

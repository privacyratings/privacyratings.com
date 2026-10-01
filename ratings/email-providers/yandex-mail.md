---
name: Yandex Mail
description: Free, ad-supported email service from Yandex in Russia, part of Yandex 360 with calendar and cloud storage. Custom domains are available through Yandex 360 for Business.
website: https://360.yandex.com/mail/
mainstream: true
jurisdiction: RU
domain: mail.yandex.com
mail_domain: yandex.com
imap_host: imap.yandex.com
pop3_host: pop.yandex.com
smtp_host: smtp.yandex.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://yandex.com/legal/confidential/en/
    note: The privacy policy covers analytics and third-party tracking and advertising cookies used across Yandex services.
  no_ads:
    answer: no
    evidence: https://yandex.com/legal/confidential/en/
    note: The free service shows ads, and the privacy policy describes personalizing ads based on user data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://yandex.com/company/privacy/transparencyreport
    note: Publishes twice-yearly counts of government data requests, including for Mail, and how many were refused.
  user_notice:
    answer: no
    evidence: https://yandex.com/company/privacy/transparencyreport
    note: Yandex states it does not notify users about data requests, citing legal prohibitions in Russia and other countries.
  e2ee:
    answer: no
    note: Not supported.
  encrypted_storage:
    answer: no
    note: Encryption at rest for stored mail is not documented.
  open_protocols:
    answer: yes
    evidence: https://yandex.com/support/yandex-360/customers/mail/en/mail-clients/others
    note: IMAP and SMTP work with other apps once enabled in settings, using an app password. POP3 is also offered but not maintained.
  custom_domains:
    answer: partial
    evidence: https://yandex.com/support/yandex-360/business/admin/en/domains/
    note: Custom domains require a Yandex 360 for Business organization.
  anonymous_signup:
    answer: no
    evidence: https://yandex.com/support/id/en/authorization/registration
    note: Registration requires a phone number or another email address.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

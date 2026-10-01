---
name: Mail.com
description: Free, ad-supported email service from 1&1 Mail & Media, part of United Internet, offering addresses on many domains such as mail.com and email.com. A paid Premium plan adds IMAP, POP3 and phone support.
website: https://www.mail.com
mainstream: true
jurisdiction: US
domain: www.mail.com
mail_domain: mail.com
imap_host: imap.mail.com
pop3_host: pop.mail.com
smtp_host: smtp.mail.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.mail.com/company/privacypolicy/
    note: The website loads Google Tag Manager, and the privacy policy allows third-party ad companies to collect data with cookies and web beacons.
  no_ads:
    answer: no
    evidence: https://www.mail.com/company/privacypolicy/
    note: The free service is funded by advertising, including behavioral ads from third-party companies.
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
    evidence: https://support.mail.com/pop-imap/index.html
    note: IMAP, POP3 and SMTP work with other apps on the paid Premium plan. Free accounts cannot use them.
  custom_domains:
    answer: no
    note: Not supported. Addresses use domains owned by mail.com.
  anonymous_signup:
    answer: no
    evidence: https://signup.mail.com/
    note: Registration asks for name and date of birth and requires a recovery email address or mobile number.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

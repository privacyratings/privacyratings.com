---
name: AT&T Mail
description: >-
  Free, ad-supported email service from AT&T for att.net and currently.com addresses and legacy sbcglobal.net, bellsouth.net and ameritech.net accounts. It runs on Yahoo Mail. A paid Yahoo Mail Plus plan removes ads.
website: https://more.att.com/email/
aliases:
  - AT&T Yahoo Mail
  - att.net email
mainstream: true
jurisdiction: US
platforms: [web, android, ios]
domain: more.att.com
mail_domain: att.net
imap_host: imap.mail.att.net
pop3_host: inbound.att.net
smtp_host: smtp.mail.att.net
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://about.att.com/privacy/privacy-notice.html
    note: The AT&T Mail page loads Google Tag Manager and Adobe tags, and the AT&T privacy notice allows cookies and advertising identifiers for tracking.
  no_ads:
    answer: no
    evidence: https://www.att.com/support/article/email-support/KM1482119/
    note: The free service shows ads. Yahoo Mail Plus is described as the ad-free version of AT&T Mail.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://sustainability.att.com/reports/transparency-report
    note: AT&T publishes counts of government demands and how they were answered. The report does not list email separately.
  user_notice:
    answer: no
    note: Neither the AT&T privacy notice nor the transparency report promises to notify users about data requests.
  e2ee:
    answer: no
    note: Not supported.
  encrypted_storage:
    answer: no
    note: Encryption at rest for stored mail is not documented.
  open_protocols:
    answer: yes
    evidence: https://www.att.com/support/article/smb-email-support/KM1010523
    note: IMAP, POP3 and SMTP work with other apps. Apps without OAuth sign-in need a secure mail key instead of the password.
  custom_domains:
    answer: no
    evidence: https://more.att.com/email/
    note: Not supported. New addresses use the att.net or currently.com domains.
  anonymous_signup:
    answer: no
    evidence: https://www.att.com/support/article/email-support/KM1232207/
    note: Sign-up requires a wireless number that receives a confirmation code by text, a ZIP code and security questions.
---

AT&T Mail accounts are [Yahoo Mail accounts provided through AT&T](https://help.yahoo.com/kb/account/partner-support-article-sln25426.html), and the mobile app is the [Yahoo Mail app](https://more.att.com/attmail/att-yahoo-mail-app). AT&T and Yahoo each have a [privacy policy](https://legal.yahoo.com/us/en/att/privacy/index.html) that applies to the service.

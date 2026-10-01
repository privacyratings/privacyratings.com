---
name: Runbox
description: >-
  Paid email service from Norway with custom domain hosting, standard protocols and an open-source webmail app.
website: https://runbox.com
smtp_host: mail.runbox.com
pop3_host: mail.runbox.com
imap_host: mail.runbox.com
jurisdiction: NO
domain: runbox.com
mail_domain: runbox.com
source: https://github.com/runbox/runbox7
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/runbox/runbox7/blob/master/LICENSE
    note: The Runbox 7 webmail app is open source under GPL-3.0. The server components are not.
  no_trackers:
    answer: yes
    evidence: https://runbox.com/about/privacy-policy/
    note: The privacy policy states that no third-party tracking, statistics or web beacons are used.
  no_ads:
    answer: yes
    evidence: https://runbox.com/about/privacy-policy/
    note: Funded by paid plans. No ads, and user data is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://runbox.com/features/privacy-security/transparency-report/
    note: Publishes yearly counts of disclosure requests received, complied with and rejected.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: partial
    evidence: https://help.runbox.com/encrypting-your-runbox-email/
    note: PGP and S/MIME work in desktop clients or in the webmail with browser extensions such as Mailvelope. Not built in.
  encrypted_storage:
    answer: no
    note: Encryption of stored mail is not documented.
  open_protocols:
    answer: yes
    evidence: https://help.runbox.com/email-program-settings/
    note: IMAP, POP3 and SMTP work with any client.
  custom_domains:
    answer: yes
    evidence: https://runbox.com/pricing/
    note: Every plan includes at least one custom domain.
  anonymous_signup:
    answer: no
    evidence: https://runbox.com/about/privacy-policy/
    note: Registration asks for a name, country and an alternative email address.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

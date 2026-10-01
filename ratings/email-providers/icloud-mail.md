---
name: iCloud Mail
description: Email service included with every Apple Account, with @icloud.com addresses and custom domains for iCloud+ subscribers.
website: https://www.icloud.com/mail
family: apple
mainstream: true
jurisdiction: US
domain: www.icloud.com
mail_domain: icloud.com
imap_host: imap.mail.me.com
pop3_host: false
smtp_host: smtp.mail.me.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/data/en/device-analytics/
    note: Analytics are only shared with Apple with consent, and iCloud.com loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/en-ww/
    note: Funded by device sales and iCloud+ subscriptions. No ads, and Apple states that it does not sell personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://www.apple.com/legal/transparency/
    note: Apple publishes counts of government and private party requests twice a year.
  user_notice:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/law-enforcement-guidelines-us.pdf
    note: Apple notifies customers when their account information is sought, unless prohibited by law or in emergencies.
  e2ee:
    answer: no
    evidence: https://support.apple.com/en-us/102651
    note: iCloud Mail is not end-to-end encrypted, even with Advanced Data Protection. S/MIME works in Apple Mail.
  encrypted_storage:
    answer: partial
    evidence: https://support.apple.com/en-us/102651
    note: Mail is encrypted on the server with keys Apple holds.
  open_protocols:
    answer: yes
    evidence: https://support.apple.com/en-us/102525
    note: IMAP and SMTP work with other apps. POP3 is not supported.
  custom_domains:
    answer: yes
    evidence: https://support.apple.com/en-us/102540
    note: Available with any iCloud+ subscription.
  anonymous_signup:
    answer: no
    evidence: https://support.apple.com/en-us/108647
    note: Creating an Apple Account asks for a birth date, an email address and a phone number.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

---
name: Hide My Email
description: Apple iCloud+ feature that creates random email addresses which forward to a personal inbox. Also used by Sign in with Apple.
website: https://support.apple.com/en-us/102548
family: apple
aliases:
  - iCloud Hide My Email
jurisdiction: US
domain: www.icloud.com
mail_domain: icloud.com
pop3_host: false
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
    note: Included with the paid iCloud+ subscription. Apple states that it does not sell personal data.
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
    note: Not supported. Forwarded mail is not encrypted end to end.
  no_mail_storage:
    answer: yes
    evidence: https://support.apple.com/en-us/102548
    note: Messages are deleted from the relay servers after delivery, usually within seconds, and their content is not processed beyond spam filtering.
  open_protocols:
    answer: no
    note: No IMAP or SMTP access for aliases. Mail is forwarded to an existing inbox.
  custom_domains:
    answer: no
    note: Not supported for Hide My Email addresses. Custom email domains are a separate iCloud Mail feature.
  anonymous_signup:
    answer: no
    evidence: https://support.apple.com/en-us/108647
    note: An Apple Account is required, and creating one asks for a phone number and an email address.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

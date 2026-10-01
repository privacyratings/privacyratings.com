---
name: CounterMail
description: Paid email service in Sweden that encrypts mail with OpenPGP and stores it encrypted. New registrations are closed.
website: https://countermail.com
jurisdiction: SE
domain: countermail.com
mail_domain: countermail.com
imap_host: imap1.countermail.com
pop3_host: false
smtp_host: imap1.countermail.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://countermail.com/?p=privacy
    note: No cookies and no IP logging, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://countermail.com/?p=privacy
    note: Funded by paid accounts. Account data is never shared or sold.
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
    answer: yes
    evidence: https://countermail.com/?p=services
    note: OpenPGP encryption is built in and automatic between users, and works with any OpenPGP user outside CounterMail.
  encrypted_storage:
    answer: yes
    evidence: https://countermail.com/?p=server
    note: Mail is stored encrypted with the user's OpenPGP key, and incoming unencrypted mail is encrypted on arrival.
  open_protocols:
    answer: yes
    evidence: https://support.countermail.com/kb/faq.php?id=14
    note: IMAP and SMTP work with any client on premium accounts, with a PGP plugin needed to read mail.
  custom_domains:
    answer: yes
    evidence: https://countermail.com/?p=services
    note: Available for a one-time setup fee.
  anonymous_signup:
    answer: yes
    evidence: https://webmail.countermail.com/register/index.php
    note: Registration asks only for a username, password and invitation code, but it is closed to new users.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

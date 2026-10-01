---
name: Kolab Now
description: Paid email and groupware service from Apheleia IT in Switzerland, built on the open-source Kolab platform, with calendars, contacts, files and video calls.
website: https://kolabnow.com
jurisdiction: CH
source: https://git.kolab.org/source/kolab/
domain: kolabnow.com
mail_domain: kolabnow.com
imap_host: imap.kolabnow.com
pop3_host: pop.kolabnow.com
smtp_host: smtp.kolabnow.com
criteria:
  open_source:
    answer: yes
    evidence: https://git.kolab.org/source/kolab/
    note: Runs on the open-source Kolab platform, and the terms state that all software used is free software.
  no_trackers:
    answer: yes
    evidence: https://kb.kolabnow.com/documentation/why-kolab-now-is-the-right-thing-for-you
    note: User data is not sold or used for statistical analysis, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://kolabnow.com/tos
    note: Funded by subscriptions. No advertising and no sale of personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://kolabnow.com/tos
    note: The terms state that data is only given to third parties with a warrant from a Swiss judge. No request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: partial
    evidence: https://kb.kolabnow.com/documentation/kolab-now-a-guide
    note: PGP encryption can be set up in the webmail settings. Not on by default.
  encrypted_storage:
    answer: no
    note: Encryption at rest for stored mail is not documented.
  open_protocols:
    answer: yes
    evidence: https://kb.kolabnow.com/documentation/generic-imap-client-setup-guide
    note: IMAP, SMTP, CalDAV and CardDAV work with any client.
  custom_domains:
    answer: yes
    evidence: https://kb.kolabnow.com/faq/what-is-the-price-for-a-kolab-now-subscription
    note: The first custom domain is free and extra domains cost a small monthly fee.
  anonymous_signup:
    answer: no
    note: An existing email address is required to verify a new account.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

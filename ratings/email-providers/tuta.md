---
name: Tuta
description: End-to-end encrypted email and calendar service from Germany, with open-source apps for web, desktop and mobile.
website: https://tuta.com
smtp_host: false
pop3_host: false
imap_host: false
mail_domain: tuta.com
jurisdiction: DE
source: https://github.com/tutao/tutanota
domain: tuta.com
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/tutao/tutanota/blob/master/LICENSE.txt
    note: Apps are open source under GPL-3.0. The server is not.
  transparency_report:
    answer: yes
    evidence: https://tuta.com/blog/transparency-report
    note: Publishes counts of requests by type and how many led to data being released.
  no_trackers:
    answer: yes
    evidence: https://tuta.com/privacy-policy
    note: No Google Analytics or other third-party analysis tools. Anonymized usage statistics are collected only with prior consent.
  no_ads:
    answer: yes
    evidence: https://tuta.com/pricing
    note: Funded by paid plans. No ads on any plan, including the free plan.
  independent_audit:
    answer: no
    note: No independent audit is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: yes
    evidence: https://tuta.com/encryption
    note: Mail between Tuta users is always end-to-end encrypted, including subject lines. Password-protected mail is available for other recipients.
  encrypted_storage:
    answer: yes
    evidence: https://tuta.com/encryption
    note: The whole mailbox, including the search index, is encrypted with keys only the user holds.
  open_protocols:
    answer: no
    evidence: https://tuta.com/blog/desktop-clients-tutanota#security-first-approach-no-imap-no-compromises
    note: No IMAP, POP3 or SMTP access. Mail can only be used in Tuta's own apps.
  custom_domains:
    answer: yes
    evidence: https://tuta.com/pricing
    note: Available on paid plans from Revolutionary up.
  anonymous_signup:
    answer: yes
    evidence: https://tuta.com/blog/anonymous-email
    note: No phone number or other email address is needed to register.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
imported_from: awesome-privacy
---

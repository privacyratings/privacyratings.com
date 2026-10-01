---
name: Migadu
description: Swiss email hosting service for custom domains, priced by usage rather than per mailbox, with standard IMAP, POP3 and SMTP access.
website: https://migadu.com
jurisdiction: CH
domain: migadu.com
mail_domain: migadu.com
imap_host: imap.migadu.com
pop3_host: pop.migadu.com
smtp_host: smtp.migadu.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://migadu.com/privacy/
    note: No tracking or analytics cookies, and no website analytics.
  no_ads:
    answer: yes
    evidence: https://migadu.com/about/
    note: Funded by paid plans. No ads and no outside investors.
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
    evidence: https://migadu.com/procon/
    note: Not supported. Migadu recommends OpenPGP tools in the mail client.
  encrypted_storage:
    answer: no
    evidence: https://migadu.com/procon/
    note: Stored mail is not encrypted. Data is split across disks instead.
  open_protocols:
    answer: yes
    evidence: https://migadu.com/guides/thunderbird/
    note: IMAP, POP3 and SMTP work with any client.
  custom_domains:
    answer: yes
    evidence: https://migadu.com/pricing/
    note: The service is built for custom domains on every plan.
  anonymous_signup:
    answer: no
    evidence: https://admin.migadu.com/public/signup
    note: An existing email address is needed to verify the account.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

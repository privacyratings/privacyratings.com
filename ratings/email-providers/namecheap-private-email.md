---
name: Namecheap Private Email
description: Paid email hosting from Namecheap for custom domains, with webmail, calendar and standard protocol access.
website: https://www.namecheap.com/hosting/email/
jurisdiction: US
domain: privateemail.com
mail_domain: privateemail.com
imap_host: mail.privateemail.com
pop3_host: mail.privateemail.com
smtp_host: mail.privateemail.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.namecheap.com/legal/general/privacy-policy/
    note: The privacy policy allows cookies from partners and tracking companies and sharing pseudonymous data with analytics partners.
  no_ads:
    answer: yes
    evidence: https://www.namecheap.com/legal/general/privacy-policy/
    note: Funded by paid plans. The policy states personal information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: partial
    evidence: https://www.namecheap.com/legal/general/privacy-policy/
    note: The policy says Namecheap may take reasonable steps to notify users of legal process where permitted, with no firm commitment.
  e2ee:
    answer: no
    note: Not supported.
  encrypted_storage:
    answer: partial
    evidence: https://www.namecheap.com/hosting/email/
    note: Stored data is encrypted on the servers, with keys Namecheap holds.
  open_protocols:
    answer: yes
    evidence: https://www.namecheap.com/support/knowledgebase/article.aspx/1179/2175/general-private-email-configuration-for-mail-clients-and-mobile-devices/
    note: IMAP, POP3 and SMTP work with any client on every plan.
  custom_domains:
    answer: yes
    evidence: https://www.namecheap.com/hosting/email/
    note: The service is built for custom domains on every plan.
  anonymous_signup:
    answer: no
    evidence: https://www.namecheap.com/myaccount/signup/
    note: A Namecheap account requires a name and an existing email address.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

---
name: StartMail
description: >-
  Paid email service from the Netherlands with built-in PGP encryption, unlimited aliases and custom domains.
website: https://www.startmail.com
smtp_host: smtp.startmail.com
imap_host: imap.startmail.com
jurisdiction: NL
domain: www.startmail.com
mail_domain: startmail.com
pop3_host: false
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.startmail.com/privacy
    note: No third-party tracking or advertising data sharing, but website analytics use self-hosted Matomo, which sets cookies.
  no_ads:
    answer: yes
    evidence: https://www.startmail.com/pricing
    note: Funded by paid plans. No ads and no data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://www.startmail.com/transparency
    note: Publishes yearly counts of legal orders processed and what information was provided.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: partial
    evidence: https://www.startmail.com/encrypted-email
    note: PGP and password-protected messages are built into the webmail, but encryption is chosen per message.
  encrypted_storage:
    answer: yes
    evidence: https://www.startmail.com/whitepaper
    note: All mail is stored in an encrypted User Vault that opens only with the account password or a recovery key.
  open_protocols:
    answer: yes
    evidence: https://support.startmail.com/hc/en-us/articles/360006596718-Server-addresses
    note: IMAP and SMTP work with any client. POP3 is not supported.
  custom_domains:
    answer: yes
    evidence: https://www.startmail.com/pricing
    note: The Personal plan includes one custom domain. The Business plan allows unlimited domains.
  anonymous_signup:
    answer: yes
    evidence: https://www.startmail.com/privacy
    note: A name and recovery email address are optional. Sign-up uses an hCaptcha check.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

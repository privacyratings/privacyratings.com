---
name: GandiMail
description: Paid email hosting for custom domains from Gandi, a French domain registrar, with SOGo and Roundcube webmail and standard protocol access.
website: https://www.gandi.net/en/domain/email
jurisdiction: FR
domain: webmail.gandi.net
mail_domain: gandi.net
imap_host: mail.gandi.net
pop3_host: mail.gandi.net
smtp_host: mail.gandi.net
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.gandi.net/en/contracts/privacy-policy
    note: The privacy policy lists AT Internet audience-measurement cookies, which can be opted out of.
  no_ads:
    answer: yes
    evidence: https://www.gandi.net/en/domain/email
    note: Funded by paid mailbox plans. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published. Gandi states ISO 27001 certification, but no report is public.
  transparency_report:
    answer: yes
    evidence: https://www.gandi.net/en/digital-service-act-transparency-report
    note: Yearly reports with counts of information requests from authorities and content notices.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: no
    note: Not supported.
  encrypted_storage:
    answer: no
    note: Encryption at rest for stored mail is not documented.
  open_protocols:
    answer: yes
    evidence: https://docs.gandi.net/en/gandimail/standard_email_settings/index.html
    note: IMAP, POP3 and SMTP work with any client on every plan.
  custom_domains:
    answer: yes
    evidence: https://www.gandi.net/en/domain/email
    note: Every mailbox uses your own domain, registered with Gandi or elsewhere.
  anonymous_signup:
    answer: no
    evidence: https://account.gandi.net/en/create_account
    note: Creating a Gandi account requires an existing email address, and purchases require contact and payment details.
  srs:
    answer: no
    evidence: https://docs.gandi.net/en/gandimail/forwarding_and_aliases/index.html
    note: The forwarding documentation warns that forwarded mail may fail SPF checks, and no SRS is documented.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

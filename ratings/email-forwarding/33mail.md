---
name: 33mail
description: Email alias service that creates addresses on a personal 33mail.com subdomain or a custom domain and forwards mail to an existing inbox, with anonymous replies.
website: https://www.33mail.com
jurisdiction: IE
domain: www.33mail.com
mail_domain: 33mail.com
imap_host: false
pop3_host: false
smtp_host: false
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.33mail.com
    note: The website loads Google Analytics and the Facebook SDK.
  no_ads:
    answer: no
    evidence: https://www.33mail.com/tos
    note: Short ads may be added to forwarded mail on the free plan. Paid plans remove them.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://www.33mail.com/tos
    note: The terms state that data is shared with law enforcement when required, but no request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: no
    note: Not supported. Forwarded mail is not encrypted end to end.
  no_mail_storage:
    answer: no
    note: No published information on whether forwarded mail is stored.
  open_protocols:
    answer: no
    evidence: https://www.33mail.com/faq
    note: No IMAP or SMTP access. Mail is forwarded to an existing inbox and replies go through anonymous reply addresses.
  custom_domains:
    answer: yes
    evidence: https://www.33mail.com/pricing
    note: Available on the low-cost Premium plan and up.
  anonymous_signup:
    answer: no
    note: An existing email address is required to receive forwarded mail.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

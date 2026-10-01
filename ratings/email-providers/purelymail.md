---
name: Purelymail
description: Low-cost email hosting from the United States with custom domains, standard protocols and mail stored encrypted with the user's password.
website: https://purelymail.com
jurisdiction: US
domain: purelymail.com
mail_domain: purelymail.com
imap_host: imap.purelymail.com
pop3_host: pop3.purelymail.com
smtp_host: smtp.purelymail.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://purelymail.com/privacy
    note: The privacy policy lists only diagnostic and billing data, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://purelymail.com/docs/security
    note: Funded by paid plans. Purelymail states it will never sell or monetize user data.
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
    evidence: https://purelymail.com/docs/security
    note: Not supported. Purelymail suggests S/MIME in the mail client.
  encrypted_storage:
    answer: yes
    evidence: https://purelymail.com/docs/security
    note: Mail is encrypted with a key derived from the user's password when password reset is turned off. Search indexes may hold partial content.
  open_protocols:
    answer: yes
    evidence: https://purelymail.com/docs/setup/technical
    note: IMAP, POP3 and SMTP work with any client.
  custom_domains:
    answer: yes
    evidence: https://purelymail.com/docs/features
    note: Unlimited custom domains at no extra charge.
  anonymous_signup:
    answer: yes
    evidence: https://purelymail.com/signup/
    note: Recovery email and phone are optional for paid sign-ups. Only the free trial needs an SMS-capable phone.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

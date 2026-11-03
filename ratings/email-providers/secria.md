---
name: Secria
description: >-
  Email service from Secria, Inc. in the United States, with mail stored in Germany. Mail between Secria users is
  end-to-end encrypted with a hybrid post-quantum key exchange. Free and paid plans, with no ads.
website: https://secria.me
platforms: [web, android, ios]
aliases: [Secria Mail]
jurisdiction: US
domain: secria.me
mail_domain: secria.me
imap_host: false
pop3_host: false
smtp_host: false
criteria:
  open_source:
    answer: no
    note: Closed source. No source code is published.
  no_trackers:
    answer: yes
    evidence: https://secria.me/privacy-policy/
    note: No third-party analytics, advertising cookies or tracking pixels on the website. The mail whitepaper states the apps contain no analytics or telemetry.
  no_ads:
    answer: yes
    evidence: https://secria.me/faq/
    note: Funded by paid plans. No ads and no sale of user data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://secria.me/privacy-policy/
    note: The privacy policy describes how legal requests are handled, and the VPN whitepaper mentions a signed warrant canary. No request counts are published.
  e2ee:
    answer: partial
    evidence: https://secria.me/whitepaper/mail/
    note: Mail between Secria users is end-to-end encrypted by default. Mail to other providers is sent over TLS, with no documented end-to-end option.
  encrypted_storage:
    answer: yes
    evidence: https://secria.me/whitepaper/mail/
    note: Stored mail, including mail from other providers, is encrypted to the user's public keys. Private keys are encrypted with a key derived from the password on the device.
  open_protocols:
    answer: no
    evidence: https://secria.me/faq/
    note: No IMAP, POP3 or SMTP access is documented. Mail is used in Secria's own web and mobile apps.
  custom_domains:
    answer: yes
    evidence: https://secria.me/pricing/
    note: Three custom domains on Mail Plus and ten on Pro. Not on the free plan.
  anonymous_signup:
    answer: partial
    evidence: https://secria.me/email-without-phone-number/
    note: Sign-up asks for a name, an address and a password, with no phone number. The sign-up app can ask some new accounts for a verified recovery email to stop spam.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

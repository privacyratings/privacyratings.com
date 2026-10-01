---
name: Infomaniak Mail
description: Email service from Swiss company Infomaniak, with free ik.me addresses and paid hosting for custom domains, plus web and mobile apps.
website: https://www.infomaniak.com/en/ksuite/service-mail
jurisdiction: CH
source: https://github.com/Infomaniak/android-kMail
domain: ksuite.infomaniak.com
mail_domain: ik.me
imap_host: mail.infomaniak.com
pop3_host: mail.infomaniak.com
smtp_host: mail.infomaniak.com
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Infomaniak/android-kMail/blob/main/LICENSE
    note: The Infomaniak Mail apps are GPL-3.0, but the server is closed source.
  no_trackers:
    answer: partial
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.infomaniak.mail/latest/
    note: Exodus finds Matomo and Sentry in the Android app. The website uses self-hosted Matomo and ad-measurement tools only with consent.
  no_ads:
    answer: yes
    evidence: https://www.infomaniak.com/en/free-email
    note: Funded by paid services. No ads, and data is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://www.infomaniak.com/en/legal/confidentiality-policy
    note: The privacy policy states that data is only disclosed to authorities under a decision valid under Swiss law. No request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: partial
    evidence: https://www.infomaniak.com/en/support/faq/1582/secure-an-email-sending-with-an-encryption-key
    note: Optional OpenPGP encryption with keys stored by Infomaniak, and password-protected mail for outside recipients. Not on by default.
  encrypted_storage:
    answer: partial
    evidence: https://www.infomaniak.com/en/support/faq/1582/secure-an-email-sending-with-an-encryption-key
    note: Encrypted messages are stored with keys Infomaniak holds and unlocks at login.
  open_protocols:
    answer: yes
    evidence: https://www.infomaniak.com/en/support/faq/2430/configure-thunderbird-with-imap-email
    note: IMAP, POP3 and SMTP work with any client.
  custom_domains:
    answer: yes
    evidence: https://www.infomaniak.com/en/ksuite/service-mail
    note: Available with the paid Mail Service.
  anonymous_signup:
    answer: no
    evidence: https://www.infomaniak.com/en/support/faq/2232/create-an-infomaniak-account
    note: A valid email address is required to verify a new account.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

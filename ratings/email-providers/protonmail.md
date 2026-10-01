---
name: Proton Mail
description: End-to-end encrypted email service from Switzerland, with apps for web, Android, iOS and desktop.
website: https://proton.me/mail
family: proton
smtp_host: false
pop3_host: false
imap_host: false
jurisdiction: CH
source: https://github.com/ProtonMail/WebClients
domain: proton.me
mail_domain: proton.me
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/ProtonMail/WebClients/blob/main/LICENSE
    note: Apps are open source under GPL-3.0. The server is not.
  no_ads:
    answer: yes
    evidence: https://proton.me/mail/pricing
    note: No ads on any plan, including the free plan.
  e2ee:
    answer: yes
    evidence: https://proton.me/support/proton-mail-encryption-explained
    note: Always end-to-end encrypted between Proton users. Password-protected messages or PGP for other recipients. Subject lines are not end-to-end encrypted.
  encrypted_storage:
    answer: yes
    evidence: https://proton.me/support/proton-mail-encryption-explained
    note: Stored mail uses zero-access encryption that Proton cannot read.
  custom_domains:
    answer: yes
    evidence: https://proton.me/mail/pricing
    note: From the Mail Plus plan up. Not on the free plan.
  open_protocols:
    answer: partial
    evidence: https://proton.me/support/imap-smtp-and-pop3-setup
    note: IMAP and SMTP need the Proton Mail Bridge app on a paid plan. POP3 is not supported.
  transparency_report:
    answer: yes
    evidence: https://proton.me/legal/transparency
    note: Publishes yearly counts of legal orders received, complied with and contested.
  no_trackers:
    answer: partial
    evidence: https://proton.me/legal/privacy
    note: Website analytics are self-hosted. The apps include crash reporting and usage statistics, which are on by default and can be turned off.
  independent_audit:
    answer: partial
    evidence: https://proton.me/blog/soc-2
    note: Proton completed a SOC 2 Type II audit, but the report is not public.
  user_notice:
    answer: yes
    evidence: https://proton.me/legal/law-enforcement
    note: Targeted users are notified of data requests, with delays only when Swiss law, a court order or a risk to life requires it.
  anonymous_signup:
    answer: partial
    evidence: https://proton.me/legal/privacy
    note: No personal data is needed by default, but some sign-ups must be verified by email or SMS.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
imported_from: awesome-privacy
---

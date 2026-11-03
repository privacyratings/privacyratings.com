---
name: Aster Mail
description: >-
  Email service from Aster Communications Inc. in the United States, with servers in Germany. Mail between Aster users
  is end-to-end encrypted with a hybrid post-quantum key exchange. Free and paid plans, no ads in the service.
website: https://astermail.org
source: https://github.com/Aster-Privacy/Aster-Mail
platforms: [web, android, windows, macos, linux]
aliases: [Aster]
jurisdiction: US
domain: astermail.org
mail_domain: astermail.org
imap_host: false
pop3_host: false
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Aster-Privacy/Aster-Mail/blob/main/LICENSE
    note: The web, desktop and Android apps, Aster Bridge and the aster-crypto library are open source under AGPL-3.0. The server is not.
  no_trackers:
    answer: partial
    evidence: https://astermail.org/privacy
    note: The website loads no third-party trackers or analytics. Sign-ups from Reddit ads are reported to Reddit, and the apps send error reports without an identifier by default.
  no_ads:
    answer: partial
    evidence: https://astermail.org/privacy
    note: Funded by paid plans, with no ads in the service. Sign-ups from Aster's own Reddit ads are reported to Reddit through its Conversions API.
  independent_audit:
    answer: no
    evidence: https://astermail.org/transparency
    note: No independent audit is published. The transparency page says an audit is underway.
  transparency_report:
    answer: yes
    evidence: https://astermail.org/transparency
    note: Publishes counts of legal requests received, accepted, denied and contested, with a signed warrant canary.
  user_notice:
    answer: yes
    evidence: https://astermail.org/privacy
    note: Users are notified of legal requests when the law does not forbid it.
  e2ee:
    answer: yes
    evidence: https://astermail.org/help
    note: Mail between Aster users is always end-to-end encrypted, including subject lines. OpenPGP or password-protected mail is available for other recipients.
  encrypted_storage:
    answer: yes
    evidence: https://astermail.org/blog/how-aster-encrypts-your-email/
    note: Stored mail, including mail from other providers, is encrypted to the user's key. Private keys are stored encrypted with a key derived from the password.
  open_protocols:
    answer: partial
    evidence: https://astermail.org/bridge/docs
    note: IMAP, POP3 and SMTP need the Aster Bridge app and the Star plan or higher.
  custom_domains:
    answer: yes
    evidence: https://astermail.org/pricing
    note: One custom domain on the free plan, and more on paid plans.
  anonymous_signup:
    answer: partial
    evidence: https://github.com/Aster-Privacy/Aster-Mail/blob/main/src/lib/i18n/translations/en.ts
    note: No phone number or recovery email is needed for a first account. A recovery email is required to create additional accounts.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
---

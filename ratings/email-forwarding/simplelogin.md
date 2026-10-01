---
name: SimpleLogin
description: Open-source email alias service run by Proton. Creates aliases that forward to real mailboxes and lets replies go out from the alias. Can also be self-hosted.
website: https://simplelogin.io
mail_domain: simplelogin.io
jurisdiction: CH
source: https://github.com/simple-login/app
domain: simplelogin.io
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/simple-login/app/blob/master/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://simplelogin.io/privacy/
    note: No advertising trackers. The privacy policy lists cookieless Plausible analytics on the website and crash reporting in the apps. The Android app has no trackers in Exodus.
  no_ads:
    answer: yes
    evidence: https://simplelogin.io/pricing/
    note: Funded by the Premium plan. No ads, and the privacy policy states data is never sold.
  independent_audit:
    answer: partial
    evidence: https://simplelogin.io/audit2022/web.pdf
    note: Securitum audited the web app, browser extensions and mobile apps. The full report is public but older than three years.
  transparency_report:
    answer: partial
    evidence: https://simplelogin.io/privacy/
    note: The privacy policy describes how legal requests are handled, but no request counts are published for SimpleLogin.
  user_notice:
    answer: yes
    evidence: https://simplelogin.io/privacy/
    note: Users are informed of legal requests unless legally prevented.
  e2ee:
    answer: partial
    evidence: https://simplelogin.io/pricing/
    note: Forwarded mail can be encrypted with the user's PGP key on the Premium plan. Not on by default.
  no_mail_storage:
    answer: partial
    evidence: https://simplelogin.io/privacy/
    note: Mail is deleted once delivered. Undeliverable mail is kept for 7 days so the user can review it.
  open_protocols:
    answer: no
    note: No IMAP or SMTP access. Mail is forwarded to an existing mailbox and replies go through reverse aliases.
  custom_domains:
    answer: yes
    evidence: https://simplelogin.io/pricing/
    note: Unlimited custom domains on the Premium plan.
  anonymous_signup:
    answer: no
    evidence: https://simplelogin.io/privacy/
    note: An existing email address is required to create an account and receive forwarded mail.
  srs:
    answer: no
    note: No published documentation on SRS. Forwarded mail is sent with a VERP return address on SimpleLogin's domain.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
imported_from: awesome-privacy
---

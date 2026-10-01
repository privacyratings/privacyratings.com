---
name: Addy
description: Open-source email alias service that forwards mail from unlimited aliases to real mailboxes, with optional OpenPGP encryption. Has a free plan and can be self-hosted.
website: https://addy.io
mail_domain: addy.io
imap_host: false
pop3_host: false
smtp_host: false
jurisdiction: GB
source: https://github.com/anonaddy/anonaddy
domain: addy.io
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/anonaddy/anonaddy/blob/master/LICENSE.md
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://addy.io/faq/#why-should-i-use-this-instead-of-a-similar-service
    note: No analytics or trackers, only server access logs, and no third-party content.
  no_ads:
    answer: yes
    evidence: https://addy.io/privacy/
    note: Funded by paid plans. No ads, and personal information is never sold or shared.
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
    answer: partial
    evidence: https://addy.io/faq/#are-forwarded-emails-signed-when-encryption-is-enabled
    note: Forwarded mail can be encrypted with the user's own OpenPGP key. Not on by default.
  no_mail_storage:
    answer: yes
    evidence: https://addy.io/faq/#do-you-store-emails
    note: Mail is not stored. Failed deliveries are kept only if the user turns that option on.
  open_protocols:
    answer: no
    evidence: https://addy.io/faq/#do-you-provide-smtp-credentials-for-aliases
    note: No IMAP or SMTP access. Mail is forwarded to an existing mailbox and replies go through the alias.
  custom_domains:
    answer: yes
    evidence: https://addy.io/#pricing
    note: From the Lite plan up.
  anonymous_signup:
    answer: no
    note: An existing email address is required to create an account and receive forwarded mail.
  srs:
    answer: no
    evidence: https://github.com/anonaddy/anonaddy/blob/master/app/Mail/ForwardEmail.php
    note: No SRS. Forwarded mail is re-sent with a VERP return address on addy.io's domain.
  arc:
    answer: partial
    evidence: https://github.com/anonaddy/anonaddy/blob/master/SELF-HOSTING.md
    note: The documented setup adds ARC signatures with Rspamd. Validation of inbound ARC chains is not documented.
---

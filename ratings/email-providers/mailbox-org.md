---
name: mailbox.org
description: Paid email, calendar and office service from Berlin, Germany, with built-in PGP encryption and support for custom domains.
website: https://mailbox.org
smtp_host: smtp.mailbox.org
pop3_host: pop3.mailbox.org
imap_host: imap.mailbox.org
mail_domain: mailbox.org
jurisdiction: DE
domain: mailbox.org
imported_from: awesome-privacy
criteria:
  open_source:
    answer: no
    note: Closed source. Parts of the underlying software, such as Open-Xchange and Dovecot, are open source, but the service code is not published.
  no_trackers:
    answer: yes
    evidence: https://mailbox.org/en/data-protection/
    note: The website uses a self-hosted, cookieless Matomo instance with anonymized data. No third-party analytics.
  no_ads:
    answer: yes
    evidence: https://mailbox.org/en/prices/
    note: Funded by paid plans. No ads and no data sales.
  independent_audit:
    answer: partial
    evidence: https://mailbox.org/en/certified-quality/
    note: Holds ISO 27001 and BSI C5 certifications from independent auditors. The audit reports are not public.
  transparency_report:
    answer: yes
    evidence: https://mailbox.org/en/transparency-report/
    note: Publishes yearly counts of authority requests by type, origin and outcome.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: partial
    evidence: https://mailbox.org/en/security/
    note: PGP and S/MIME are built into the webmail through mailbox Guard, but must be turned on by the user.
  encrypted_storage:
    answer: partial
    evidence: https://kb.mailbox.org/en/private/encryption/your-encrypted-mailbox/
    note: Incoming mail can optionally be encrypted with the user's own PGP key. This is off by default and sent mail is not encrypted.
  open_protocols:
    answer: yes
    evidence: https://kb.mailbox.org/en/private/e-mail/e-mail-configuration/
    note: IMAP, POP3 and SMTP work with any client.
  custom_domains:
    answer: yes
    evidence: https://mailbox.org/en/prices/
    note: Available from the Standard plan up.
  anonymous_signup:
    answer: yes
    evidence: https://kb.mailbox.org/en/private/security-and-privacy/anonymous-new-registration/
    note: A name is required but not verified, so a pseudonym can be used. No phone number is needed.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

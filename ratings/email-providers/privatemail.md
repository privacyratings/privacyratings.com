---
name: PrivateMail
description: >-
  Paid email service from PrivateMail LLC in the United States, made by the team behind TorGuard VPN, with OpenPGP
  encryption in the browser and apps and encrypted file storage.
website: https://privatemail.com
aliases:
  - Private-Mail
platforms: [web, android, windows, macos, linux]
jurisdiction: US
domain: privatemail.com
mail_domain: privatemail.com
criteria:
  open_source:
    answer: no
    note: No source code is published. The site says it uses open-source encryption libraries.
  no_trackers:
    answer: no
    evidence: https://privatemail.com/privacy.php
    note: The website loads the LiveChat widget, and the privacy policy describes Google Analytics and cookies from third-party analytics providers.
  no_ads:
    answer: partial
    evidence: https://privatemail.com/privacy.php
    note: Funded by paid plans, with no ads in the mail service and no sale of personal data. The privacy policy allows interest-based advertising of Private-Mail on other websites.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    evidence: https://privatemail.com/privacy.php
    note: The privacy policy states that personal information is disclosed without notice when required by law or legal process.
  e2ee:
    answer: partial
    evidence: https://privatemail.com/openpgp-encryption.php
    note: OpenPGP is built into the webmail and apps, with keys generated and kept on the device. It must be turned on and recipients' public keys imported, so it is not on by default.
  encrypted_storage:
    answer: no
    evidence: https://privatemail.com/openpgp-encryption.php
    note: Only messages encrypted with OpenPGP are documented as unreadable on the server. Encryption of other stored mail is not documented.
  open_protocols:
    answer: partial
    evidence: https://privatemail.com/business.php
    note: POP3, IMAP and SMTP are listed only on the Business plans. The Standard and Pro plans are webmail and app only.
  custom_domains:
    answer: partial
    evidence: https://privatemail.com/business.php
    note: Only on the Business plans.
  anonymous_signup:
    answer: no
    evidence: https://privatemail.com/anonymous-email.php
    note: Paying with cryptocurrency needs no name or billing address, but an existing email address is required.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---

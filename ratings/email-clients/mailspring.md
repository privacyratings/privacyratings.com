---
name: Mailspring
description: Open-source desktop email client for Windows, macOS and Linux with a unified inbox and optional paid features such as read receipts and send later.
website: https://www.getmailspring.com
source: https://github.com/Foundry376/Mailspring
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Foundry376/Mailspring/blob/master/LICENSE.md
    note: The app and its sync engine are GPL-3.0, but the Mailspring ID service behind the Pro features is closed source.
  no_trackers:
    answer: no
    evidence: https://www.getmailspring.com/privacy-policy
    note: The website loads Google Analytics, and the privacy policy lists Mixpanel, Intercom and Google Analytics for tracking.
  no_ads:
    answer: yes
    evidence: https://www.getmailspring.com/pro
    note: Funded by the Mailspring Pro subscription. The app shows no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: no
    note: Not supported.
  no_cloud_relay:
    answer: partial
    evidence: https://www.getmailspring.com/privacy-policy
    note: Credentials stay in the system keychain and mail syncs directly, but linked addresses are sent to Mailspring servers for features such as read receipts.
  remote_content_blocked:
    answer: partial
    evidence: https://github.com/Foundry376/Mailspring/blob/master/app/src/config-schema.ts
    note: Images load automatically by default. Automatic loading can be turned off in settings.
  any_provider:
    answer: yes
    evidence: https://www.getmailspring.com
    note: Works with any IMAP and SMTP provider.
---

---
name: Airmail
description: Closed-source email client for macOS, iPhone and iPad with support for Gmail, Outlook, Exchange and IMAP accounts, rules, snooze and send later.
website: https://airmailapp.com
jurisdiction: IT
platforms:
  - macos
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.iubenda.com/privacy-policy/649502/legal
    note: No third-party advertising trackers, but the app sends first-party usage analytics by default, which can be turned off.
  no_ads:
    answer: yes
    evidence: https://www.iubenda.com/privacy-policy/649502/legal
    note: Funded by subscriptions. Personal data is not sold or used for third-party advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: partial
    evidence: https://help.airmailapp.com/en-us/article/plugins-airmail-for-macos-lenvq3/
    note: PGP needs a separate GPG plugin on macOS. Not available on iOS.
  no_cloud_relay:
    answer: partial
    evidence: https://www.iubenda.com/privacy-policy/649502/legal
    note: Connects directly to mail servers, but optional real-time notifications, send later and snooze store account credentials on Airmail servers.
  remote_content_blocked:
    answer: partial
    evidence: https://help.airmailapp.com/en-us/article/autoload-remote-images-1pwguyc/
    note: Automatic loading of remote images can be turned off in settings.
  any_provider:
    answer: yes
    evidence: https://help.airmailapp.com/en-us/article/account-setup-imap-in-ios-hz7t46/
    note: Works with any IMAP provider, plus Gmail, Outlook and Exchange accounts.
---

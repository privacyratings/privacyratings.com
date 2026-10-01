---
name: Mailbird
description: Closed-source desktop email client for Windows, with a separate Mailbird Next app for macOS, that combines several accounts in a unified inbox with calendar and app integrations.
website: https://www.getmailbird.com
jurisdiction: US
platforms:
  - windows
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.getmailbird.com/privacy-policy/
    note: The website loads Google Tag Manager, Mixpanel, PostHog, LinkedIn and TikTok trackers, and the policy lists Google Analytics, Mixpanel and Hotjar.
  no_ads:
    answer: no
    evidence: https://www.getmailbird.com/privacy-policy/
    note: Sells paid plans, but the privacy policy allows targeted third-party advertising on the site and in the applications.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: no
    evidence: https://support.getmailbird.com/hc/en-us/articles/15014091847575-Is-PGP-encryption-supported-in-Mailbird
    note: PGP encryption is not supported.
  no_cloud_relay:
    answer: yes
    evidence: https://support.getmailbird.com/hc/en-us/articles/360006261473-I-have-forgotten-my-email-password
    note: Connects directly to mail servers. Usernames and passwords are stored encrypted on the local drive.
  remote_content_blocked:
    answer: yes
    evidence: https://support.getmailbird.com/hc/en-us/articles/220107267-Always-Show-Remote-Images
    note: Remote images load only when allowed for a message or sender, unless Always show remote images is turned on.
  any_provider:
    answer: yes
    evidence: https://support.getmailbird.com/hc/en-us/articles/220106687-IMAP-Support-in-Mailbird
    note: Works with any IMAP and POP3 provider, plus Exchange on paid plans.
---

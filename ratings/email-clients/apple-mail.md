---
name: Apple Mail
description: Email app built into macOS, iOS and iPadOS. Works with iCloud Mail and any IMAP, POP3 or Exchange account.
website: https://support.apple.com/mail
family: apple
mainstream: true
jurisdiction: US
platforms:
  - macos
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/device-analytics/
    note: No third-party trackers in the app, and sharing device analytics with Apple is opt-in. Apple web pages load Apple's own analytics (ac-analytics, sent to metrics.apple.com) by default.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/en-ww/
    note: Included with Apple devices and shows no ads. Apple states that it does not sell personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: no
    note: Not supported. S/MIME is built in.
  no_cloud_relay:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/data/en/mail-privacy-protection/
    note: Connects directly to mail servers. With Mail Privacy Protection, only remote content is fetched through Apple relays.
  remote_content_blocked:
    answer: partial
    evidence: https://support.apple.com/guide/iphone/use-mail-privacy-protection-iphf084865c7/ios
    note: Mail Privacy Protection loads remote content privately through relays instead of blocking it. Remote content can be fully blocked in settings.
  any_provider:
    answer: yes
    evidence: https://support.apple.com/guide/mail/add-and-manage-email-accounts-mail35803/mac
    note: Works with any IMAP, POP3 and Exchange provider.
---

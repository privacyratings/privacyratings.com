---
name: iMessage
description: Apple's end-to-end encrypted messaging service built into the Messages app on iPhone, iPad, Mac and other Apple devices, addressed by phone number or Apple Account email.
website: https://support.apple.com/messages
family: apple
aliases:
  - Apple Messages
mainstream: true
jurisdiction: US
platforms:
  - ios
  - macos
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
    note: Funded by Apple device sales, with no ads in Messages; the privacy policy states Apple does not sell personal data.
  independent_audit:
    answer: no
    note: No independent audit is published; Apple has only published commissioned formal analyses of the PQ3 protocol.
  e2ee_default:
    answer: yes
    evidence: https://support.apple.com/guide/security/imessage-security-overview-secd9764312f/web
    note: All iMessage chats, including groups, are end-to-end encrypted; iCloud backups of messages are only end-to-end encrypted with Advanced Data Protection, and SMS fallback is not encrypted.
  no_phone_number:
    answer: partial
    evidence: https://support.apple.com/en-us/108647
    note: Creating an Apple Account requires verifying a phone number, but iMessage can be used with an email address so the number is not shown to contacts.
  metadata_protection:
    answer: no
    evidence: https://www.apple.com/legal/privacy/data/en/messages/
    note: Apple's servers route messages by sender and recipient and may keep the phone numbers and email addresses a user looks up for up to 30 days.
  decentralized:
    answer: no
    note: One central service run by Apple.
---

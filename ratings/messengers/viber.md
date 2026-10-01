---
name: Viber
description: Messenger owned by Rakuten for chats, groups, voice and video calls, communities and channels, tied to a phone number. Private chats, groups and calls are end-to-end encrypted; the app is funded by ads.
website: https://www.viber.com
mainstream: true
jurisdiction: LU
platforms:
  - android
  - ios
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.viber.voip/latest/
    note: Exodus finds 21 trackers in the Android app, including Google AdMob, Facebook Ads, AppLovin, Adjust and MixPanel.
  no_ads:
    answer: no
    evidence: https://www.viber.com/en/terms/viber-privacy-policy/
    note: Funded by advertising; the privacy policy describes personalized ads based on Viber activity and data from third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_default:
    answer: yes
    evidence: https://www.viber.com/app/uploads/viber-encryption-overview.pdf
    note: One-on-one chats, group chats, calls and media are end-to-end encrypted by default; public communities and channels are not.
  no_phone_number:
    answer: partial
    evidence: https://www.viber.com/en/security/
    note: A phone number is required, but people met in communities or through name search can chat without seeing it.
  metadata_protection:
    answer: no
    note: The server sees who talks to whom, and the privacy policy lists activity and device data used for advertising.
  decentralized:
    answer: no
    note: One central service run by Rakuten Viber.
---

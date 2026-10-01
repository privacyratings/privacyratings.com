---
name: Spike
description: Closed-source email app that shows messages as chat conversations and adds team chat, notes and video meetings, available for web, Windows, macOS, iOS and Android.
website: https://www.spikenow.com
jurisdiction: IL
platforms:
  - web
  - windows
  - macos
  - ios
  - android
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.pingapp.app/latest/
    note: Exodus finds AppsFlyer, Appcelerator Analytics and Firebase Analytics in the Android app, and the website loads Google, Facebook, LinkedIn and TikTok trackers.
  no_ads:
    answer: partial
    evidence: https://www.spikenow.com/privacy-policy/
    note: Funded by paid plans with no ads in the app, but the website shares visitor data with ad networks to promote Spike.
  independent_audit:
    answer: partial
    evidence: https://www.spikenow.com/security/
    note: Bishop Fox audited Spike, but no report is published and the audit is more than three years old.
  openpgp:
    answer: no
    note: PGP is not supported.
  no_cloud_relay:
    answer: no
    evidence: https://www.spikenow.com/privacy-policy/
    note: Spike servers access and store account credentials, emails and contacts to provide the service.
  remote_content_blocked:
    answer: no
    note: No documented option to block remote images or tracking pixels.
  any_provider:
    answer: yes
    evidence: https://www.spikenow.com/help/setting-up-your-spike-account/
    note: Works with Gmail, Office 365, Exchange, iCloud, Yahoo and any IMAP account.
---

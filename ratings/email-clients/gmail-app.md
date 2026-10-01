---
name: Gmail app
description: Google's email app for Android and iOS. Works with Gmail and Google Workspace accounts, and can also add Outlook, Yahoo and other IMAP accounts.
website: https://workspace.google.com/gmail/
mainstream: true
jurisdiction: US
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Exodus finds no third-party trackers, but Google collects activity data across its services and uses it for analytics and personalized ads.
  no_ads:
    answer: no
    evidence: https://support.google.com/mail/answer/6603
    note: Ads are shown in Gmail.
  independent_audit:
    answer: no
    note: No independent audit of the Gmail app is published.
  openpgp:
    answer: no
    note: Not supported. S/MIME is limited to some Google Workspace plans.
  no_cloud_relay:
    answer: partial
    evidence: https://support.google.com/mail/answer/6304825
    note: Other accounts can be added to the app, but Gmailify links Yahoo, AOL and Outlook accounts through Google servers. Gmail accounts sync with Google.
  remote_content_blocked:
    answer: partial
    evidence: https://support.google.com/mail/answer/145919
    note: Images are shown by default through Google proxies. Gmail can be set to ask before showing external images.
  any_provider:
    answer: yes
    evidence: https://support.google.com/mail/answer/6078445
    note: Works with Gmail and with other providers such as Outlook, iCloud Mail, Yahoo and IMAP accounts.
---

---
name: Google Messages
description: Google's default SMS, MMS and RCS messaging app for Android, with a paired web client. RCS chats between Google Messages users are end-to-end encrypted automatically; SMS and MMS are not.
website: https://messages.google.com
aliases:
  - RCS
mainstream: true
jurisdiction: US
platforms:
  - android
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.messaging/latest/
    note: Exodus finds no third-party trackers, but Google collects app usage and diagnostic data by default.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: The app shows no ads, but it is provided free by Google, whose privacy policy uses activity across its services to fund and personalize advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_default:
    answer: partial
    evidence: https://support.google.com/messages/answer/10262381
    note: RCS chats, including groups, are end-to-end encrypted automatically only when all participants use a supporting app; SMS and MMS are never encrypted.
  no_phone_number:
    answer: no
    note: Messages are sent and received with the phone number of the SIM, which is visible to recipients.
  metadata_protection:
    answer: no
    note: Google and carriers see who talks to whom.
  decentralized:
    answer: no
    note: RCS runs through carrier and Google servers that users cannot run themselves.
---

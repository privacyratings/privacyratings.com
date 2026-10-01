---
name: Microsoft Outlook
description: Microsoft's email and calendar app for Windows, macOS, Android, iOS and the web. Works with Outlook.com, Microsoft 365, Exchange and other IMAP accounts.
website: https://www.microsoft.com/en-us/microsoft-365/outlook
family: microsoft
aliases:
  - Outlook app
  - new Outlook for Windows
mainstream: true
jurisdiction: US
platforms:
  - windows
  - macos
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.microsoft.office.outlook/latest/
    note: Exodus finds six trackers in the Android app, including AppNexus, Facebook Ads and Singular.
  no_ads:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: The free Outlook apps show ads to users without a paid Microsoft 365 plan.
  independent_audit:
    answer: no
    note: No independent audit of the Outlook apps is published.
  openpgp:
    answer: no
    note: Not supported. S/MIME and Microsoft Purview encryption are available instead.
  no_cloud_relay:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainoutlookmodule
    note: The mobile app syncs mail from all added accounts, including third-party ones, to Microsoft servers. Desktop sync to Microsoft servers is optional.
  remote_content_blocked:
    answer: partial
    evidence: https://support.microsoft.com/en-us/outlook/block-or-unblock-automatic-picture-downloads-in-classic-outlook-email-messages
    note: Classic Outlook for Windows blocks automatic picture downloads by default. Other Outlook apps differ.
  any_provider:
    answer: yes
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainoutlookmodule
    note: Works with Microsoft accounts and accounts from third-party providers.
---

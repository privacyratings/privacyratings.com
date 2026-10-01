---
name: Outlook Calendar
description: Microsoft's calendar built into Outlook on the web, Windows, macOS, Android and iOS, used with Outlook.com and Microsoft 365 accounts. Supports shared calendars, meeting scheduling and Teams integration.
website: https://www.microsoft.com/en-us/microsoft-365/outlook/calendar-in-outlook
family: microsoft
mainstream: true
jurisdiction: US
platforms:
  - web
  - windows
  - macos
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.microsoft.office.outlook/latest/
    note: Exodus finds trackers in the Outlook Android app, including Facebook Ads, AppNexus, Singular and App Center Analytics.
  no_ads:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: The free Outlook.com version shows ads, and Microsoft uses personal data for personalized advertising.
  independent_audit:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/compliance/regulatory/offering-soc-2
    note: Microsoft 365, which hosts Outlook calendars for business accounts, is in scope of SOC 2 Type 2 audits. The full reports are only available through the Service Trust Portal after sign-in.
---

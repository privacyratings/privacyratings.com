---
name: Microsoft OneNote
description: Microsoft's note-taking app that organizes typed, handwritten and audio notes in notebooks, sections and pages, synced through OneDrive. Free with a Microsoft account and included in Microsoft 365.
website: https://www.microsoft.com/en-us/microsoft-365/onenote/digital-note-taking-app
family: microsoft
aliases:
  - OneNote
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.microsoft.office.onenote/latest/
    note: Exodus finds HockeyApp, App Center Crashes and OpenTelemetry in the Android app, and Office apps send required diagnostic data to Microsoft by default.
  no_ads:
    answer: yes
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: No ads in OneNote, and the privacy statement says personal files and documents are not used to target ads.
  independent_audit:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/compliance/regulatory/offering-soc-2
    note: OneNote is covered by independent Office 365 SOC 2 Type 2 audits, but the reports are only available to signed-in Microsoft 365 customers.
---

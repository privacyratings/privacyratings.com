---
name: Windows Clipboard History
description: Clipboard history built into Windows, opened with Windows key + V. It keeps recent copied items and pinned items, with optional sync across devices through a Microsoft account.
website: https://support.microsoft.com/en-us/windows/apps/using-the-clipboard
family: microsoft
mainstream: true
jurisdiction: US
platforms:
  - windows
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://learn.microsoft.com/en-us/windows/privacy/configure-windows-diagnostic-data-in-your-organization
    note: Required Windows diagnostic data is sent to Microsoft and can only be turned off on Enterprise, Education and Server editions.
  no_ads:
    answer: yes
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainadvertisingmodule
    note: No ads in the feature, which is included with Windows. Microsoft states it does not use personal files, photos or documents to target ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

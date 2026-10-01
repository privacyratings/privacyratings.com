---
name: Xbox Game Bar
description: Gaming overlay built into Windows for recording game clips and screenshots, with widgets for performance monitoring, audio control and Xbox social features.
website: https://apps.microsoft.com/detail/9nzkpstsnw4p
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
    note: No ads in the overlay, which is included with Windows. Microsoft states it does not use personal files, photos or documents to target ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_by_default:
    answer: yes
    evidence: https://support.microsoft.com/en-us/accessibility/windows/use-a-screen-reader-to-record-your-screen-with-xbox-game-bar
    note: Recordings and screenshots are saved to the local Captures folder under Videos.
  no_account_needed:
    answer: partial
    evidence: https://support.microsoft.com/en-us/accessibility/windows/use-a-screen-reader-to-record-your-screen-with-xbox-game-bar
    note: Recording and screenshots work without signing in. Xbox social features such as friends and chat need a Microsoft account.
---

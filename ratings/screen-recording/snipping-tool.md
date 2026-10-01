---
name: Snipping Tool
description: Microsoft's screenshot and screen recording tool built into Windows. It captures the full screen, a window or a region, with basic markup and on-device text recognition.
website: https://apps.microsoft.com/detail/9mz95kl8mr0l
family: microsoft
aliases:
  - Windows Snipping Tool
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
    note: No ads in the app, which is included with Windows. Microsoft states it does not use personal files, photos or documents to target ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_by_default:
    answer: yes
    evidence: https://support.microsoft.com/en-us/windows/apps/use-snipping-tool-to-capture-screenshots
    note: Snips are saved automatically to the local Screenshots folder.
  no_account_needed:
    answer: yes
    evidence: https://support.microsoft.com/en-us/windows/apps/use-snipping-tool-to-capture-screenshots
    note: No account is needed.
---

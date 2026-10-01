---
name: Windows Voice Typing
description: Dictation feature built into Windows 11, opened with Windows key + H, that converts speech to text in any text field using Microsoft's online speech recognition.
website: https://support.microsoft.com/en-us/accessibility/windows/use-voice-typing-to-talk-instead-of-type-on-your-pc
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
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainadvertisingmodule
    note: Windows has an advertising ID, and Microsoft uses product usage data for personalized advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  runs_locally:
    answer: no
    evidence: https://support.microsoft.com/en-us/accessibility/windows/use-voice-typing-to-talk-instead-of-type-on-your-pc
    note: Voice typing uses online speech recognition powered by Azure Speech services and needs an internet connection.
  no_training:
    answer: yes
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainspeechinkingtypingmodule
    note: Voice clips are contributed for product improvement only if the user opts in; otherwise Microsoft does not store or sample the recordings.
---

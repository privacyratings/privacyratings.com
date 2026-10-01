---
name: WinRAR
description: Trialware file archiver for Windows that creates and extracts RAR and ZIP archives and opens many other formats, with AES encryption and recovery records. Developed by Alexander Roshal and sold by win.rar GmbH.
website: https://www.win-rar.com
mainstream: true
jurisdiction: DE
platforms:
  - windows
criteria:
  open_source:
    answer: no
    evidence: https://www.win-rar.com/winrarlicense.html
    note: Closed source. The UnRAR extraction code is published separately under a restrictive license.
  no_trackers:
    answer: no
    evidence: https://www.win-rar.com/cookies.html
    note: The website uses Google Tag Manager and Google Analytics.
  no_ads:
    answer: partial
    evidence: https://www.win-rar.com/winrarlicense.html
    note: Funded by license sales. The unlicensed trial can show a reminder dialog loading a web page that may contain advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

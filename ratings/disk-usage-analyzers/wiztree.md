---
name: WizTree
description: Fast disk space analyzer for Windows and macOS from Antibody Software. On NTFS drives it reads the Master File Table directly. Free for personal use, with paid supporter and enterprise licenses.
website: https://diskanalyzer.com
mainstream: true
jurisdiction: NZ
platforms:
  - windows
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://diskanalyzer.com/privacy-policy
    note: The website loads Google Analytics, and the privacy policy says aggregate cookie and tracking data may be shared with third parties.
  no_ads:
    answer: yes
    evidence: https://diskanalyzer.com/donate
    note: Funded by optional supporter codes and paid commercial licenses. No ads in the app.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: partial
    evidence: https://diskanalyzer.com/whats-new
    note: Scans run locally. WizTree can check for updates automatically, a setting that can be turned off, and supporter codes are validated with the vendor's server.
  no_account_needed:
    answer: yes
    evidence: https://diskanalyzer.com
    note: No account needed. A supporter code is optional for personal use.
---

---
name: DaisyDisk
description: Paid disk space analyzer for macOS from Software Ambience Corp. It shows disks as an interactive sunburst chart, can scan Google Drive, Dropbox, OneDrive and Box, and collects files for deletion.
website: https://daisydiskapp.com
mainstream: true
jurisdiction: UA
platforms:
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://daisydiskapp.com/privacy
    note: The privacy policy states that the website uses Google Analytics and remarketing cookies shared with Facebook, X and Google. It says the app itself does not send scan data.
  no_ads:
    answer: partial
    evidence: https://daisydiskapp.com/privacy
    note: Funded by license sales, with no ads in the app. The website shares visitor IDs with Facebook, X and Google to retarget its own ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: partial
    evidence: https://daisydiskapp.com/privacy
    note: File names and sizes stay on the computer. The app contacts the vendor's server to activate the trial or license with an email address and a hardware ID.
  no_account_needed:
    answer: no
    evidence: https://daisydiskapp.com/privacy
    note: The trial and the license are registered to an email address in the vendor's database. The Mac App Store version uses an Apple ID instead.
---

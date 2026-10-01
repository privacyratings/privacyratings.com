---
name: SquirrelDisk
description: Disk usage analyzer for macOS, Windows and Linux written in Rust, with a sunburst or treemap view, cleanup tools and optional scanning of servers over SSH and cloud storage through rclone. The free app shows a sponsor banner.
website: https://www.squirreldisk.com
source: https://github.com/adileo/squirreldisk
platforms:
  - macos
  - windows
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/adileo/squirreldisk/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: no
    evidence: https://www.squirreldisk.com/privacy
    note: No third-party analytics, but the app downloads the sponsor list at every launch, and the vendor uses that request to count launches and daily users by country, city and app version. This cannot be turned off. Daily sponsor view totals are also sent unless turned off in Settings.
  no_ads:
    answer: no
    evidence: https://github.com/adileo/squirreldisk/blob/main/src/sponsor/mod.rs
    note: Funded by a sponsor banner in the app. By default the banner is chosen from interests the app infers from folder names and sizes after a scan. The matching happens on the device and can be turned off in Settings.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: partial
    evidence: https://github.com/adileo/squirreldisk/blob/main/src/sponsor/wire.rs
    note: Scans run locally and file names are not uploaded. The app fetches the sponsor list at launch and checks GitHub for updates by default. The update check can be turned off; the sponsor list request cannot.
  no_account_needed:
    answer: yes
    evidence: https://www.squirreldisk.com/privacy
    note: No account or sign-in. Scanning cloud storage uses the user's own rclone or SSH setup.
---

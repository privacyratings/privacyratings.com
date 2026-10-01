---
name: rclone
description: Command-line program to sync, copy and mount files on more than 70 cloud storage services, with optional client-side encryption through its crypt backend.
website: https://rclone.org
source: https://github.com/rclone/rclone
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/rclone/rclone/blob/master/COPYING
    note: MIT.
  no_trackers:
    answer: no
    evidence: https://rclone.org/privacy/
    note: The rclone program sends no data, but the website privacy policy describes Google Analytics and referral-tracking cookies.
  no_ads:
    answer: partial
    evidence: https://rclone.org/sponsor/
    note: Funded by donations and sponsors. The website shows sponsor placements that are not based on user data.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

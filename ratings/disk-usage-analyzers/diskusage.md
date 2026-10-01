---
name: DiskUsage
description: Android app that shows internal and external storage as a zoomable map of folders sized by the space they use.
website: https://f-droid.org/packages/com.google.android.diskusage/
source: https://github.com/IvanVolosyuk/diskusage
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/IvanVolosyuk/diskusage/blob/master/COPYING.txt
    note: GPL-2.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://f-droid.org/packages/com.google.android.diskusage/
    note: Built and signed by F-Droid, with no tracking libraries and no internet permission.
  no_ads:
    answer: yes
    evidence: https://github.com/IvanVolosyuk/diskusage
    note: Free volunteer project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://f-droid.org/packages/com.google.android.diskusage/
    note: The app does not request the internet permission.
  no_account_needed:
    answer: yes
    evidence: https://f-droid.org/packages/com.google.android.diskusage/
    note: No account needed.
---

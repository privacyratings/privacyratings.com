---
name: TrackerControl
description: Android app that monitors and blocks tracking connections made by other apps, using a local VPN that needs no root.
website: https://trackercontrol.org
source: https://github.com/TrackerControl/tracker-control-android
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/TrackerControl/tracker-control-android/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/TrackerControl/tracker-control-android/blob/master/README.md
    note: The only library Exodus flags is ACRA, which only shows a dialog for sending crash reports by email.
  no_ads:
    answer: yes
    evidence: https://github.com/TrackerControl/tracker-control-android/blob/master/README.md
    note: Free open-source app with no ads; the README states personal data does not leave the device.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

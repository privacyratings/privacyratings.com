---
name: Fennec F-Droid
description: Build of Firefox for Android published by F-Droid, with proprietary components and telemetry removed. It still connects to some Mozilla services.
website: https://f-droid.org/packages/org.mozilla.fennec_fdroid/
source: https://gitlab.com/relan/fennecbuild
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/relan/fennecbuild/-/blob/master/COPYING
    note: Build scripts are AGPL-3.0, and Firefox code is MPL-2.0.
  no_trackers:
    answer: partial
    evidence: https://f-droid.org/packages/org.mozilla.fennec_fdroid/
    note: Telemetry is removed, but F-Droid flags the app for connecting to Mozilla services that can track users.
  no_ads:
    answer: yes
    evidence: https://gitlab.com/relan/fennecbuild/-/blob/master/fenix-liberate.patch
    note: Sponsored shortcuts and sponsored stories are disabled in the build. Volunteer project.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: partial
    evidence: https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-android
    note: Uses Firefox Enhanced Tracking Protection in Standard mode, which blocks social trackers and cross-site cookies but not all tracking content.
  fingerprinting_protection:
    answer: partial
    evidence: https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting
    note: Known fingerprinters are blocked, but fingerprinting data is only altered in Strict mode or private tabs.
  no_google_services:
    answer: partial
    evidence: https://f-droid.org/packages/org.mozilla.fennec_fdroid/
    note: Google Play components are removed, but Firefox's Google Safe Browsing lists and some Mozilla services remain.
  security_updates:
    answer: partial
    evidence: https://f-droid.org/packages/org.mozilla.fennec_fdroid/
    note: New Firefox versions usually reach F-Droid within about a week and are installed through an F-Droid client.
---

---
name: Basilisk Browser
description: Desktop browser built on the Unified XUL Platform (UXP) and Goanna engine, a fork of Mozilla's older code base. Keeps support for NPAPI plugins and XUL extensions.
website: https://www.basilisk-browser.org
imported_from: awesome-privacy
source: https://repo.palemoon.org/Basilisk-Dev/Basilisk
criteria:
  open_source:
    answer: yes
    evidence: https://repo.palemoon.org/Basilisk-Dev/Basilisk/src/branch/master/LICENSE.md
    note: MPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://www.basilisk-browser.org/privacy.html
    note: No analytics or telemetry are collected. The only default third-party service is IP-based geolocation when a site requests it.
  no_ads:
    answer: yes
    evidence: https://www.basilisk-browser.org/privacy.html
    note: No ads and no data sales. Funded by donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: no
    note: No built-in tracker blocking. Requires add-ons.
  fingerprinting_protection:
    answer: no
    evidence: https://www.basilisk-browser.org/privacy.html
    note: Not configured to resist fingerprinting out of the box.
  no_google_services:
    answer: yes
    evidence: https://www.basilisk-browser.org/privacy.html
    note: The listed default third-party services do not include Google, Microsoft or Apple.
  security_updates:
    answer: no
    evidence: https://www.basilisk-browser.org/releasenotes.html
    note: Releases come roughly monthly on the forked UXP platform, with Mozilla security fixes ported selectively, so fixes can lag weeks.
---

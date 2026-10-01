---
name: Helium
description: Chromium-based desktop browser from imput built on ungoogled-chromium, with uBlock Origin built in, Google services removed and no telemetry.
website: https://helium.computer
source: https://github.com/imputnet/helium
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/imputnet/helium/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://helium.computer/
    note: The browser collects no data, but the website uses Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://helium.computer/
    note: Crowdfunded by users. No browser ads and no data collection.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://helium.computer/
    note: Blocks ads, trackers, cookie banners and third-party cookies by default.
  fingerprinting_protection:
    answer: yes
    evidence: https://helium.computer/
    note: Adds noise to certain web APIs by default to resist fingerprinting.
  no_google_services:
    answer: yes
    evidence: https://helium.computer/
    note: All Google service dependencies are removed, and no background requests are made without consent.
  security_updates:
    answer: yes
    evidence: https://helium.computer/
    note: Releases follow Chromium stable updates within days and install automatically on macOS and Windows.
---

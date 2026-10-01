---
name: Ungoogled Chromium
description: >-
  Chromium with all Google web services, background requests and Google-specific code removed, while keeping the familiar Chromium experience.
website: https://github.com/ungoogled-software/ungoogled-chromium
source: https://github.com/ungoogled-software/ungoogled-chromium
license: BSD-3-Clause
platforms: [windows, macos, linux]
pick: 2
pick_reason: >-
  The speed and site compatibility of Chromium without the constant connections to Google. Pair it with uBlock Origin for tracker blocking.
caveat: >-
  There are no built-in automatic updates. Install it from a package manager that updates it (for example Homebrew, Flathub or a Linux distribution) so security fixes arrive quickly. Anti-fingerprinting switches exist but are off by default.
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ungoogled-software/ungoogled-chromium/blob/master/LICENSE
  no_trackers:
    answer: yes
    evidence: https://github.com/ungoogled-software/ungoogled-chromium#readme
    note: Removes all background requests to web services while building and running the browser.
  no_ads:
    answer: yes
    evidence: https://github.com/ungoogled-software/ungoogled-chromium
    note: Community project with no ads or commercial funding.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_google_services:
    answer: yes
    evidence: https://github.com/ungoogled-software/ungoogled-chromium#readme
  tracker_blocking:
    answer: no
    note: No built-in blocker. Install uBlock Origin or uBlock Origin Lite.
  fingerprinting_protection:
    answer: partial
    evidence: https://github.com/ungoogled-software/ungoogled-chromium/blob/master/docs/flags.md
    note: Canvas and client-rect noise flags exist but are off by default.
  security_updates:
    answer: partial
    evidence: https://ungoogled-software.github.io/ungoogled-chromium-binaries/
    note: No built-in auto-update. Builds come from package managers and community packagers.
---

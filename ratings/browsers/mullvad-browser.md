---
name: Mullvad Browser
description: Firefox-based browser developed by the Tor Project and Mullvad for use without the Tor network. Uses Tor Browser's anti-fingerprinting defenses, has no telemetry and includes uBlock Origin.
website: https://mullvad.net/en/browser
source: https://github.com/mullvad/mullvad-browser
criteria:
  open_source:
    answer: yes
    evidence: https://mullvad.net/en/browser
    note: MPL-2.0, built by the Tor Project on Firefox ESR.
  no_trackers:
    answer: yes
    evidence: https://mullvad.net/en/browser
    note: Telemetry is removed.
  no_ads:
    answer: yes
    evidence: https://mullvad.net/en/browser
    note: Free of charge, with no ads, whether or not the user has a Mullvad VPN account.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://mullvad.net/en/browser/hard-facts
    note: uBlock Origin is included and enabled by default.
  fingerprinting_protection:
    answer: yes
    evidence: https://mullvad.net/en/browser/hard-facts
    note: Resist Fingerprinting and letterboxing are enabled by default so users look alike.
  no_google_services:
    answer: yes
    evidence: https://mullvad.net/en/browser/hard-facts
    note: The listed default connections go to Mullvad, Mozilla, and filter list and certificate providers, not Google, Microsoft or Apple services.
  security_updates:
    answer: yes
    evidence: https://mullvad.net/en/browser/hard-facts
    note: Releases follow Firefox ESR security updates alongside Tor Browser, and the built-in updater installs them.
imported_from: awesome-privacy
jurisdiction: SE
pick: 1
pick_reason: "Tor Browser's protections without the Tor network: fingerprinting resistance that makes every user look alike, uBlock Origin built in, no telemetry, and fast security updates. Built by the Tor Project and Mullvad, free, and works with any VPN."
---

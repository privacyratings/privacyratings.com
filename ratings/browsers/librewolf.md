---
name: LibreWolf
description: Independent fork of Firefox with telemetry removed, uBlock Origin included and Resist Fingerprinting enabled by default.
website: https://librewolf.net
source: https://codeberg.org/librewolf/source
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/librewolf/source/src/branch/main/LICENSE
    note: MPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://librewolf.net/docs/features/
    note: Telemetry, crash reports, studies and experiments are disabled.
  no_ads:
    answer: yes
    evidence: https://librewolf.net/docs/faq/#why-dont-you-accept-donations
    note: Volunteer project with no ads. It does not accept donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://librewolf.net/docs/features/
    note: Ships uBlock Origin and Enhanced Tracking Protection in Strict mode.
  fingerprinting_protection:
    answer: yes
    evidence: https://librewolf.net/docs/features/
    note: Resist Fingerprinting is enabled by default.
  no_google_services:
    answer: yes
    evidence: https://librewolf.net/docs/faq/#why-do-you-disable-google-safe-browsing
    note: Google Safe Browsing is disabled, and the remaining outgoing connections are for updates and block lists.
  security_updates:
    answer: partial
    evidence: https://librewolf.net/docs/faq/#how-often-do-you-update-librewolf
    note: Releases usually follow Firefox within three days, but there is no built-in auto-update.
imported_from: awesome-privacy
---

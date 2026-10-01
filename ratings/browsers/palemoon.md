---
name: PaleMoon
description: Independent desktop browser built on the Unified XUL Platform (UXP) and Goanna engine, forked from older Mozilla code. Collects no telemetry and supports legacy XUL extensions.
website: https://www.palemoon.org
imported_from: awesome-privacy
source: https://repo.palemoon.org/MoonchildProductions/Pale-Moon
criteria:
  open_source:
    answer: yes
    evidence: https://repo.palemoon.org/MoonchildProductions/Pale-Moon/src/branch/master/LICENSE
    note: Source under MPL-2.0 and other Mozilla licenses. Official branding and binaries carry a redistribution license.
  no_trackers:
    answer: yes
    evidence: https://www.palemoon.org/policies/privacy.shtml
    note: No telemetry on browser or extension use, and no tracking.
  no_ads:
    answer: yes
    evidence: https://www.palemoon.org/donations.shtml
    note: No ads in the browser. Supported by donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: no
    note: No built-in tracker blocking. Requires extensions.
  fingerprinting_protection:
    answer: no
    note: No fingerprinting protection is enabled by default.
  no_google_services:
    answer: yes
    evidence: https://www.palemoon.org/policies/privacy.shtml
    note: Default connections go to Pale Moon servers, IP-API geolocation and the chosen search engine, not to Google, Microsoft or Apple.
  security_updates:
    answer: no
    evidence: https://www.palemoon.org/releasenotes-archived.shtml
    note: Mozilla security fixes are ported selectively to its own platform in releases every few weeks to months.
---

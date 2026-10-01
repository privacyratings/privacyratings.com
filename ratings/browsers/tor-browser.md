---
name: Tor Browser
description: Firefox-based browser that routes traffic through the Tor network to hide the user's IP address and location. Isolates each site and makes users look alike to resist tracking and fingerprinting.
website: https://www.torproject.org
source: https://gitlab.torproject.org/tpo/applications/tor-browser
criteria:
  open_source:
    answer: yes
    evidence: https://www.torproject.org/about/history/
    note: MPL-2.0, built on Firefox ESR. Source releases are published at dist.torproject.org. The Tor GitLab now requires sign-in to view files.
  no_trackers:
    answer: yes
    evidence: https://www.torproject.org/about/privacy_policy/
    note: No tracking, telemetry or analytics.
  no_ads:
    answer: yes
    evidence: https://donate.torproject.org/
    note: Nonprofit funded by donations and grants. No ads.
  independent_audit:
    answer: yes
    evidence: https://www.torproject.org/static/findoc/code_audits/Cure53_audit_jan_2024.pdf
    note: Cure53 audited changes in Tor Browser for desktop and Android, with the full report published.
  tracker_blocking:
    answer: partial
    evidence: https://www.torproject.org/
    note: Isolates each site so third-party trackers cannot follow users across sites, but does not block tracker requests.
  fingerprinting_protection:
    answer: yes
    evidence: https://support.torproject.org/tor-browser/features/fingerprinting-protections/
    note: Standardizes fingerprinting data by default so users look alike.
  no_google_services:
    answer: yes
    evidence: https://www.torproject.org/about/privacy_policy/
    note: No background connections to Google, Microsoft or Apple services. Traffic goes through the Tor network.
  security_updates:
    answer: yes
    evidence: https://support.torproject.org/tor-browser/getting-started/updating/
    note: Releases follow Firefox ESR security updates and can install automatically.
imported_from: awesome-privacy
jurisdiction: US
---

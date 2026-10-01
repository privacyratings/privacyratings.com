---
name: IronFox
description: Firefox-based browser for Android, a fork of Mull, with telemetry removed, uBlock Origin preinstalled, Strict tracking protection and hardened privacy settings.
website: https://ironfoxoss.org
source: https://gitlab.com/ironfox-oss/IronFox
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/ironfox-oss/IronFox/src/branch/dev/COPYING
    note: Build scripts are AGPL-3.0, and patches are MPL-2.0 or Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://ironfoxoss.org/docs/features/
    note: Telemetry and data collection are disabled at build time, and tracking libraries such as Adjust and Sentry are removed.
  no_ads:
    answer: yes
    evidence: https://ironfoxoss.org/
    note: Volunteer project. It does not collect, store or sell user data and has no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://ironfoxoss.org/docs/features/
    note: Ships uBlock Origin and enables Strict Enhanced Tracking Protection by default.
  fingerprinting_protection:
    answer: yes
    evidence: https://ironfoxoss.org/docs/features/
    note: Enables Firefox's fingerprinting protection by default, which alters fingerprinting data.
  no_google_services:
    answer: partial
    evidence: https://ironfoxoss.org/docs/safe-browsing/
    note: Google Safe Browsing is on by default through a privacy proxy and can be turned off in settings. Google Play Services are not required.
  security_updates:
    answer: yes
    evidence: https://ironfoxoss.org/releases/
    note: Releases follow each Firefox release, and Accrescent installs updates automatically.
---

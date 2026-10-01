---
name: Authenticator GNOME
description: Open source two-factor code generator for the GNOME desktop, written in Rust. It supports TOTP, HOTP and Steam codes, a GNOME Shell search provider and backups to and from other authenticator apps.
website: https://apps.gnome.org/Authenticator/
source: https://gitlab.gnome.org/World/Authenticator
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.gnome.org/World/Authenticator/-/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://gitlab.gnome.org/World/Authenticator
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://apps.gnome.org/Authenticator/
    note: Free volunteer project with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---

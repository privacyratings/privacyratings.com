---
name: Kleopatra
description: KDE certificate manager and graphical front end for GnuPG. Manages OpenPGP and X.509 certificates, encrypts, decrypts, signs and verifies files, and retrieves certificates from LDAP servers.
website: https://apps.kde.org/kleopatra/
source: https://invent.kde.org/pim/kleopatra
criteria:
  open_source:
    answer: yes
    evidence: https://invent.kde.org/pim/kleopatra/-/tree/master/LICENSES
    note: GPL-2.0 or later.
  no_trackers:
    answer: partial
    evidence: https://kde.org/privacypolicy/
    note: No third-party trackers; the KDE websites use self-hosted Matomo that honors Do Not Track, and the app has no telemetry.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: Developed by the KDE community, funded by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
jurisdiction: DE
---

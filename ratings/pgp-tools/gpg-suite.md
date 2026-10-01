---
name: GPG Suite
description: GnuPG distribution for macOS with key management, Finder and system service integration, and GPG Mail, an OpenPGP plugin for Apple Mail that requires a paid support plan.
website: https://gpgtools.org
source: https://github.com/GPGTools/GPGTools_Installer
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/GPGTools/GPGTools_Installer/blob/dev/LICENSE.txt
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://gpgtools.org/privacy
    note: No third-party trackers; the website uses self-hosted Matomo and the updater contacts the vendor. Crash reports are opt-in.
  no_ads:
    answer: yes
    evidence: https://gpgtools.org/faq
    note: Funded by paid GPG Mail support plans sold through Paddle. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: AT
---

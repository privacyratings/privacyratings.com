---
name: IceCat
description: GNU's build of Firefox ESR containing only free software. Removes non-free components such as DRM and bundles LibreJS and JShelter to restrict JavaScript and fingerprinting.
website: https://www.gnu.org/software/gnuzilla/
imported_from: awesome-privacy
source: https://cgit.git.savannah.gnu.org/cgit/gnuzilla.git
criteria:
  open_source:
    answer: yes
    evidence: https://cgit.git.savannah.gnu.org/cgit/gnuzilla.git/tree/COPYING
    note: Build scripts under GPL-3.0; the browser code is MPL-2.0 from Firefox.
  no_trackers:
    answer: yes
    evidence: https://cgit.git.savannah.gnu.org/cgit/gnuzilla.git/tree/data/settings.js
    note: Telemetry and health reports are disabled in the default settings.
  no_ads:
    answer: yes
    evidence: https://www.gnu.org/software/gnuzilla/
    note: GNU volunteer project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://cgit.git.savannah.gnu.org/cgit/gnuzilla.git/tree/data/settings.js
    note: Tracking protection is enabled for all windows by default.
  fingerprinting_protection:
    answer: yes
    evidence: https://cgit.git.savannah.gnu.org/cgit/gnuzilla.git/tree/data/settings.js
    note: Resist Fingerprinting is enabled by default, and JShelter is bundled.
  no_google_services:
    answer: yes
    evidence: https://cgit.git.savannah.gnu.org/cgit/gnuzilla.git/tree/data/settings.js
    note: Google Safe Browsing and its update URLs are disabled.
  security_updates:
    answer: partial
    evidence: https://www.gnu.org/software/gnuzilla/
    note: Source updates follow Firefox ESR releases within days, but no official binaries are published, so updates come through GNU Guix or distribution packages.
---

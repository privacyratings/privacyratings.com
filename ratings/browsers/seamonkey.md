---
name: SeaMonkey
description: Internet suite with a browser, mail and news client, IRC chat and HTML editor, continuing the Mozilla Application Suite. Built on an older Mozilla platform with backported fixes.
website: https://www.seamonkey-project.org
imported_from: awesome-privacy
source: https://gitlab.com/seamonkey-project/seamonkey-2.53-comm
jurisdiction: DE
criteria:
  open_source:
    answer: yes
    evidence: https://www.seamonkey-project.org/legal/
    note: MPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://www.seamonkey-project.org/legal/privacy
    note: No analytics. Crash reports are only sent when the user chooses to.
  no_ads:
    answer: yes
    evidence: https://www.seamonkey-project.org/donate/
    note: No ads. Supported by donations to the SeaMonkey association.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: no
    note: Third-party trackers are not blocked by default.
  fingerprinting_protection:
    answer: no
    note: No fingerprinting protection is enabled by default.
  no_google_services:
    answer: partial
    evidence: https://www.seamonkey-project.org/legal/third-party
    note: Uses Google Geolocation when a site requests location, which can be turned off.
  security_updates:
    answer: no
    evidence: https://www.seamonkey-project.org/releases/
    note: Releases on the older 2.53 platform come every few months with backported fixes, so security fixes lag upstream by weeks or more.
---

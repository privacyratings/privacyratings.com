---
name: Password Safe
description: Open source password manager originally designed by Bruce Schneier that keeps passwords in a Twofish-encrypted local database. Official builds exist for Windows and Linux, with YubiKey support and compatible third-party apps for macOS, Android and iOS.
website: https://www.pwsafe.org
imported_from: awesome-privacy
source: https://github.com/pwsafe/pwsafe
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/pwsafe/pwsafe/blob/master/LICENSE
    note: Artistic License 2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/pwsafe/pwsafe
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://www.pwsafe.org/
    note: Volunteer project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_vault:
    answer: yes
    evidence: https://github.com/pwsafe/pwsafe/blob/master/docs/formatV3.txt
    note: "Local-only: the database is encrypted with Twofish using a key derived from the master password."
  self_host_or_local:
    answer: yes
    evidence: https://github.com/pwsafe/pwsafe/blob/master/docs/formatV3.txt
    note: The database is a local file.
  export:
    answer: yes
    evidence: https://github.com/pwsafe/pwsafe/blob/master/help/default/html/export.html
    note: Exports to XML and plain text.
---

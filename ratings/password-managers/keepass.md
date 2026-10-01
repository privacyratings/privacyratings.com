---
name: KeePass
description: Offline, open source password manager for Windows that stores passwords in an encrypted local database file. It has no built-in cloud sync, and community ports exist for other platforms.
website: https://keepass.info
source: https://sourceforge.net/projects/keepass
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://keepass.info/help/v2/license.html
    note: GPL-2.0 or later.
  no_trackers:
    answer: no
    evidence: https://keepass.info/
    note: The app has no telemetry, but the website loads Google AdSense.
  no_ads:
    answer: no
    evidence: https://keepass.info/
    note: The app has no ads, but the website shows Google AdSense ads alongside donation requests.
  independent_audit:
    answer: partial
    evidence: https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/DLV%20WP6%20-01-%20KeePass%20Code%20Review%20Results%20Report_published.pdf
    note: A full code review by the European Commission EU-FOSSA project is public but older than three years.
  e2ee_vault:
    answer: yes
    evidence: https://keepass.info/help/base/security.html
    note: "Local-only: the whole database is encrypted with AES-256 or ChaCha20 using a key derived from the master key."
  self_host_or_local:
    answer: yes
    evidence: https://keepass.info/help/base/security.html
    note: The database is a local file.
  export:
    answer: yes
    evidence: https://keepass.info/help/base/importexport.html
    note: Exports to KeePass XML, which includes all fields, and CSV.
---

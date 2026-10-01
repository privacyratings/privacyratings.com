---
name: LessPass
description: Stateless password manager that derives each site's password from the site name, login and a master password, so no vault is stored or synced. The hosted profile server is closed to new users, who can self-host one.
website: https://lesspass.com
source: https://github.com/lesspass/lesspass
domain: lesspass.com
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/lesspass/lesspass/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.lesspass.android/latest/
    note: Exodus finds no trackers in the Android app, and the website loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/lesspass
    note: Funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee_vault:
    answer: yes
    evidence: https://github.com/lesspass/lesspass#readme
    note: "No vault exists: passwords are generated on the device and never stored or synced."
  self_host_or_local:
    answer: yes
    evidence: https://github.com/lesspass/lesspass#readme
    note: Works without a server, and the optional profile server can be self-hosted.
  export:
    answer: n/a
    note: Passwords are derived on demand and never stored, so there is no vault to export.
---

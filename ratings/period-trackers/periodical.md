---
name: Periodical
description: Open source Android period calendar that estimates fertile days with the calendar method, with notes, symptoms and local backup.
website: https://arnowelzel.de/en/projects/periodical
source: https://codeberg.org/askaaron/periodical
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/askaaron/periodical/src/branch/main/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://reports.exodus-privacy.eu.org/en/reports/de.arnowelzel.android.periodical/latest/
    note: The Exodus report finds no trackers and the app has no internet permission, but the project website uses self-hosted Matomo analytics.
  no_ads:
    answer: yes
    evidence: https://arnowelzel.de/en/projects/periodical
    note: Free software with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_storage:
    answer: yes
    evidence: https://arnowelzel.de/en/projects/periodical
    note: Data is stored only on the device, with optional backups to local storage.
  no_account_needed:
    answer: yes
    evidence: https://arnowelzel.de/en/projects/periodical
    note: No account needed.
---

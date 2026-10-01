---
name: App Manager
description: Open source Android package manager that shows app components, permissions, trackers and signatures, and can block trackers, freeze apps and change permissions, with more control on rooted devices or through ADB.
website: https://muntashir.dev/AppManager/
source: https://github.com/MuntashirAkon/AppManager
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/MuntashirAkon/AppManager/blob/master/COPYING
    note: GPL-3.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/io.github.muntashirakon.AppManager/latest/
    note: The Exodus report finds no trackers, and the website uses only a language-preference cookie.
  no_ads:
    answer: yes
    evidence: https://github.com/MuntashirAkon/AppManager
    note: Free volunteer project distributed through F-Droid and GitHub, with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

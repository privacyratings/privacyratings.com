---
name: GNOME Web
description: Web browser for the GNOME desktop, also called Epiphany, built on WebKitGTK, with ad blocking and Intelligent Tracking Prevention on by default.
website: https://apps.gnome.org/Epiphany/
aliases:
  - Epiphany
source: https://gitlab.gnome.org/GNOME/epiphany
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/GNOME/epiphany/blob/main/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/GNOME/epiphany
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://donate.gnome.org/en/
    note: Developed by the GNOME community and funded by donations to the GNOME Foundation. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://github.com/GNOME/epiphany/blob/main/data/org.gnome.epiphany.gschema.xml
    note: The ad blocker with uBlock Origin filter lists and Intelligent Tracking Prevention are on by default.
  fingerprinting_protection:
    answer: no
    note: No fingerprinting protection is documented.
  no_google_services:
    answer: partial
    evidence: https://github.com/GNOME/epiphany/blob/main/data/org.gnome.epiphany.gschema.xml
    note: There is no Google Safe Browsing, but the default filter lists are downloaded from GitHub, which is owned by Microsoft. Turning off the ad blocker stops these downloads.
  security_updates:
    answer: partial
    evidence: https://webkitgtk.org/security.html
    note: WebKitGTK publishes security fixes regularly, and they are installed through the distribution's package manager or Flatpak.
---

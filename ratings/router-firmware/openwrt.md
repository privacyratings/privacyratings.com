---
name: OpenWrt
description: Linux distribution for routers and embedded network devices, with a writable file system, a package manager with thousands of add-on packages, and a web interface.
website: https://openwrt.org
source: https://github.com/openwrt/openwrt
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/openwrt/openwrt/blob/main/COPYING
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://openwrt.org/privacy
    note: The firmware has no telemetry, and the privacy policy states the website does no user tracking and sends no personal data to third parties.
  no_ads:
    answer: yes
    evidence: https://openwrt.org/donate
    note: Volunteer project funded by donations, with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_name: OpenWRT
---

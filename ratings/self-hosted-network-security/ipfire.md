---
name: IPFire
description: Linux-based firewall distribution for routers and gateways, with a web interface, intrusion prevention, VPN support and add-on packages.
website: https://www.ipfire.org
source: https://git.ipfire.org/?p=ipfire-2.x.git;a=summary
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://git.ipfire.org/?p=ipfire-2.x.git;a=blob;f=doc/COPYING;hb=HEAD
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://git.ipfire.org/?p=ipfire-2.x.git;a=blob;f=html/cgi-bin/fireinfo.cgi;hb=HEAD
    note: The fireinfo hardware statistics service is off until the user enables it, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://www.ipfire.org/about
    note: Funded by donations and Lightning Wire Labs hardware sales, with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: DE
---

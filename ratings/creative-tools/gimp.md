---
name: Gimp
description: A free, open source, cross-platform raster image editor for photo retouching, image composition and image authoring, with support for many file formats.
website: https://www.gimp.org
source: https://github.com/GNOME/gimp
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/GNOME/gimp/blob/master/COPYING
    note: GPL-3.0.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: yes
    evidence: https://github.com/GNOME/gimp
    note: No telemetry or analytics in the source code. The update check can be turned off and only downloads a version list from gimp.org.
  no_ads:
    answer: yes
    evidence: https://www.gimp.org/donating/
    note: Funded by donations, with no ads.
imported_from: awesome-privacy
---

---
name: ImageMagick
description: A command-line suite and set of libraries for creating, editing, converting and composing raster and vector images in over 200 formats.
website: https://imagemagick.org
source: https://github.com/ImageMagick/ImageMagick
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://imagemagick.org/license/
    note: All code is public under the ImageMagick License, an Apache-2.0-derived source-available license that is not OSI-approved.
  no_trackers:
    answer: no
    note: The website loads Google AdSense.
  no_ads:
    answer: no
    evidence: https://imagemagick.org/support/
    note: The website shows Google AdSense ads, alongside sponsorships and donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

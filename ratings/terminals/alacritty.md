---
name: Alacritty
description: Cross-platform, GPU-accelerated terminal emulator configured through a TOML file, with a vi mode, regex search and hints for opening URLs.
website: https://alacritty.org
source: https://github.com/alacritty/alacritty
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/alacritty/alacritty/blob/master/LICENSE-APACHE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/alacritty/alacritty
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/alacritty/alacritty/blob/master/LICENSE-APACHE
    note: Free software under the Apache-2.0 and MIT licenses, with no ads or paid features.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---

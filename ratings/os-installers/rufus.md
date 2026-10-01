---
name: Rufus
description: A Windows utility that formats USB drives and writes bootable USB media from ISO and disk images, and can download Windows ISOs.
website: https://rufus.ie
source: https://github.com/pbatard/rufus
platforms:
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/pbatard/rufus/blob/master/LICENSE.txt
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://github.com/pbatard/rufus/wiki/FAQ#Rufus_connects_to_the_internet_but_I_never_allowed_it_to__why
    note: The rufus.ie website loads Google Analytics and Google AdSense. The app's update check asks first, unless the executable is named rufus.exe, and can be turned off.
  no_ads:
    answer: no
    evidence: https://github.com/pbatard/rufus/wiki/FAQ#I_have_seen_some_deceptive_ads_on_your_website_How_dare_you
    note: The rufus.ie website shows Google AdSense ads. The app itself has no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

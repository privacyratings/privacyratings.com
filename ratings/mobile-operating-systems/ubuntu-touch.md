---
name: Ubuntu Touch
description: Mobile operating system for phones and tablets developed by the UBports community, using the Lomiri interface and running on devices originally shipped with Android.
website: https://ubports.com
source: https://gitlab.com/ubports
jurisdiction: DE
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/ubports/development/core/lomiri/-/blob/main/COPYING
    note: Mostly GPL-3.0 and LGPL; device support relies on proprietary Android vendor drivers.
  no_trackers:
    answer: partial
    evidence: https://ubports.com/
    note: No telemetry in the system; the website uses Matomo analytics, self-hosted and also sent to the Matomo instance of its web host Onestein.
  no_ads:
    answer: yes
    evidence: https://ubports.com/donate
    note: Developed by the non-profit UBports Foundation and funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

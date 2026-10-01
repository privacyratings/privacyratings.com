---
name: Baresip
description: Portable, modular SIP client with audio and video calling, mainly used from the command line. It supports SRTP, ZRTP and many audio and video codecs.
website: https://github.com/baresip/baresip
source: https://github.com/baresip/baresip
platforms:
  - linux
  - macos
  - windows
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/baresip/baresip/blob/main/LICENSE
    note: Open source under the BSD-3-Clause license.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.tutpro.baresip/latest/
    note: No telemetry or analytics in the source code, and the Android build has no known trackers on Exodus.
  no_ads:
    answer: yes
    evidence: https://github.com/baresip/baresip
    note: Free open-source project maintained by volunteers. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

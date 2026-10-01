---
name: PrivateBin
description: Open source, self-hosted pastebin that encrypts text and files in the browser with AES-256-GCM, so the server never sees the content. Supports expiry, burn after reading, passwords and discussions.
website: https://privatebin.info
source: https://github.com/PrivateBin/PrivateBin
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/PrivateBin/PrivateBin/blob/master/LICENSE.md
    note: Zlib license, with bundled libraries under other OSI licenses.
  no_trackers:
    answer: yes
    evidence: https://github.com/PrivateBin/PrivateBin
    note: No telemetry or analytics in the source code, and the project website loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://github.com/PrivateBin/PrivateBin
    note: Free volunteer project with no ads or paid tiers.
  independent_audit:
    answer: partial
    evidence: https://defuse.ca/audits/zerobin.htm
    note: A full audit by Taylor Hornby covers ZeroBin, the project PrivateBin forked from, and is older than three years.
---

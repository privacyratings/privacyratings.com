---
name: UUP dump
description: A website and set of scripts that fetch Windows update files (UUP) from Microsoft's servers and convert them into Windows installation ISO images.
website: https://uupdump.net
source: https://git.uupdump.net/uup-dump
platforms:
  - web
  - windows
  - linux
  - macos
criteria:
  open_source:
    answer: partial
    evidence: https://git.uupdump.net/uup-dump/api/src/branch/master/LICENSE
    note: The API (Apache-2.0) and converter scripts (MIT) are public. The source of the uupdump.net website itself is not public.
  no_trackers:
    answer: yes
    evidence: https://uupdump.net/
    note: The website loads only self-hosted scripts, with no third-party analytics or trackers.
  no_ads:
    answer: yes
    evidence: https://uupdump.net/
    note: Free website and scripts with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

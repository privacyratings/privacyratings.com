---
name: MuPDF
description: PDF, XPS and e-book rendering library from Artifex, with a lightweight viewer, command-line tools and bindings for Python, JavaScript and .NET.
website: https://mupdf.com
source: https://github.com/ArtifexSoftware/mupdf
jurisdiction: US
platforms:
  - windows
  - linux
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ArtifexSoftware/mupdf/blob/master/COPYING
    note: AGPL-3.0, with a commercial license available from Artifex.
  no_trackers:
    answer: no
    evidence: https://mupdf.com/privacy
    note: The Android viewer has no known trackers, but the website uses Google Analytics and Microsoft Clarity.
  no_ads:
    answer: yes
    evidence: https://artifex.com/licensing
    note: Funded by commercial licenses, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

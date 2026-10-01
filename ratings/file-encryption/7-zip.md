---
name: 7-Zip
description: Open source file archiver with its own 7z format that can encrypt 7z and ZIP archives with AES-256, including file names in 7z archives. The full graphical app is for Windows, with a command-line version for Linux and macOS.
website: https://www.7-zip.org
source: https://github.com/ip7z/7zip
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://www.7-zip.org/license.txt
    note: Mostly LGPL-2.1 with some BSD-licensed code. The optional RAR decompression code carries an extra unRAR license restriction.
  no_trackers:
    answer: yes
    evidence: https://github.com/ip7z/7zip
    note: No telemetry or analytics in the source code, and the website loads no scripts.
  no_ads:
    answer: yes
    evidence: https://www.7-zip.org/
    note: Free software with no registration, payment or ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
also_in:
  - archivers
---

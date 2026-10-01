---
name: NanaZip
description: Open source file archiver for Windows derived from 7-Zip, with Windows 11 context menu integration, dark mode and extra compression codecs such as Zstandard and Brotli.
website: https://nanazip.org
source: https://github.com/M2Team/NanaZip
platforms:
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/M2Team/NanaZip/blob/main/License.md
    note: MIT, with the 7-Zip code under the 7-Zip license (LGPL-2.1 with an unRAR restriction).
  no_trackers:
    answer: yes
    evidence: https://github.com/M2Team/NanaZip/blob/main/Documents/Privacy.md
    note: The app collects no information. It only contacts the Microsoft Store to check the Sponsor Edition license status.
  no_ads:
    answer: yes
    evidence: https://github.com/M2Team/NanaZip/blob/main/Documents/SponsorEdition.md
    note: Funded by an optional paid Sponsor Edition add-on and contributions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

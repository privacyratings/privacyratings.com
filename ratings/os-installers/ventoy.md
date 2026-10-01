---
name: Ventoy
description: A tool that prepares a USB drive so ISO, WIM, IMG, VHD and EFI files copied onto it can be booted from a menu, without reformatting the drive for each image.
website: https://www.ventoy.net
source: https://github.com/ventoy/Ventoy
platforms:
  - windows
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ventoy/Ventoy/blob/master/BLOB_List.md
    note: GPL-3.0. Prebuilt binaries in the repository are listed with their build instructions or upstream sources.
  no_trackers:
    answer: no
    evidence: https://www.ventoy.net/en/index.html
    note: The ventoy.net website loads Google Analytics and Google AdSense.
  no_ads:
    answer: no
    evidence: https://www.ventoy.net/en/index.html
    note: The ventoy.net website shows Google AdSense ads, alongside donations. The app itself has no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

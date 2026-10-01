---
name: NVDA
description: Free, open source screen reader for Windows that reads screen content aloud by speech or braille display. Developed by the Australian non-profit NV Access.
website: https://www.nvaccess.org
source: https://github.com/nvaccess/nvda
jurisdiction: AU
platforms:
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/nvaccess/nvda/blob/master/copying.txt
    note: GPL-2.0-or-later, with two exceptions for linking.
  no_ads:
    answer: yes
    evidence: https://www.nvaccess.org/support-us/
    note: Developed by a non-profit funded by donations, training sales and grants, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: yes
    evidence: https://download.nvaccess.org/documentation/userGuide.html#UsageStatsDialog
    note: Usage statistics are only sent if the user agrees in a dialog on first start, and can be turned off in settings.
---

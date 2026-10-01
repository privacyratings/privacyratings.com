---
name: Vim
description: Modal text editor for the terminal and GUI, highly configurable through Vim script and plugins. Distributed as charityware that asks users to donate to a children's charity in Uganda.
website: https://www.vim.org
source: https://github.com/vim/vim
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/vim/vim/blob/master/LICENSE
    note: Vim license, a free software license that also allows modified versions to be distributed under the GPL v2 or later.
  no_trackers:
    answer: no
    evidence: https://www.vim.org
    note: The vim.org website loads Google AdSense. The editor itself has no telemetry.
  no_ads:
    answer: partial
    evidence: https://www.vim.org/sponsor/index.php
    note: The editor has no ads and is funded by donations, but the vim.org website shows Google AdSense ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

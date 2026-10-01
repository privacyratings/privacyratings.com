---
name: Neovim
description: Fork of Vim focused on extensibility, with a Lua plugin API, a built-in LSP client, Tree-sitter support and an embeddable editor core.
website: https://neovim.io
source: https://github.com/neovim/neovim
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/neovim/neovim/blob/master/LICENSE.txt
    note: Apache 2.0, with parts inherited from Vim under the Vim license.
  no_trackers:
    answer: yes
    evidence: https://github.com/neovim/neovim
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://neovim.io/sponsors/
    note: Community project funded by donations and sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

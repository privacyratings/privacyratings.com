---
name: Helix
description: Modal terminal text editor written in Rust, inspired by Kakoune, with multiple selections, built-in LSP support and Tree-sitter syntax highlighting.
website: https://helix-editor.com
source: https://github.com/helix-editor/helix
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/helix-editor/helix/blob/master/LICENSE
    note: MPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/helix-editor/helix
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/helix-editor
    note: Community project funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

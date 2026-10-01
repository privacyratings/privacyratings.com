---
name: mdBook
description: Command-line tool written in Rust that builds online books from Markdown files, with search, themes and a preprocessor system.
website: https://rust-lang.github.io/mdBook/
source: https://github.com/rust-lang/mdBook
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/rust-lang/mdBook/blob/main/LICENSE
    note: MPL-2.0 licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/rust-lang/mdBook
    note: No telemetry or analytics in the source code, and the documentation site loads no trackers.
  no_ads:
    answer: yes
    evidence: https://rustfoundation.org/
    note: Maintained by the Rust project, which is supported by the Rust Foundation, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

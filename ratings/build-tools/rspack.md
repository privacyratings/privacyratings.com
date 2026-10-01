---
name: Rspack
description: JavaScript bundler written in Rust that is compatible with the webpack configuration and plugin API, developed by the ByteDance web infrastructure team.
website: https://rspack.rs
source: https://github.com/web-infra-dev/rspack
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/web-infra-dev/rspack/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: no
    note: The website loads Google Analytics. The bundler itself has no telemetry.
  no_ads:
    answer: yes
    evidence: https://github.com/web-infra-dev/rspack/blob/main/LICENSE
    note: Free MIT-licensed software with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

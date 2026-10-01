---
name: Parcel
description: Zero-configuration bundler for web applications that builds JavaScript, CSS, HTML and other assets, with a Rust-based compiler and built-in development server.
website: https://parceljs.org
source: https://github.com/parcel-bundler/parcel
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/parcel-bundler/parcel/blob/v2/LICENSE
    note: MIT.
  no_trackers:
    answer: no
    note: The website loads Google Analytics. The bundler itself has no telemetry.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/parcel
    note: Free software funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

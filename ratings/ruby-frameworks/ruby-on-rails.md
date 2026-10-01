---
name: Ruby on Rails
description: Full-stack Ruby web framework following the model-view-controller pattern, with the Active Record ORM, conventions over configuration and built-in support for mail, background jobs and WebSockets.
website: https://rubyonrails.org
aliases:
  - Rails
source: https://github.com/rails/rails
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/rails/rails/blob/main/MIT-LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: yes
    evidence: https://rubyonrails.org/
    note: No third-party trackers, and the framework has no telemetry. The website's Plausible analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://rubyonrails.org/foundation
    note: Supported by the Rails Foundation, funded by member companies, with no ads.
  independent_audit:
    answer: yes
    evidence: https://ostif.org/wp-content/uploads/2025/06/X41-Rails-Audit-Final-Report-PUBLIC.pdf
    note: X41 D-Sec audited Rails through OSTIF and published the full report.
platforms:
  - linux
  - macos
  - windows
---

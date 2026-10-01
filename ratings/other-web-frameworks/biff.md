---
name: Biff
description: Full-stack Clojure web framework for solo developers that bundles a database, authentication, server-side rendering with htmx and deployment tooling.
website: https://biffweb.com
source: https://github.com/jacobobryant/biff
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/jacobobryant/biff/blob/master/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://biffweb.com/
    note: The framework has no telemetry, but biffweb.com loads self-hosted Plausible analytics and Google reCAPTCHA.
  no_ads:
    answer: yes
    evidence: https://github.com/sponsors/jacobobryant
    note: Funded by GitHub Sponsors donations to the maintainer, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

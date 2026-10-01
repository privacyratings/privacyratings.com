---
name: MkDocs
description: Static site generator written in Python for project documentation, built from Markdown files and a single YAML configuration file.
website: https://www.mkdocs.org
source: https://github.com/mkdocs/mkdocs
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mkdocs/mkdocs/blob/master/LICENSE
    note: BSD 2-Clause licensed.
  no_trackers:
    answer: no
    evidence: https://www.mkdocs.org/
    note: The mkdocs.org website loads Google Analytics through Google Tag Manager. The mkdocs command has no telemetry.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/mkdocs
    note: Funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

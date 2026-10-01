---
name: Hugo
description: Static site generator written in Go that builds websites from Markdown content and Go templates, distributed as a single binary.
website: https://gohugo.io
source: https://github.com/gohugoio/hugo
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/gohugoio/hugo/blob/master/LICENSE
    note: Apache 2.0 licensed.
  no_trackers:
    answer: no
    evidence: https://gohugo.io/
    note: The gohugo.io website loads Google Analytics through Google Tag Manager. The hugo command has no telemetry.
  no_ads:
    answer: yes
    evidence: https://github.com/gohugoio/hugo#sponsors
    note: Funded by sponsors listed in the repository, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

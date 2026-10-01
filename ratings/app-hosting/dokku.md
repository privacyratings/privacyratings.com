---
name: Dokku
description: Open-source, self-hosted platform that deploys apps to your own server with git push, using Heroku-compatible buildpacks or Dockerfiles.
website: https://dokku.com
source: https://github.com/dokku/dokku
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/dokku/dokku/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/dokku/dokku
    note: No telemetry or analytics in the source code, and no trackers on the website.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/dokku
    note: Funded by donations, sponsors and the paid Dokku Pro add-on, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

---
name: Kener
description: Self-hosted status page and uptime monitor built with SvelteKit, with incident management, badges and embeddable status widgets.
website: https://kener.ing
source: https://github.com/rajnandan1/kener
platforms:
  - linux
  - windows
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/rajnandan1/kener/blob/main/LICENSE
    note: MIT.
  self_hosted:
    answer: yes
    evidence: https://kener.ing/docs
    note: Runs on your own server with Node.js or Docker, without a vendor account.
  no_trackers:
    answer: yes
    evidence: https://github.com/rajnandan1/kener/blob/main/src/lib/server/db/seedSiteData.ts
    note: No telemetry in the source code. Analytics providers are only loaded if the site owner adds an ID.
  no_ads:
    answer: yes
    evidence: https://github.com/rajnandan1/kener/blob/main/.github/FUNDING.yml
    note: Free software funded through GitHub Sponsors and Buy Me a Coffee, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_visitor_tracking:
    answer: yes
    evidence: https://github.com/rajnandan1/kener/blob/main/src/lib/server/db/seedSiteData.ts
    note: Status pages load no analytics unless the owner configures Google Analytics, Amplitude, Mixpanel or another provider.
  history:
    answer: yes
    evidence: https://kener.ing
    note: Status pages show daily uptime bars, response times and incident history.
---

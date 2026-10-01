---
name: cState
description: Static status page theme for the Hugo site generator. Incidents are written as Markdown files and the page can be hosted on any static host.
website: https://cstate.uncascade.com
source: https://github.com/cstate/cstate
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/cstate/cstate/blob/master/LICENSE.md
    note: MIT.
  self_hosted:
    answer: yes
    evidence: https://github.com/cstate/cstate#readme
    note: Builds a static site with Hugo that can be hosted anywhere without a vendor account.
  no_trackers:
    answer: yes
    evidence: https://github.com/cstate/cstate/blob/master/layouts/partials/js.html
    note: No telemetry in the source code. Google Analytics loads only if the site owner adds a tracking ID.
  no_ads:
    answer: yes
    evidence: https://github.com/cstate/cstate/blob/master/.github/FUNDING.yml
    note: Free software funded through GitHub Sponsors and PayPal donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_visitor_tracking:
    answer: yes
    evidence: https://github.com/cstate/cstate/blob/master/layouts/partials/js.html
    note: No trackers by default; Google Analytics is added only when the owner configures it. The default theme loads Google Fonts.
  history:
    answer: partial
    evidence: https://cstate.mnts.lt
    note: Shows current status and past incidents, but no response times or uptime measurements.
---

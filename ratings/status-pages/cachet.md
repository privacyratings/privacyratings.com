---
name: Cachet
description: >-
  Self-hosted status page system written in PHP.
website: https://cachethq.io
source: https://github.com/cachethq/cachet
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/cachethq/cachet/blob/3.x/LICENSE.md
    note: All code is public under the custom Cachet License, a source-available license that is not OSI-approved.
  self_hosted:
    answer: yes
    evidence: https://github.com/cachethq/cachet#readme
  no_trackers:
    answer: partial
    evidence: https://github.com/cachethq/core/blob/main/config/cachet.php
    note: The Cachet Beacon sends anonymous usage data to cachethq.io by default and can be turned off with CACHET_BEACON.
  no_ads:
    answer: yes
    evidence: https://github.com/cachethq/cachet/blob/3.x/.github/FUNDING.yml
    note: Free software funded through GitHub Sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_visitor_tracking:
    answer: yes
    evidence: https://github.com/cachethq/core/blob/main/resources/views/components/cachet.blade.php
    note: The status page template loads no third-party scripts; owners can add their own header code.
  history:
    answer: yes
    evidence: https://demo.cachethq.io
    note: Status pages show past incidents and metric graphs.
---

---
name: Mojolicious
description: Real-time web framework for Perl with a non-blocking I/O web server, WebSocket support, templates and no dependencies beyond core Perl.
website: https://mojolicious.org
source: https://github.com/mojolicious/mojo
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mojolicious/mojo/blob/main/LICENSE
    note: Licensed under the Artistic License 2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/mojolicious/mojo
    note: No telemetry in the source code, and mojolicious.org loads no third-party analytics.
  no_ads:
    answer: yes
    evidence: https://github.com/mojolicious/mojo
    note: Community-developed open-source project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

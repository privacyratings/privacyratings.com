---
name: Serverpod
description: Backend framework for Dart and Flutter that generates client code for server endpoints, with an ORM, authentication, caching and file uploads.
website: https://serverpod.dev/
source: https://github.com/serverpod/serverpod
jurisdiction: SE
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/serverpod/serverpod/blob/main/LICENSE
    note: BSD-3-Clause-licensed.
  no_trackers:
    answer: no
    evidence: https://github.com/serverpod/serverpod/blob/main/tools/serverpod_cli/lib/src/analytics/cli_analytics.dart
    note: The CLI sends analytics to PostHog unless run with --no-analytics, and serverpod.dev loads Google Tag Manager and PostHog.
  no_ads:
    answer: yes
    evidence: https://serverpod.dev/pricing
    note: Developed by Serverpod AB and funded by its paid Serverpod Cloud hosting, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

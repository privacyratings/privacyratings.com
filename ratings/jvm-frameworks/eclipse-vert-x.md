---
name: Eclipse Vert.x
description: Eclipse Foundation toolkit for building reactive, event-driven applications on the JVM with non-blocking I/O, usable from Java, Kotlin and other JVM languages.
website: https://vertx.io
aliases:
  - Vert.x
source: https://github.com/eclipse-vertx/vert.x
jurisdiction: BE
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/eclipse-vertx/vert.x/blob/master/LICENSE.md
    note: Dual-licensed under the Eclipse Public License 2.0 and Apache 2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/eclipse-vertx/vert.x
    note: No telemetry in the source code, and vertx.io loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://www.eclipse.org/membership/
    note: Hosted by the Eclipse Foundation, which is funded by member organizations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

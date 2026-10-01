---
name: Anytype
description: Local-first workspace for notes, documents, tasks and databases built from linked objects and types. Data is end-to-end encrypted and syncs peer to peer or through the Any network, which can be self-hosted.
website: https://anytype.io
source: https://github.com/anyproto/anytype-ts
jurisdiction: CH
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/anyproto/anytype-ts/blob/develop/LICENSE.md
    note: The apps are published under the Any Source Available License, which is not OSI-approved and limits commercial use.
  no_trackers:
    answer: no
    evidence: https://doc.anytype.io/anytype/data/analytics-and-tracking
    note: The apps send usage events to Amplitude and crash reports to Sentry, and this cannot be turned off in settings.
  no_ads:
    answer: yes
    evidence: https://anytype.io/pricing/
    note: Funded by paid memberships, with no ads. Content is end-to-end encrypted.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

---
name: Santa
description: A binary and file access authorization system for macOS that allows or blocks apps by hash, signing certificate or team ID. Created at Google and now maintained by North Pole Security.
website: https://northpole.dev
source: https://github.com/northpolesec/santa
jurisdiction: US
platforms:
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/northpolesec/santa/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://northpole.security/privacy
    note: The agent reports only to a sync server chosen by the administrator, but the website loads Google Analytics.
  no_ads:
    answer: yes
    evidence: https://northpole.security
    note: Funded by North Pole Security's commercial management service, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

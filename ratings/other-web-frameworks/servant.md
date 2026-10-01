---
name: Servant
description: Haskell library for describing web APIs as types, from which servers, clients and documentation are derived.
website: https://www.servant.dev
source: https://github.com/haskell-servant/servant
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/haskell-servant/servant/blob/master/servant/LICENSE
    note: BSD-3-Clause-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/haskell-servant/servant
    note: No telemetry in the source code, and servant.dev loads no third-party analytics.
  no_ads:
    answer: partial
    evidence: https://docs.servant.dev/en/latest/
    note: Community-developed, but the documentation on Read the Docs shows EthicalAds contextual ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

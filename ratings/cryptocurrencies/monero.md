---
name: Monero
description: Privacy-focused cryptocurrency that hides the sender, receiver and amount of every transaction by default, using ring signatures, stealth addresses and RingCT.
website: https://www.getmonero.org
source: https://github.com/monero-project/monero
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/monero-project/monero/blob/master/LICENSE
    note: BSD-3-Clause and MIT.
  no_trackers:
    answer: yes
    evidence: https://www.getmonero.org/legal/
    note: The website privacy policy describes only standard server logs, and the wallet and node software contain no telemetry.
  no_ads:
    answer: yes
    evidence: https://ccs.getmonero.org
    note: Community project funded by donations through the Community Crowdfunding System, with no ads.
  independent_audit:
    answer: yes
    evidence: https://github.com/trailofbits/publications/blob/master/reviews/2026-07-magicgrants-monerofcmp++crypto-securityreview.pdf
    note: Trail of Bits published a full review of cryptography changes to the Monero codebase for the FCMP++ upgrade. Other protocol components have older audits.
---

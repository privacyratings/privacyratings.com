---
name: Ghost
description: Open source publishing platform for blogs and newsletters with paid memberships, run by the non-profit Ghost Foundation. Available as hosted Ghost(Pro) or self-hosted.
website: https://ghost.org
domain: account.ghost.org
jurisdiction: SG
source: https://github.com/TryGhost/Ghost
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/TryGhost/Ghost/blob/main/LICENSE
    note: MIT. Ghost(Pro) runs the same open source software, which can also be self-hosted.
  no_trackers:
    answer: no
    evidence: https://ghost.org/privacy/
    note: The ghost.org website loads Ahrefs and Dub analytics and the FirstPromoter affiliate tracking script.
  no_ads:
    answer: yes
    evidence: https://ghost.org/about/
    note: Non-profit funded by Ghost(Pro) subscriptions, and the privacy policy states it does not sell personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---

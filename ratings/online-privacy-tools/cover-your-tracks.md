---
name: Cover Your Tracks
description: EFF tool, formerly Panopticlick, that tests how well a browser and its extensions block tracking and how unique the browser fingerprint is.
website: https://coveryourtracks.eff.org
source: https://github.com/EFForg/cover-your-tracks
domain: coveryourtracks.eff.org
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/EFForg/cover-your-tracks/blob/master/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://coveryourtracks.eff.org/privacy
    note: The privacy policy states there are no third-party service providers; an optional test loads one real tracker resource to check blocking.
  no_ads:
    answer: yes
    evidence: https://supporters.eff.org/donate/coveryourtracks
    note: Funded by donations to EFF, which states it does not sell visitor information.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://www.eff.org/policy
    note: EFF's privacy policy states visitor information is shared with government only when compelled by law, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://www.eff.org/policy
    note: EFF's privacy policy promises to attempt prior notice of legal requests unless prohibited or futile.
jurisdiction: US
imported_name: Panopticlick
---

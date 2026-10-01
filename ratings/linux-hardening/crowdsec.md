---
name: CrowdSec
description: An open source security engine that detects attacks in logs and blocks offending IP addresses, and shares signals with a crowdsourced blocklist run by the French company CrowdSec.
website: https://www.crowdsec.net
source: https://github.com/crowdsecurity/crowdsec
jurisdiction: FR
platforms:
  - linux
  - windows
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/crowdsecurity/crowdsec/blob/master/LICENSE
    note: The Security Engine is MIT-licensed, but the Central API and console that provide the community blocklist are closed source.
  no_trackers:
    answer: no
    evidence: https://docs.crowdsec.net/docs/central_api/intro/
    note: The website loads Google Analytics, Hotjar, HubSpot and LinkedIn tracking. The engine sends signal metadata and usage metrics to CrowdSec unless the Central API is disabled.
  no_ads:
    answer: yes
    evidence: https://www.crowdsec.net/pricing
    note: Funded by paid plans and threat intelligence built from community signals about attacking IP addresses, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

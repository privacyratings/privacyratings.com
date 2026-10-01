---
name: Control D
description: DNS resolver service from ControlD Inc. in Canada, founded by the team behind Windscribe. It offers free filtering resolvers and paid plans with custom rules, over legacy DNS, DoH, DoT and DNS over QUIC.
website: https://controld.com
jurisdiction: CA
domain: controld.com
source: https://github.com/Control-D-Inc/ctrld
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Control-D-Inc/ctrld/blob/main/LICENSE
    note: The ctrld client is open source under the MIT license. The resolver service is closed source.
  no_trackers:
    answer: yes
    evidence: https://controld.com/free-dns
    note: The site states no third-party tracking or analytics services are used on the website.
  no_ads:
    answer: yes
    evidence: https://controld.com/pricing
    note: Funded by paid plans. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  encrypted_dns:
    answer: yes
    evidence: https://docs.controld.com/docs/free-dns
    note: The free resolvers are listed with DoH, DoT and DNS over QUIC endpoints.
  no_query_logs:
    answer: partial
    evidence: https://controld.com/free-dns
    note: The free resolvers are stated to keep no browsing history, timestamps or logs. Not audited.
  dnssec_validation:
    answer: yes
    evidence: https://docs.controld.com/docs/disable-dnssec-option
    note: DNSSEC validation is on by default and can be turned off per profile.
---

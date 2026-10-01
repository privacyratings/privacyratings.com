---
name: Bunker
description: "French cloud from France Nuage SAS offering virtual machines, managed open-source apps, PostgreSQL and S3-compatible storage in its own datacenters in France."
website: https://getbunker.net
source: https://github.com/France-Nuage/plateforme
domain: getbunker.net
imported_from: awesome-privacy
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/France-Nuage/plateforme/blob/master/LICENCE
    note: The platform code is published under SSPL-1.0, which is not an OSI-approved license.
  no_trackers:
    answer: partial
    evidence: https://getbunker.net/legal/privacy-policy
    note: No third-party trackers; first-party Matomo analytics run by default in CNIL exemption mode.
  no_ads:
    answer: yes
    evidence: https://getbunker.net/legal/privacy-policy
    note: Funded by paid subscriptions, with no advertising or data sales described in the privacy policy.
  independent_audit:
    answer: no
    evidence: https://getbunker.net/legal/security-compliance
    note: Security measures are self-assessed and not certified or audited by a third party.
  transparency_report:
    answer: no
    note: No transparency report or dedicated government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  anonymous_payment:
    answer: no
    evidence: https://getbunker.net/documentation/ressources/faq
    note: Payment is by credit card, bank transfer or SEPA direct debit.
  port_25:
    answer: no
    evidence: https://getbunker.net/documentation/ressources/faq
    note: Not documented. The documentation does not say whether outbound port 25 is open.
  reverse_dns:
    answer: no
    evidence: https://getbunker.net/documentation/ressources/faq
    note: Not documented. The documentation does not mention reverse DNS.
  ipv6:
    answer: no
    evidence: https://getbunker.net/documentation/ressources/faq
    note: Not documented. The documentation does not mention IPv6.
jurisdiction: FR
---

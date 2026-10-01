---
name: DNS4EU
description: Public DNS resolver co-funded by the European Union and operated by a consortium led by Whalebone in the Czech Republic. It offers protective, child-safe, ad-blocking and unfiltered variants over DoH and DoT.
website: https://joindns4.eu
jurisdiction: CZ
domain: www.joindns4.eu
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://joindns4.eu/privacy-policy
    note: The website loads Google Tag Manager and HubSpot.
  no_ads:
    answer: yes
    evidence: https://legal-documents-dns4eu.s3.fr-par.scw.cloud/DNS4EU-Public-DNS-Resolver-policy-2025.pdf
    note: Co-funded by the European Union. The resolver policy rules out selling or transferring IP addresses or user identifiers.
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
    evidence: https://joindns4.eu/for-public
    note: DoH and DoT endpoints are listed for each resolver variant.
  no_query_logs:
    answer: partial
    evidence: https://legal-documents-dns4eu.s3.fr-par.scw.cloud/DNS4EU-Public-DNS-Resolver-policy-2025.pdf
    note: Client IP addresses are anonymised with a keyed hash on the resolver before logging. Not audited.
  dnssec_validation:
    answer: yes
    evidence: https://protective.joindns4.eu/dns-query?dns=AAABAAABAAAAAAABDWRuc3NlYy1mYWlsZWQDb3JnAAABAAEAACkQAAAAgAAAAA
    note: A test query for the deliberately broken dnssec-failed.org returns SERVFAIL, showing validation.
---

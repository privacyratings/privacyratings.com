---
name: Mullvad DNS
description: >-
  Free encrypted DNS resolver from Mullvad with optional ad, tracker and malware blocking. Mullvad has announced it is shutting the public service down.
website: https://mullvad.net/en/help/dns-over-https-and-dns-over-tls
jurisdiction: SE
domain: mullvad.net
criteria:
  open_source:
    answer: no
    note: The resolver setup is not published. Only the blocklists and Apple configuration profiles are on GitHub.
  no_trackers:
    answer: yes
    evidence: https://mullvad.net/en/help/no-logging-data-policy
    note: The policy states no usage data is sent to external analytics. There is no app.
  no_ads:
    answer: yes
    evidence: https://mullvad.net/en/help/dns-over-https-and-dns-over-tls
    note: Free service funded by Mullvad VPN subscriptions. No ads.
  independent_audit:
    answer: no
    note: No independent audit of the DNS service is published.
  transparency_report:
    answer: partial
    evidence: https://mullvad.net/en/help/swedish-legislation
    note: Explains which Swedish laws allow authorities to request data and what can be disclosed. No request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  encrypted_dns:
    answer: yes
    evidence: https://mullvad.net/en/help/dns-over-https-and-dns-over-tls
    note: DoH and DoT are supported.
  no_query_logs:
    answer: partial
    evidence: https://mullvad.net/en/help/no-logging-data-policy
    note: The no-logging policy states DNS requests are not logged. The DNS service has not been audited.
  dnssec_validation:
    answer: yes
    evidence: https://mullvad.net/en/help/dns-over-https-and-dns-over-tls
    note: "Tested: queries for domains with broken DNSSEC signatures return SERVFAIL, and succeed only with checking disabled."
---

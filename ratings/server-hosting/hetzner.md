---
name: Hetzner
description: >-
  German provider of cloud servers, dedicated servers and storage, with its own datacenters in Germany and Finland and cloud locations in the US and Singapore.
website: https://www.hetzner.com
jurisdiction: DE
domain: www.hetzner.com
criteria:
  port_25:
    answer: partial
    evidence: https://docs.hetzner.com/cloud/servers/faq/
    note: Ports 25 and 465 are blocked on cloud servers by default and can be unblocked on request after the first paid invoice.
  reverse_dns:
    answer: yes
    evidence: https://docs.hetzner.com/cloud/servers/cloud-server-rdns/
    note: rDNS entries for IPv4 and IPv6 are set in the Hetzner Console.
  ipv6:
    answer: yes
    evidence: https://docs.hetzner.com/cloud/servers/primary-ips/overview/
    note: Primary IPv6 addresses are free.
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://www.hetzner.com/legal/privacy-policy/
    note: Website analytics with Matomo run only after cookie consent.
  no_ads:
    answer: yes
    evidence: https://www.hetzner.com/legal/privacy-policy/
    note: Funded by paid hosting, and the privacy policy says data is not passed to third parties unless specified.
  independent_audit:
    answer: partial
    evidence: https://files.hetzner.com/docs/BSI-C52020Typ2_Testat_2026_EN.pdf
    note: Only a one-page summary of the BSI C5 Type 2 audit and an ISO 27001 certificate are public.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  anonymous_payment:
    answer: no
    evidence: https://docs.hetzner.com/general/billing-and-account-management/billing-at-hetzner/payment-overview/
    note: Cryptocurrency is not accepted.
---
New accounts must wait about a month before asking to open port 25.

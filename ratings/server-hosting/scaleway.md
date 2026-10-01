---
name: Scaleway
description: French cloud provider, part of the Iliad group, offering virtual instances, bare-metal servers, Kubernetes, storage and AI infrastructure in European datacenters.
website: https://www.scaleway.com/en/
jurisdiction: FR
domain: console.scaleway.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.scaleway.com/en/cookie/
    note: The cookie policy lists Hotjar, HubSpot, LinkedIn and Google Ads cookies, loaded after consent.
  no_ads:
    answer: no
    evidence: https://www.scaleway.com/en/cookie/
    note: Optional marketing and advertising personalization cookies are used, though the privacy policy says personal data is not resold.
  independent_audit:
    answer: partial
    evidence: https://www.scaleway.com/en/security-and-compliance/
    note: Scaleway states ISO/IEC 27001 and HDS certification, but no audit report is public.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  port_25:
    answer: partial
    evidence: https://www.scaleway.com/en/docs/instances/how-to/send-emails-from-your-instance/
    note: SMTP ports are blocked by default and can be opened in the console after identity verification.
  reverse_dns:
    answer: yes
    evidence: https://www.scaleway.com/en/docs/instances/how-to/configure-reverse-dns/
    note: Reverse DNS for flexible IPv4 and IPv6 addresses is set in the console or through the IPAM API.
  ipv6:
    answer: yes
    evidence: https://www.scaleway.com/en/docs/ipam/reference-content/understanding-ip-billing/
    note: Flexible IPv6 addresses are generally free, while IPv4 addresses are billed.
  anonymous_payment:
    answer: no
    evidence: https://www.scaleway.com/en/docs/billing/faq/
    note: Payment is by card or SEPA direct debit. Cryptocurrency is not accepted.
---

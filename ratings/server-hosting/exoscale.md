---
name: Exoscale
description: Swiss cloud provider, part of the A1 Group, offering compute instances, GPUs, managed Kubernetes, object storage and databases in European zones.
website: https://www.exoscale.com
jurisdiction: CH
domain: portal.exoscale.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://www.exoscale.com/privacy/
    note: No third-party trackers. Website analytics run in a cookieless mode and measure visits anonymously.
  no_ads:
    answer: yes
    evidence: https://www.exoscale.com/privacy/
    note: Funded by paid cloud services, and the privacy policy says personal information is not sold.
  independent_audit:
    answer: partial
    evidence: https://www.exoscale.com/compliance/bsi-c5/
    note: Exoscale holds a BSI C5 Type 2 attestation and ISO 27001 certification, but the reports are not public.
  transparency_report:
    answer: partial
    evidence: https://www.exoscale.com/abuse/
    note: The abuse page says foreign authorities must use judicial assistance with Switzerland. No request counts are published.
  user_notice:
    answer: yes
    evidence: https://www.exoscale.com/terms/
    note: The terms promise prior notice of compelled disclosure to government authorities, to the extent legally permitted.
  port_25:
    answer: yes
    evidence: https://community.exoscale.com/product/networking/security-group/overview/
    note: Security groups allow all outgoing traffic by default, and no SMTP restriction is documented.
  reverse_dns:
    answer: partial
    evidence: https://community.exoscale.com/reference/api/compute/reverse-dns/
    note: PTR records for instance public IPs and Elastic IPs are set through the API; IPv6 reverse DNS is not documented.
  ipv6:
    answer: yes
    evidence: https://www.exoscale.com/pricing/
    note: Every instance includes a free public IPv4 and IPv6 address.
  anonymous_payment:
    answer: no
    evidence: https://community.exoscale.com/platform/billing/
    note: Payment is by credit card or PayPal. Cryptocurrency is not accepted.
---

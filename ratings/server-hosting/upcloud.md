---
name: UpCloud
description: Finnish cloud provider offering virtual servers, GPU servers, managed Kubernetes, databases and object storage in datacenters in Europe, North America, Asia and Australia.
website: https://upcloud.com
jurisdiction: FI
domain: hub.upcloud.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The home page loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://upcloud.com/privacy-notice/
    note: Funded by paid hosting, and the privacy notice says personal data is not sold.
  independent_audit:
    answer: partial
    evidence: https://upcloud.com/media/upcloud_iso27001_2026.pdf
    note: Only the ISO 27001 certificate is public, not the audit report.
  transparency_report:
    answer: partial
    evidence: https://upcloud.com/privacy-notice/
    note: The privacy notice says data is disclosed only in response to lawful requests or legal process. No request counts are published.
  user_notice:
    answer: yes
    evidence: https://upcloud.com/privacy-notice/
    note: The privacy notice says customers are informed in advance of disclosures to authorities where possible.
  port_25:
    answer: partial
    evidence: https://upcloud.com/docs/getting-started/free-trial/
    note: Port 25 is blocked by default on all accounts, and non-trial customers can ask support to unblock it.
  reverse_dns:
    answer: yes
    evidence: https://upcloud.com/docs/products/networking/dns/
    note: Reverse DNS for every IP address can be changed in the control panel or through the API at no cost.
  ipv6:
    answer: yes
    evidence: https://upcloud.com/docs/products/networking/public-network/
    note: Every cloud server gets one IPv4 and one IPv6 address by default.
  anonymous_payment:
    answer: no
    evidence: https://upcloud.com/docs/getting-started/billing/payment-methods/
    note: Payment is by card, PayPal, Apple Pay or Google Pay. Cryptocurrency is not accepted.
---

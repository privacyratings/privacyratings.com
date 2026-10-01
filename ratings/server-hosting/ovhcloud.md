---
name: OVHcloud
description: >-
  French provider of VPS, dedicated servers and public cloud, running its own datacenters in Europe, North America and Asia-Pacific.
website: https://www.ovhcloud.com
jurisdiction: FR
domain: www.ovhcloud.com
criteria:
  port_25:
    answer: yes
    evidence: https://docs.ovhcloud.com/en/guides/bare-metal-cloud/dedicated-servers/antispam-best-practices
    note: Port 25 is open and only blocked when the anti-spam system detects spam.
  reverse_dns:
    answer: yes
    evidence: https://docs.ovhcloud.com/en/guides/bare-metal-cloud/virtual-private-servers/configuring-reverse-dns
    note: Reverse DNS for IPv4 and IPv6 is set in the Control Panel.
  ipv6:
    answer: yes
    evidence: https://docs.ovhcloud.com/en/guides/bare-metal-cloud/virtual-private-servers/configure-ipv6
    note: Every VPS is delivered with an IPv6 address.
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.ovhcloud.com/en/terms-and-conditions/cookies-policy/
    note: The websites load Piano Analytics without consent and use Commanders Act and advertising cookies.
  no_ads:
    answer: partial
    evidence: https://www.ovhcloud.com/en/terms-and-conditions/cookies-policy/
    note: Funded by paid hosting; targeted advertising cookies are set only with consent.
  independent_audit:
    answer: partial
    evidence: https://us.ovhcloud.com/sites/default/files/external_files/ovhcloud-us-soc3-report-2025.pdf
    note: Only a SOC 3 summary report is public; full SOC 2 and ISO audit reports are not.
  transparency_report:
    answer: yes
    evidence: https://corporate.ovhcloud.com/en/trusted-cloud/ethics-compliance/
    note: Publishes yearly DSA transparency reports with counts of orders from EU authorities.
  user_notice:
    answer: yes
    evidence: https://us.ovhcloud.com/legal/faqs/legal-law-enforcement/
    note: The law enforcement FAQ promises to notify customers of requests unless prohibited by law.
  anonymous_payment:
    answer: no
    evidence: https://docs.ovhcloud.com/en/guides/account-and-service-management/managing-billing-payments-and-services/manage-payment-methods
    note: Payment methods are cards, PayPal and SEPA direct debit, with no cryptocurrency option.
---
A fire destroyed one of its Strasbourg data centers.

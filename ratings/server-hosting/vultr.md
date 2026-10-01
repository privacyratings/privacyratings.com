---
name: Vultr
description: >-
  US cloud provider of virtual machines, bare metal servers and GPUs in many locations worldwide.
website: https://www.vultr.com
jurisdiction: US
domain: www.vultr.com
criteria:
  port_25:
    answer: partial
    evidence: https://docs.vultr.com/support/products/compute/why-is-smtp-blocked
    note: Port 25 is blocked by default, and unblocking is reviewed case by case on request.
  reverse_dns:
    answer: yes
    evidence: https://docs.vultr.com/support/products/network/how-do-i-configure-reverse-dns-for-my-vultr-instance
    note: Reverse DNS for IPv4 and IPv6 is set in the Vultr Console.
  ipv6:
    answer: yes
    evidence: https://docs.vultr.com/products/compute/instances/cloud-compute/networking/ipv6
    note: IPv6 can be enabled on Cloud Compute instances.
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.vultr.com/legal/privacy/
    note: The privacy policy lists Google Analytics and third-party targeting cookies.
  no_ads:
    answer: partial
    evidence: https://www.vultr.com/legal/privacy/
    note: Information is shared with third-party advertising partners for targeted advertising.
  independent_audit:
    answer: partial
    evidence: https://www.vultr.com/legal/compliance/
    note: SOC 2 and ISO 27001 audit documents are only available to customers in the control panel.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  anonymous_payment:
    answer: yes
    evidence: https://docs.vultr.com/support/platform/billing/what-payment-methods-do-you-accept
    note: Bitcoin and other cryptocurrencies are accepted through BitPay.
---
Forward Email also runs infrastructure on Vultr.

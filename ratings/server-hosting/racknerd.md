---
name: RackNerd
description: >-
  US provider of budget KVM VPS, dedicated and shared hosting in many North American and European datacenters.
website: https://www.racknerd.com
jurisdiction: US
domain: www.racknerd.com
criteria:
  port_25:
    answer: yes
    evidence: https://github.com/forwardemail/awesome-mail-server-providers#vps-and-dedicated-mail-server-provider-comparison-table
    note: Open by default.
  reverse_dns:
    answer: partial
    evidence: https://blog.racknerd.com/racknerds-vps-control-panel-video-tutorial-guide/
    note: rDNS can be set in the VPS control panel; IPv6 rDNS is not documented.
  ipv6:
    answer: yes
    evidence: https://my.racknerd.com/index.php?rp=/knowledgebase/25/Do-you-provide-IPv6-.html
    note: Native IPv6 is allocated free on request in some locations.
  open_source:
    answer: no
    note: Closed source.
  no_ads:
    answer: yes
    evidence: https://www.racknerd.com/privacy-policy
    note: Funded by paid hosting, and the privacy policy says personal information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  anonymous_payment:
    answer: yes
    evidence: https://my.racknerd.com/index.php?rp=/knowledgebase/7/What-payment-methods-do-you-accept.html
    note: Bitcoin, Litecoin, Ethereum and stablecoins are accepted.
---


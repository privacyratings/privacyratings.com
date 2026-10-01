---
name: DataPacket
description: >-
  Dedicated servers, IP transit and bandwidth on its own global network, from DataCamp Limited in London.
website: https://www.datapacket.com
domain: www.datapacket.com
pick: true
pick_reason: >-
  Dedicated hardware on its own network, open port 25, configurable reverse DNS and native IPv6. A solid base for running mail servers without sharing hardware with other customers.
criteria:
  port_25:
    answer: yes
    evidence: https://github.com/forwardemail/awesome-mail-server-providers#vps-and-dedicated-mail-server-provider-comparison-table
    note: Open by default.
  reverse_dns:
    answer: partial
    evidence: https://api.datapacket.com/
    note: PTR records can be set through the API; IPv6 support is not documented.
  ipv6:
    answer: yes
    evidence: https://www.datapacket.com/faq
    note: IPv6 addresses are assigned free of charge on request.
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.datapacket.com/privacy-policy
    note: The privacy policy says partners collect usage statistics and cookies are used for ads and traffic analysis.
  no_ads:
    answer: partial
    evidence: https://www.datapacket.com/privacy-policy
    note: Funded by paid hosting, but the privacy policy says cookies are used to personalise ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://www.datapacket.com/dsa-policy
    note: The DSA policy explains how authority orders are handled, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://www.datapacket.com/terms-and-conditions
    note: The terms say customers are notified of disclosures to authorities where legally permitted.
  anonymous_payment:
    answer: no
    evidence: https://www.datapacket.com/faq
    note: Payment is by credit card or wire transfer.
jurisdiction: GB
---


Forward Email runs infrastructure on DataPacket, along with DigitalOcean and Vultr.

---
name: netcup
description: German hosting provider offering virtual and root servers, web hosting, managed servers and domains, with datacenters in Germany, Austria, the Netherlands, the US and Singapore.
website: https://www.netcup.com/en
jurisdiction: DE
domain: www.customercontrolpanel.de
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.netcup.com/en/contact/data-privacy
    note: The privacy policy describes retargeting tags, pixels and cookies from advertising platforms and social networks.
  no_ads:
    answer: partial
    evidence: https://www.netcup.com/en/contact/data-privacy
    note: Website usage data is shared with advertising networks for retargeting.
  independent_audit:
    answer: partial
    evidence: https://www.netcup.com/en
    note: netcup states annual ISO 27001 and ISO 27701 certification, but no audit report is public.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  port_25:
    answer: partial
    evidence: https://www.netcup.com/en/helpcenter/documentation/server/firewall
    note: A default firewall policy blocks SMTP, and customers can delete it themselves in the Server Control Panel.
  reverse_dns:
    answer: yes
    evidence: https://www.netcup.com/en/helpcenter/documentation/server/network-server
    note: Reverse DNS for IPv4 and IPv6 addresses is set in the Server Control Panel.
  ipv6:
    answer: yes
    evidence: https://www.netcup.com/en/helpcenter/documentation/server/network-configuration
    note: VPS plans include a static IPv4 address and a /64 IPv6 subnet by default.
  anonymous_payment:
    answer: no
    evidence: https://www.netcup.com/en/helpcenter/documentation/general/payment-methods
    note: Payment is by bank transfer, PayPal, card or SEPA direct debit. Cryptocurrency is not accepted.
---

---
name: UltaHost
description: >-
  Provider of shared hosting, VPS, VDS and dedicated servers, headquartered in Delaware with offices in the UK, Turkey and Dubai.
website: https://ultahost.com
domain: ultahost.com
criteria:
  port_25:
    answer: partial
    evidence: https://ultahost.com/anti-spam-policy
    note: Port 25 is open by default only on annual VPS plans; other plans must request it.
  reverse_dns:
    answer: yes
    evidence: https://github.com/forwardemail/awesome-mail-server-providers#vps-and-dedicated-mail-server-provider-comparison-table
  ipv6:
    answer: yes
    evidence: https://ultahost.com/vps-hosting
    note: VPS plans include several dedicated IPv6 addresses.
  open_source:
    answer: no
    note: Closed source.
  no_ads:
    answer: partial
    evidence: https://ultahost.com/privacy-policy
    note: The privacy policy says cookies are used to provide personalised advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://ultahost.com/court-order-subpoena-policy
    note: A court order and subpoena policy is published, but no request counts.
  user_notice:
    answer: yes
    evidence: https://ultahost.com/court-order-subpoena-policy
    note: Customers are generally notified of legal requests unless notice is prohibited or would risk safety.
  anonymous_payment:
    answer: yes
    evidence: https://ultahost.com/payments
    note: Bitcoin and other cryptocurrencies are accepted.
jurisdiction: US
---


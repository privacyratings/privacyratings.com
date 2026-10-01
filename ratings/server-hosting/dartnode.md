---
name: DartNode
description: >-
  US provider of VPS and dedicated servers, run by Snaju Inc in Houston on its own network (AS399646) and hardware.
website: https://dartnode.com
domain: dartnode.com
criteria:
  port_25:
    answer: partial
    evidence: https://help.dartnode.com/faq/can-i-send-smtp-traffic-using-my-vps
    note: The help center says SMTP may not be available and is blocked for blacklisted IPs, with support handling SMTP requests.
  reverse_dns:
    answer: partial
    evidence: https://help.dartnode.com/networking/configure-reverse-dns
    note: PTR records are set in the client panel; IPv6 support is not documented.
  ipv6:
    answer: yes
    evidence: https://dartnode.com/vps
    note: All VPS plans include IPv4 and IPv6.
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://dartnode.com/legal/privacy
    note: The privacy policy lists third-party analytics providers for the website.
  no_ads:
    answer: yes
    evidence: https://dartnode.com/legal/privacy
    note: Funded by paid hosting, and the privacy policy says personal information is not sold, rented or leased.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or dedicated government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  anonymous_payment:
    answer: yes
    evidence: https://dartnode.com/legal/tos
    note: Cryptocurrency is accepted, though identity verification can be required at any time.
jurisdiction: US
---


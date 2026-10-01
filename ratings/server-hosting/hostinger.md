---
name: Hostinger
description: >-
  Lithuanian provider of web hosting, VPS and website building services. Port 25 is open on VPS plans, limited to 5 messages per minute.
website: https://www.hostinger.com
jurisdiction: LT
domain: www.hostinger.com
criteria:
  port_25:
    answer: yes
    evidence: https://www.hostinger.com/support/7854530-is-smtp-port-25-blocked-on-hostinger-vps/
    note: Port 25 is not blocked, with a limit of 5 messages per minute.
  reverse_dns:
    answer: yes
    evidence: https://www.hostinger.com/support/4805528-how-to-setup-reverse-dns-on-vps/
    note: PTR records for the IPv4 and IPv6 addresses are set in the VPS settings.
  ipv6:
    answer: yes
    evidence: https://www.hostinger.com/support/4805528-how-to-setup-reverse-dns-on-vps/
    note: Each VPS has an IPv6 address alongside its IPv4 address.
  open_source:
    answer: no
    note: Closed source.
  no_ads:
    answer: no
    evidence: https://www.hostinger.com/legal/privacy-policy
    note: The privacy policy describes targeted advertising with Facebook, Google and other ad tools.
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
    evidence: https://www.hostinger.com/payments
    note: A range of cryptocurrencies is accepted.
---
Hostinger has disclosed a breach affecting shared hosting customers.

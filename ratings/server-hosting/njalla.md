---
name: Njalla
description: Provider of VPS, domains and VPN run by njalla.srl in Costa Rica, with servers in Sweden. Accounts need only an email or XMPP address, and crypto payments are accepted.
website: https://njal.la/servers/
domain: njal.la
imported_from: awesome-privacy
jurisdiction: CR
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://njal.la/tos/
    note: The terms say no data is collected beyond the email or XMPP address and password, and the website loads only its own scripts.
  no_ads:
    answer: yes
    evidence: https://njal.la/tos/
    note: Funded by paid services, with data collection limited to account login details.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or dedicated government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  port_25:
    answer: no
    evidence: https://njal.la/servers/
    note: Outgoing SMTP is blocked on all servers.
  anonymous_payment:
    answer: yes
    evidence: https://njal.la/faq/
    note: Bitcoin, Litecoin, Monero and Ethereum are accepted.
  ipv6:
    answer: yes
    evidence: https://njal.la/pricing/
    note: Every server includes one IPv4 and one IPv6 address.
  reverse_dns:
    answer: no
    evidence: https://njal.la/servers/
    note: Not documented. The servers page and FAQ do not mention reverse DNS.
---

---
name: Contabo
description: >-
  German provider of VPS, cloud and dedicated servers. Outgoing mail on port 25 is limited to about 25 messages per minute.
website: https://contabo.com
jurisdiction: DE
domain: contabo.com
criteria:
  port_25:
    answer: yes
    evidence: https://help.contabo.com/en/support/solutions/articles/103000280507-is-there-a-limit-to-how-many-emails-can-be-sent-from-my-server-
    note: Mail can be sent directly, limited to about 25 messages per minute.
  reverse_dns:
    answer: yes
    evidence: https://help.contabo.com/en/support/solutions/articles/103000336144-dns-and-rdns-managment-with-contabo
    note: PTR records for IPv4 and IPv6 are set in the customer panel.
  ipv6:
    answer: yes
    evidence: https://help.contabo.com/en/support/solutions/articles/103000270487-how-can-i-use-ipv6-on-my-server-
    note: Servers come with an IPv6 range alongside the IPv4 address.
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://contabo.com/en/legal/privacy/
    note: The privacy policy lists Microsoft Clarity, Google Tag Manager, Varify and affiliate tracking from AWIN.
  no_ads:
    answer: yes
    evidence: https://contabo.com/en/legal/privacy/
    note: Funded by paid hosting; the privacy policy does not describe advertising or selling data.
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
    answer: no
    evidence: https://help.contabo.com/en/support/solutions/articles/103000226600-how-do-i-update-my-payment-methods-
    note: Cryptocurrency payments are not accepted.
---


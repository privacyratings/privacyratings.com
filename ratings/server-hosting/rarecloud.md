---
name: RareCloud
description: >-
  Romanian provider of KVM VPS, OpenStack cloud VMs, managed Kubernetes and web hosting, with datacenters in Europe, the US and Asia.
website: https://rarecloud.io
domain: rarecloud.io
criteria:
  port_25:
    answer: yes
    evidence: https://github.com/forwardemail/awesome-mail-server-providers#vps-and-dedicated-mail-server-provider-comparison-table
    note: Open by default.
  reverse_dns:
    answer: partial
    evidence: https://console.rarecloud.io/llms.txt
    note: PTR records can be set through the API for a cloud VM's primary IPv4 address only.
  ipv6:
    answer: yes
    evidence: https://github.com/forwardemail/awesome-mail-server-providers#vps-and-dedicated-mail-server-provider-comparison-table
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://rarecloud.io/tos/#cookie-policy
    note: The cookie policy lists Google Tag Manager, Google Analytics, Meta Pixel, Google Ads and Tawk.to.
  no_ads:
    answer: partial
    evidence: https://rarecloud.io/tos/#cookie-policy
    note: Funded by paid hosting; Meta and Google remarketing cookies are set only with consent.
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
    evidence: https://console.rarecloud.io/llms.txt
    note: Cryptocurrency payment is accepted.
jurisdiction: RO
---


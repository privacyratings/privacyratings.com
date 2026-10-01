---
name: Akamai Cloud (Linode)
description: >-
  Cloud computing platform from Akamai, formerly Linode, offering virtual machines, Kubernetes, object storage and managed databases.
website: https://www.linode.com
jurisdiction: US
domain: www.linode.com
criteria:
  port_25:
    answer: partial
    evidence: https://techdocs.akamai.com/cloud-computing/docs/send-email
    note: SMTP ports are restricted on some new accounts and opened on request to support.
  reverse_dns:
    answer: yes
    evidence: https://techdocs.akamai.com/cloud-computing/docs/configure-rdns-reverse-dns-on-a-compute-instance
    note: rDNS for IPv4 and IPv6 addresses is set in Cloud Manager.
  ipv6:
    answer: yes
    evidence: https://techdocs.akamai.com/cloud-computing/docs/an-overview-of-ipv6-on-linode
    note: Every Linode is created with an IPv6 address.
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.akamai.com/legal/manage-cookie-preferences
    note: Akamai websites use analytics and targeting cookies from LinkedIn, Google DoubleClick, Amazon and others.
  no_ads:
    answer: partial
    evidence: https://www.akamai.com/legal/manage-cookie-preferences
    note: Targeting cookies let advertising partners build interest profiles of visitors.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://www.akamai.com/legal/eu-digital-services-act
    note: Publishes DSA transparency reports with counts of orders from EU authorities; requests from other countries are not reported.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  anonymous_payment:
    answer: no
    evidence: https://techdocs.akamai.com/cloud-computing/docs/manage-payment-methods
    note: Payment is by card, Google Pay or PayPal only.
---
Linode has disclosed two security breaches.

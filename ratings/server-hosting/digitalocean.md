---
name: DigitalOcean
description: >-
  US cloud provider offering virtual machines (Droplets), Kubernetes, managed databases and object storage.
website: https://www.digitalocean.com
jurisdiction: US
domain: www.digitalocean.com
criteria:
  port_25:
    answer: no
    evidence: https://docs.digitalocean.com/support/why-is-smtp-blocked/
    note: SMTP ports are blocked on all Droplets, with no documented way to open them.
  reverse_dns:
    answer: yes
    evidence: https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/
    note: PTR records for IPv4 and the first IPv6 address are set from the Droplet name.
  ipv6:
    answer: yes
    evidence: https://docs.digitalocean.com/products/networking/ipv6/
    note: Each Droplet can enable 16 IPv6 addresses at no extra cost.
  open_source:
    answer: no
    note: Closed source.
  no_ads:
    answer: partial
    evidence: https://www.digitalocean.com/legal/privacy-policy
    note: The privacy policy lets third-party advertising partners collect data on its services to show targeted ads.
  independent_audit:
    answer: partial
    evidence: https://www.digitalocean.com/trust/certification-reports
    note: SOC 2 Type II and SOC 3 reports from an independent auditor are only available to customers after sign-in.
  transparency_report:
    answer: yes
    evidence: https://www.digitalocean.com/legal/transparency-report
    note: Publishes request counts and outcomes twice a year.
  user_notice:
    answer: yes
    evidence: https://www.digitalocean.com/legal/law-enforcement-guidelines
    note: Notifies users of legal process for their account unless prohibited by law or court order.
  anonymous_payment:
    answer: partial
    evidence: https://docs.digitalocean.com/platform/billing/manage-payment-methods/
    note: Stablecoin payment is offered to some customers, and every account needs a verified payment method.
---
Forward Email also runs infrastructure on DigitalOcean.

Some DigitalOcean IP ranges have a history of spam listings, so check an IP's reputation before sending mail from it.

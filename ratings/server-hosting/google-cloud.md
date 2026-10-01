---
name: Google Cloud
description: Cloud computing platform from Google offering virtual machines (Compute Engine), Kubernetes, storage, databases and data analytics services.
website: https://cloud.google.com
aliases:
  - GCP
mainstream: true
jurisdiction: US
domain: console.cloud.google.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The home page loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://cloud.google.com/terms/cloud-privacy-notice
    note: Funded by paid usage. The Cloud Privacy Notice says Service Data is not sold or shared with third parties.
  independent_audit:
    answer: partial
    evidence: https://cloud.google.com/security/compliance/soc-3
    note: Only the SOC 3 summary report is public; SOC 2 and ISO audit reports are available to customers.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Google publishes semi-annual counts of government requests for user data, with a separate section for Enterprise Cloud customers.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google emails the account, or its administrator, before disclosing data unless prohibited by law or in emergencies.
  port_25:
    answer: no
    evidence: https://docs.cloud.google.com/compute/docs/tutorials/sending-mail
    note: Connections to external destinations on port 25 are blocked, and no process to request an exception is documented.
  reverse_dns:
    answer: yes
    evidence: https://docs.cloud.google.com/compute/docs/instances/create-ptr-record
    note: PTR records for external IPv4 and IPv6 addresses are set on the VM's network interface.
  ipv6:
    answer: yes
    evidence: https://cloud.google.com/vpc/network-pricing
    note: External IPv6 addresses assigned to VM instances are not charged.
  anonymous_payment:
    answer: no
    evidence: https://docs.cloud.google.com/billing/docs/how-to/payment-methods
    note: Payment is by credit card or bank account. Cryptocurrency is not accepted.
---

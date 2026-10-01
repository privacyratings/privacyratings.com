---
name: Infomaniak
description: Swiss provider of web hosting, VPS and OpenStack public cloud, running its own datacenters and network (AS29222).
website: https://www.infomaniak.com
jurisdiction: CH
domain: www.infomaniak.com
imported_from: awesome-privacy
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://www.infomaniak.com/en/legal/confidentiality-policy
    note: Website analytics use self-hosted Matomo, and it and ad measurement tools load only with consent.
  no_ads:
    answer: yes
    evidence: https://www.infomaniak.com/en/legal/confidentiality-policy
    note: Funded by paid services, and customer data is not used for commercial purposes.
  independent_audit:
    answer: partial
    evidence: https://www.infomaniak.com/documents/iso/27001_1EN.pdf
    note: Only the ISO 27001 certificate is public, not the audit report.
  transparency_report:
    answer: no
    note: No transparency report or dedicated government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  port_25:
    answer: partial
    evidence: https://www.infomaniak.com/en/support/faq/2822/manage-the-cloud-vps-vps-lite-firewall
    note: Outgoing port 25 is blocked by default and opened on justified request for Cloud VPS.
  reverse_dns:
    answer: yes
    evidence: https://www.infomaniak.com/en/support/faq/2012/create-a-ptr-record-for-cloud-vps-vps-lite
    note: PTR records for the IPv4 and IPv6 addresses are set in the Infomaniak Manager.
  ipv6:
    answer: yes
    evidence: https://www.infomaniak.com/en/hosting/vps-cloud
    note: Each Cloud VPS includes a dedicated IPv6 address.
  anonymous_payment:
    answer: no
    evidence: https://www.infomaniak.com/en/support/faq/1385/pay-for-renew-a-product-manually
    note: Payment is by card, PayPal, Twint or bank transfer, with no cryptocurrency option.
---

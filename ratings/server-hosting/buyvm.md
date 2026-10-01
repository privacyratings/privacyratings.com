---
name: BuyVM
description: VPS provider owned by Cloudzy, offering KVM slices, storage VPS, block storage and anycast IP addresses in Las Vegas, New York and Luxembourg.
website: https://buyvm.net
jurisdiction: AE
domain: my.frantech.ca
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The home page loads Google Analytics, Google Tag Manager and Tawk.to.
  no_ads:
    answer: yes
    evidence: https://buyvm.net/privacy-policy/
    note: Funded by paid hosting, and the privacy policy says client information is never shared with third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://buyvm.net/privacy-policy/
    note: The privacy policy says client information is released to law enforcement only under a court order. No request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  port_25:
    answer: partial
    evidence: https://wiki.buyvm.net/doku.php/faq
    note: SMTP ports are the only blocked ports and can be unblocked through a support ticket.
  reverse_dns:
    answer: yes
    evidence: https://buyvm.net/features/
    note: Reverse DNS is set in the control panel.
  ipv6:
    answer: yes
    evidence: https://buyvm.net/features/
    note: IPv6 addresses are assigned from the control panel as part of the service.
  anonymous_payment:
    answer: yes
    evidence: https://buyvm.net/terms-of-service/
    note: Cryptocurrency payments are accepted through the CoinPayments gateway.
---

---
name: OVPN
description: VPN service founded in Sweden, now run by OVPN Inc., with WireGuard and OpenVPN on diskless servers, optional ad blocking, and monthly transparency reports.
website: https://www.ovpn.com
jurisdiction: US
domain: www.ovpn.com
imported_from: awesome-privacy
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The home page loads PostHog, and the Android app includes Sentry according to Exodus.
  no_ads:
    answer: yes
    evidence: https://www.ovpn.com/en/pricing
    note: Funded by paid subscriptions. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://www.ovpn.com/en/transparency
    note: Monthly reports list the number of government requests received.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_logs_audited:
    answer: partial
    evidence: https://www.ovpn.com/en/privacy-notice
    note: A no-logs policy is published but has not been independently audited.
  anonymous_payment:
    answer: partial
    evidence: https://support.ovpn.com/hc/en-us/articles/46236278845075-Can-I-make-a-payment-for-my-subscription-anonymously
    note: Email is optional and Bitcoin or Ethereum is accepted. Cash and Monero are not.
  open_source_clients:
    answer: no
    note: The OVPN apps are closed source.
  modern_protocols:
    answer: yes
    evidence: https://www.ovpn.com/en/wireguard
    note: WireGuard and OpenVPN are supported.
---

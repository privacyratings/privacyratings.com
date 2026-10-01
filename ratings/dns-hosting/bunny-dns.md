---
name: Bunny DNS
description: Authoritative DNS hosting from the Slovenian CDN provider bunny.net, with DNSSEC, scriptable DNS records, health-check failover and usage-based pricing.
website: https://bunny.net/dns/
jurisdiction: SI
domain: dash.bunny.net
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The home page loads PostHog analytics.
  no_ads:
    answer: yes
    evidence: https://bunny.net/pricing/dns/
    note: Funded by usage-based DNS pricing. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  dnssec:
    answer: yes
    evidence: https://bunny.net/docs/dns/dnssec
    note: DNSSEC is enabled on a zone's Security tab with automatic key management. The DS record is added at the registrar.
  api_access:
    answer: yes
    evidence: https://bunny.net/docs/api-reference/core/dns-zone/add-dns-zone
    note: Zones and records are managed through the bunny.net API on every account.
  two_factor:
    answer: yes
    evidence: https://bunny.net/docs/account/two-factor-authentication
    note: Authenticator apps (TOTP) are supported.
---

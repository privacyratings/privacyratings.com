---
name: Hetzner DNS
description: Free authoritative DNS hosting from the German provider Hetzner, managed in the Hetzner Console and through the Hetzner Cloud API.
website: https://www.hetzner.com/dns/
jurisdiction: DE
domain: console.hetzner.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.hetzner.com/legal/privacy-policy/
    note: No third-party trackers, but website analytics use Matomo with cookies after consent.
  no_ads:
    answer: yes
    evidence: https://www.hetzner.com/dns/
    note: Funded by Hetzner's paid hosting. DNS management is free and carries no ads.
  independent_audit:
    answer: partial
    evidence: https://files.hetzner.com/docs/BSI-C52020Typ2_Testat_2026_EN.pdf
    note: Only a one-page summary of the BSI C5 Type 2 audit and an ISO 27001 certificate are public.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  dnssec:
    answer: no
    evidence: https://www.hetzner.com/dns/
    note: The product FAQ states Hetzner Console does not support DNSSEC.
  api_access:
    answer: yes
    evidence: https://docs.hetzner.cloud/reference/cloud
    note: Zones and records are managed through the free Hetzner Cloud API.
  two_factor:
    answer: yes
    evidence: https://docs.hetzner.com/general/security-and-identify/two-factor-authentication/
    note: Two-factor login is supported, including YubiKey security keys.
---

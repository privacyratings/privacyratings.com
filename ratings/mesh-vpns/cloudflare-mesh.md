---
name: Cloudflare Mesh
description: Private networking in Cloudflare One that gives devices and servers running the WARP client or connector private addresses, with all traffic passing through Cloudflare's network.
website: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-mesh/
family: cloudflare
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: The WARP client and Cloudflare One are closed source.
  no_trackers:
    answer: no
    evidence: https://www.cloudflare.com/privacypolicy/
    note: The website loads Google Tag Manager, and the privacy policy describes advertising cookies.
  no_ads:
    answer: partial
    evidence: https://www.cloudflare.com/privacypolicy/
    note: Funded by paid plans and does not sell personal information, but marketing and advertising partners receive website data to advertise Cloudflare's services.
  independent_audit:
    answer: partial
    evidence: https://developers.cloudflare.com/fundamentals/reference/policies-compliances/compliance-docs/
    note: SOC 2, ISO 27001 and PCI reports exist but are only available to account administrators in the dashboard.
  device_keys:
    answer: no
    evidence: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-mesh/concepts/
    note: All traffic passes through Cloudflare, where Gateway policies are applied. Devices do not encrypt traffic end to end to each other.
  self_hosted_control:
    answer: no
    note: Only Cloudflare's hosted service can be used.
  no_connection_logs:
    answer: partial
    evidence: https://developers.cloudflare.com/cloudflare-one/insights/logs/gateway-logs/
    note: Gateway logs all DNS, network and HTTP activity by default. Admins can turn logging off or keep only blocked requests.
---

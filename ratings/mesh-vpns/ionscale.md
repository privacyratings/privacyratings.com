---
name: ionscale
description: Open-source, self-hosted Tailscale control server with support for multiple tailnets, OIDC login, ACLs and DNS, used with the official Tailscale clients.
website: https://jsiebens.github.io/ionscale/
source: https://github.com/jsiebens/ionscale
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/jsiebens/ionscale/blob/main/LICENSE
    note: BSD-3-Clause.
  no_trackers:
    answer: partial
    evidence: https://jsiebens.github.io/ionscale/
    note: The documentation site uses Plausible, a cookieless analytics service.
  no_ads:
    answer: yes
    evidence: https://github.com/jsiebens/ionscale
    note: Free community project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
  device_keys:
    answer: yes
    evidence: https://tailscale.com/blog/how-tailscale-works
    note: Works with the official Tailscale clients, which create WireGuard keys on each device. The control server only exchanges public keys.
  self_hosted_control:
    answer: yes
    evidence: https://jsiebens.github.io/ionscale/
    note: The whole control server is open source and self-hosted.
---

---
name: Tailscale
description: Mesh VPN built on WireGuard that connects devices into a private network using a hosted coordination server for key exchange and access control, with open-source clients.
website: https://tailscale.com
source: https://github.com/tailscale/tailscale
jurisdiction: CA
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://tailscale.com/opensource
    note: The client daemon is BSD-3-Clause, but the Windows, macOS and iOS GUIs and the hosted coordination server are closed source.
  no_trackers:
    answer: no
    evidence: https://tailscale.com/privacy-policy
    note: The website uses third-party analytics and advertising cookies, and client logging is on by default with an opt-out.
  no_ads:
    answer: partial
    evidence: https://tailscale.com/pricing
    note: Funded by paid plans with no ads in the product, though the website shares cookie data with ad partners for Tailscale's own marketing.
  independent_audit:
    answer: partial
    evidence: https://tailscale.com/security
    note: Latacora conducts regular security audits, but the reports are only available on request.
  device_keys:
    answer: yes
    evidence: https://tailscale.com/blog/how-tailscale-works
    note: Each device creates its own WireGuard key pair. The private key never leaves the device, and DERP relays only forward encrypted packets.
  self_hosted_control:
    answer: partial
    evidence: https://tailscale.com/opensource
    note: Tailscale's coordination server is closed source. The clients can use the open-source, community-maintained Headscale server instead.
  no_connection_logs:
    answer: partial
    evidence: https://tailscale.com/kb/1011/log-mesh-traffic
    note: Clients send logs to Tailscale by default, including connection open and close events. The --no-logs-no-support flag or TS_NO_LOGS_NO_SUPPORT turns this off.
alternatives_page: true
pick: 1
pick_reason: A WireGuard mesh for Windows, macOS, Linux, Android and iOS, with NAT traversal and DERP relays when a direct connection fails. Keys are created on each device, so the coordination server and relays never see traffic. The clients are open source under BSD-3-Clause, ACLs and SSO come built in, and the open-source Headscale server can replace the hosted coordination server for full self-hosting.
---

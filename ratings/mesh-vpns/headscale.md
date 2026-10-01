---
name: Headscale
description: Self-hosted, open-source implementation of the Tailscale coordination server, letting official Tailscale clients join a private network without using Tailscale's hosted service.
website: https://headscale.net
source: https://github.com/juanfont/headscale
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/juanfont/headscale/blob/main/LICENSE
    note: BSD-3-Clause.
  no_trackers:
    answer: yes
    evidence: https://github.com/juanfont/headscale
    note: No telemetry or analytics in the source code, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/juanfont/headscale
    note: Free community project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
  device_keys:
    answer: yes
    evidence: https://github.com/juanfont/headscale#readme
    note: Works with the official Tailscale clients, which create WireGuard keys on each device. The control server only exchanges public keys.
  self_hosted_control:
    answer: yes
    evidence: https://github.com/juanfont/headscale/blob/main/LICENSE
    note: The whole control server is open source and self-hosted.
  no_connection_logs:
    answer: partial
    evidence: https://github.com/juanfont/headscale/issues/2793
    note: Headscale tells clients not to upload logs by default, but official Tailscale clients still contact log.tailscale.com at startup until TS_NO_LOGS_NO_SUPPORT is set.
pick: 2
pick_reason: The open-source, self-hosted replacement for Tailscale's coordination server. The official Tailscale clients connect to it unchanged, so the whole network runs on your own server with no account at Tailscale.
---

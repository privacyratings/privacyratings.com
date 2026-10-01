---
name: WireGuard
description: VPN protocol and implementation built on modern cryptography such as Curve25519 and ChaCha20-Poly1305, included in the Linux kernel and available as apps for other platforms.
website: https://www.wireguard.com
source: https://git.zx2c4.com/wireguard-tools/
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://git.zx2c4.com/wireguard-tools/tree/COPYING
    note: GPL-2.0 for the kernel module and tools; the other implementations and apps use MIT or Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.wireguard.android/latest/
    note: Exodus finds no trackers in the Android app, there is no telemetry in the source code, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://www.wireguard.com/donations/
    note: Free software funded by donations and sponsors, with no ads.
  independent_audit:
    answer: partial
    evidence: https://www.wireguard.com/formal-verification/
    note: Independent academic formal proofs of the protocol and a verified Curve25519 implementation are published, but they are older than three years and no recent code audit report is public.
---

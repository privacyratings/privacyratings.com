---
name: Firezone
description: Zero-trust remote access platform built on WireGuard, with clients, gateways and a control plane for group-based access policies. Mostly offered as a hosted service; self-hosting the control plane is not officially supported.
website: https://www.firezone.dev
source: https://github.com/firezone/firezone
imported_from: awesome-privacy
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/firezone/firezone/blob/main/elixir/LICENSE
    note: Clients and gateway are Apache-2.0; the control plane and admin portal use the Elastic License 2.0, which is not OSI-approved.
  no_trackers:
    answer: no
    evidence: https://www.firezone.dev/privacy-policy
    note: The website uses PostHog analytics and Google Ads tags, and the apps send diagnostics and crash reports.
  no_ads:
    answer: yes
    evidence: https://www.firezone.dev/pricing
    note: Funded by paid plans; the privacy policy states personal information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  device_keys:
    answer: yes
    evidence: https://www.firezone.dev/kb/reference/faq
    note: Traffic is end-to-end encrypted with WireGuard between clients and gateways on your own infrastructure. Firezone states it can never decrypt traffic, including through its relays.
  self_hosted_control:
    answer: partial
    evidence: https://www.firezone.dev/kb/reference/faq
    note: Gateways run on your own infrastructure, but the control plane is source-available and self-hosting it is not supported.
  no_connection_logs:
    answer: partial
    evidence: https://www.firezone.dev/kb/reference/cli/headless-linux
    note: Clients send crash reports to Sentry by default. The --no-telemetry flag or FIREZONE_NO_TELEMETRY turns this off.
jurisdiction: US
---

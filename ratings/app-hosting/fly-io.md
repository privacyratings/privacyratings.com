---
name: Fly.io
description: Platform that runs apps as lightweight virtual machines on its own hardware in regions around the world, deployed with the flyctl command-line tool.
website: https://fly.io
jurisdiction: US
domain: fly.io
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source. The flyctl command-line tool is open source, but the platform is not.
  no_trackers:
    answer: no
    evidence: https://fly.io/legal/privacy-policy/
    note: Marketing and documentation pages use Google Analytics and PostHog; the dashboard does not.
  no_ads:
    answer: partial
    evidence: https://fly.io/legal/privacy-policy/
    note: Funded by paid usage with no ads or data sales, but Google conversion measurement is used for its own advertising.
  independent_audit:
    answer: partial
    evidence: https://fly.io/security/
    note: A SOC 2 Type 2 attestation and third-party penetration tests exist, but reports are only available on request.
  transparency_report:
    answer: partial
    evidence: https://fly.io/legal/privacy-policy/
    note: The privacy statement describes how compelled disclosure requests are handled, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://fly.io/legal/privacy-policy/
    note: The privacy statement says users are notified of disclosures of their information unless prohibited by law or court order.
---

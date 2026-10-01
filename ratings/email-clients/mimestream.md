---
name: Mimestream
description: Closed-source macOS email client for Gmail and Google Workspace accounts that syncs through the Gmail API and supports labels, filters and inbox categories.
website: https://mimestream.com
jurisdiction: US
platforms:
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://mimestream.com/trust/subprocessors
    note: No analytics services are listed among subprocessors or in the privacy policy, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://mimestream.com/pricing/
    note: Funded by paid subscriptions. No ads.
  independent_audit:
    answer: partial
    evidence: https://mimestream.com/trust/assets/Mimestream_CASA_2026.pdf
    note: A CASA Tier 2 assessment by TAC Security is published only as a letter of validation, not a full report.
  openpgp:
    answer: no
    evidence: https://mimestream.com/trust/security-and-privacy
    note: Neither PGP nor S/MIME is supported.
  no_cloud_relay:
    answer: partial
    evidence: https://mimestream.com/trust/private-push
    note: Syncs directly with the Gmail API and keeps tokens on the device, but Private Push notifications, on by default on recent macOS, pass through a Mimestream relay that never receives credentials or message content.
  remote_content_blocked:
    answer: partial
    evidence: https://mimestream.com/help/user-guide/viewing-settings
    note: Remote images can be blocked in settings, and a tracker blocker is available.
  any_provider:
    answer: partial
    evidence: https://mimestream.com/help/user-guide/supported-accounts
    note: Works only with Gmail and Google Workspace accounts.
---

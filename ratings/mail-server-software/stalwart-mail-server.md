---
name: Stalwart
description: Self-hosted mail and collaboration server written in Rust, with JMAP, IMAP, POP3, SMTP, CalDAV, CardDAV and WebDAV support, built-in spam filtering and a web admin interface.
website: https://stalw.art
aliases:
  - Stalwart Mail Server
source: https://github.com/stalwartlabs/stalwart
jurisdiction: GB
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/stalwartlabs/stalwart/blob/main/LICENSES/AGPL-3.0-only.txt
    note: All code is public. Most is AGPL-3.0, and enterprise features in the same repository use the source-available Stalwart Enterprise License, which is not open source.
  no_trackers:
    answer: yes
    evidence: https://stalw.art/legal/privacy
    note: The websites load no third-party analytics, and the self-hosted server does not send data to Stalwart Labs.
  no_ads:
    answer: yes
    evidence: https://stalw.art/pricing/
    note: Funded by paid enterprise licenses and support. The privacy policy says personal information is not sold.
  independent_audit:
    answer: yes
    evidence: https://stalw.art/blog/security-audit/ros-report.pdf
    note: Code review and penetration test by Radically Open Security, full report public.
---

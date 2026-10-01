---
name: Betterbird
description: Fork of Mozilla Thunderbird that follows its Extended Support Releases and adds extra fixes and features. Available for Windows, macOS and Linux.
website: https://www.betterbird.eu
source: https://github.com/Betterbird/thunderbird-patches
jurisdiction: DE
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Betterbird/thunderbird-patches/blob/main/LICENSE
    note: MPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/Betterbird/thunderbird-patches/blob/main/153/mozconfig
    note: Builds are made with telemetry reporting turned off, and the website has no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://www.betterbird.eu/donate/
    note: Funded by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://www.betterbird.eu/faq/
    note: OpenPGP and S/MIME are built in, as in Thunderbird.
  no_cloud_relay:
    answer: yes
    evidence: https://www.betterbird.eu/faq/
    note: Connects directly to mail servers, as Thunderbird does. No vendor service is involved.
  remote_content_blocked:
    answer: yes
    evidence: https://support.mozilla.org/en-US/kb/remote-content-in-messages
    note: Remote content is blocked by default, as in Thunderbird.
  any_provider:
    answer: yes
    evidence: https://support.mozilla.org/en-US/kb/manual-account-configuration
    note: Works with any IMAP, POP3 and SMTP provider.
pick: 2
pick_reason: Open-source (MPL-2.0) fork of Thunderbird with telemetry reporting turned off and built-in OpenPGP and S/MIME. It connects directly to any IMAP, POP3 and SMTP provider and blocks remote content by default.
---

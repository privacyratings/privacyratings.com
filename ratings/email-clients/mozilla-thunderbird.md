---
name: Mozilla Thunderbird
description: Open-source desktop email client for Windows, macOS and Linux with calendar, contacts and built-in OpenPGP and S/MIME encryption.
website: https://www.thunderbird.net
source: https://github.com/mozilla/releases-comm-central
criteria:
  open_source:
    answer: yes
    evidence: https://www.mozilla.org/en-US/MPL/2.0/
    note: MPL-2.0.
  no_trackers:
    answer: partial
    evidence: https://support.mozilla.org/en-US/kb/thunderbird-telemetry
    note: Sends first-party telemetry to Mozilla by default, which can be turned off in settings.
  no_ads:
    answer: yes
    evidence: https://www.thunderbird.net/en-US/donate/
    note: Funded by user donations. No ads.
  independent_audit:
    answer: partial
    evidence: https://posteo.de/en/blog/security-warning-for-thunderbird-users-and-enigmail-users-vulnerabilities-threaten-confidentiality-of-communication
    note: Cure53 audited Thunderbird and Enigmail, but only a summary is public and the audit is more than three years old.
  openpgp:
    answer: yes
    evidence: https://support.mozilla.org/en-US/kb/openpgp-thunderbird-howto-and-faq
    note: OpenPGP and S/MIME are built in.
  no_cloud_relay:
    answer: yes
    evidence: https://www.mozilla.org/en-US/privacy/thunderbird/
    note: Connects directly to mail servers. Mail, contacts and account details stay on the device.
  remote_content_blocked:
    answer: yes
    evidence: https://support.mozilla.org/en-US/kb/remote-content-in-messages
    note: Remote content is blocked by default.
  any_provider:
    answer: yes
    evidence: https://support.mozilla.org/en-US/kb/manual-account-configuration
    note: Works with any IMAP, POP3 and SMTP provider.
imported_from: awesome-privacy
jurisdiction: US
---

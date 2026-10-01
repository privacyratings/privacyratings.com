---
name: Delta Chat
description: Decentralized messenger that uses email servers for delivery, with automatic end-to-end encryption through Autocrypt and OpenPGP. Works with chatmail relays or existing email accounts.
website: https://delta.chat
source: https://github.com/chatmail/core
jurisdiction: DE
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/chatmail/core/blob/main/LICENSE
    note: The core library is MPL-2.0 and the apps are GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.b44t.messenger/latest/
    note: Exodus finds 0 trackers. Usage statistics are only sent if turned on in settings.
  no_ads:
    answer: yes
    evidence: https://delta.chat/en/help#how-are-delta-chat-developments-funded
    note: Funded by public grants and donations. No ads.
  independent_audit:
    answer: yes
    evidence: https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf
    note: Radically Open Security tested rPGP, the OpenPGP library Delta Chat uses, and published the full report.
  openpgp:
    answer: yes
    evidence: https://delta.chat/en/help#which-standards-are-used-for-end-to-end-encryption
    note: End-to-end encryption with Autocrypt and OpenPGP is built in and automatic.
  no_cloud_relay:
    answer: partial
    evidence: https://delta.chat/en/privacy
    note: Connects directly to mail servers, but push notifications on iOS and Android go through a notification proxy run by the developers.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/deltachat/deltachat-android/blob/main/src/main/java/org/thoughtcrime/securesms/FullMsgActivity.java
    note: HTML messages are shown with network loads blocked until the user chooses to load remote content.
  any_provider:
    answer: yes
    evidence: https://delta.chat/en/help#can-i-use-a-classic-email-address-with-delta-chat
    note: Works with any IMAP and SMTP provider, but the address should only be used with chatmail apps.
---

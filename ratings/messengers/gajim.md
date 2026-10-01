---
name: Gajim
description: Desktop XMPP (Jabber) client for Linux, Windows and macOS that works with any standard XMPP server, with group chats, file transfer and optional OMEMO or OpenPGP end-to-end encryption.
website: https://gajim.org
source: https://gitlab.com/gajim/gajim
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/gajim/gajim/-/blob/master/COPYING
    note: GPL-3.0, and it works with open-source XMPP servers.
  no_trackers:
    answer: yes
    evidence: https://gajim.org/privacy/
    note: No analytics or telemetry; the app only checks gajim.org for updates, and crash reports are sent only with the user's approval.
  no_ads:
    answer: yes
    evidence: https://gajim.org/#donate
    note: Free software with no ads, supported by donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_default:
    answer: partial
    evidence: https://gitlab.com/gajim/gajim/-/blob/master/src/gajim/gtk/preference/account.py
    note: OMEMO and OpenPGP are supported, but the default encryption setting for new chats is unencrypted.
  no_phone_number:
    answer: yes
    evidence: https://gajim.org/privacy/
    note: Accounts are XMPP addresses on any server; no phone number is needed.
  metadata_protection:
    answer: no
    evidence: https://gajim.org/privacy/
    note: The user's XMPP server sees contacts, group memberships and who talks to whom.
  decentralized:
    answer: yes
    evidence: https://gajim.org/privacy/
    note: XMPP is federated, and Gajim connects to any server the user chooses.
---

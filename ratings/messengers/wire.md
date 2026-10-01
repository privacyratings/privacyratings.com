---
name: Wire
description: End-to-end encrypted messenger and team collaboration app from Switzerland, with chats, calls and file sharing using Proteus and MLS. Accounts use an email address, and organizations can self-host federated backends.
website: https://wire.com
jurisdiction: CH
source: https://github.com/wireapp
platforms:
  - android
  - ios
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/wireapp/wire-server/blob/develop/LICENSE
    note: The server is AGPL-3.0 and the apps are GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://wire.com/en/privacy-policy
    note: The apps use only opt-in, self-hosted Countly analytics, but the website uses Google Analytics and HubSpot after cookie consent.
  no_ads:
    answer: yes
    evidence: https://wire.com/en/pricing
    note: Funded by paid team and enterprise plans, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_default:
    answer: yes
    evidence: https://wire.com/en/security
    note: Messages, calls and files are end-to-end encrypted by default, and encryption cannot be turned off.
  no_phone_number:
    answer: yes
    evidence: https://wire-docs.wire.com/download/Wire+Security+Whitepaper.pdf
    note: Accounts can be registered with an email address instead of a phone number.
  metadata_protection:
    answer: no
    evidence: https://wire-docs.wire.com/download/Wire+Privacy+Whitepaper.pdf
    note: The server stores each user's connections and conversation memberships.
  decentralized:
    answer: yes
    evidence: https://docs.wire.com/latest/understand/federation/index.html
    note: Organizations can run their own Wire backend, and backends can federate with each other.
---

---
name: XMPP
description: XMPP, also known as Jabber, is an open standard for federated instant messaging maintained by the XMPP Standards Foundation, with many independent clients and servers.
website: https://xmpp.org
source: https://github.com/xsf/xeps
criteria:
  open_source:
    answer: yes
    evidence: https://datatracker.ietf.org/doc/html/rfc6120
    note: Open standard (RFC 6120) with many open source clients and servers.
  no_trackers:
    answer: yes
    evidence: https://github.com/xsf/xmpp.org
    note: The standard defines no telemetry, and the xmpp.org site loads only its own scripts with no analytics.
  no_ads:
    answer: yes
    evidence: https://xmpp.org/about/xmpp-standards-foundation/
    note: Maintained by the non-profit XMPP Standards Foundation, funded by sponsors, with no ads.
  independent_audit:
    answer: n/a
    note: A standard is not audited as a product; audits cover individual clients and servers.
  e2ee_default:
    answer: partial
    evidence: https://xmpp.org/extensions/xep-0384.html
    note: End-to-end encryption comes from the optional OMEMO extension; some clients enable it by default, but the core protocol does not.
  no_phone_number:
    answer: yes
    evidence: https://datatracker.ietf.org/doc/html/rfc6120
    note: Accounts are addresses of the form user@server; no phone number is involved.
  metadata_protection:
    answer: no
    note: Servers store contact lists and see who talks to whom.
  decentralized:
    answer: yes
    evidence: https://datatracker.ietf.org/doc/html/rfc6120
    note: Federated; anyone can run a server that talks to other servers.
imported_from: awesome-privacy
---

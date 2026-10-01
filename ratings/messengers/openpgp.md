---
name: OpenPGP
description: Open standard for public-key encryption and signing of messages and files, defined in RFC 9580. It adds end-to-end encryption to existing channels such as email, through implementations like GnuPG.
website: https://www.openpgp.org
source: https://gitlab.com/openpgp-wg/rfc4880bis
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://www.rfc-editor.org/rfc/rfc9580.html
    note: Open IETF standard with open source implementations such as GnuPG (GPL-3.0).
  no_trackers:
    answer: yes
    evidence: https://www.gnupg.org/privacy-policy.html
    note: The standard has no telemetry, and the GnuPG reference project states it does not track users or share data.
  no_ads:
    answer: yes
    evidence: https://gnupg.org/donate/
    note: The reference implementation GnuPG is funded mainly by donations, with no ads.
  independent_audit:
    answer: n/a
    note: A standard is not audited as a product; audits cover individual implementations.
  e2ee_default:
    answer: partial
    evidence: https://www.rfc-editor.org/rfc/rfc9580.html
    note: Messages are end-to-end encrypted only when both parties have keys and the sender chooses to encrypt; email is sent in plaintext by default.
  no_phone_number:
    answer: yes
    evidence: https://www.rfc-editor.org/rfc/rfc9580.html
    note: There are no accounts; keys carry a user ID, usually an email address, and no phone number.
  metadata_protection:
    answer: no
    note: Encryption covers the message body only; senders, recipients and subject lines of the carrying channel stay visible.
  decentralized:
    answer: yes
    evidence: https://www.rfc-editor.org/rfc/rfc9580.html
    note: No central service; keys are generated locally and messages travel over any channel.
---

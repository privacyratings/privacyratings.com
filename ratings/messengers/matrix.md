---
name: Matrix
description: Open standard and federated network for real-time chat and calls, with end-to-end encryption through the Olm and Megolm protocols. Anyone can run a homeserver, and many clients such as Element support it.
website: https://matrix.org
source: https://github.com/matrix-org/matrix-spec
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/matrix-org/matrix-spec/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://matrix.org/legal/privacy-notice/
    note: The matrix.org homeserver sends account usage analytics to PostHog, and the website uses hosted Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://matrix.org/support/
    note: The non-profit Matrix.org Foundation is funded by donations and organisational memberships, with no ads.
  independent_audit:
    answer: partial
    evidence: https://matrix.org/media/Least%20Authority%20-%20Matrix%20vodozemac%20Final%20Audit%20Report.pdf
    note: A full Least Authority audit of the vodozemac encryption library is public but is older than three years.
  e2ee_default:
    answer: partial
    evidence: https://spec.matrix.org/latest/client-server-api/#end-to-end-encryption
    note: Encryption is an optional room setting in the protocol; major clients enable it for private chats, but public rooms are unencrypted.
  no_phone_number:
    answer: yes
    evidence: https://matrix.org/legal/privacy-notice/
    note: No phone number is needed; on the matrix.org homeserver a verified phone number is optional.
  metadata_protection:
    answer: no
    note: Homeservers see room membership, senders and timestamps, and share them with every server in a room.
  decentralized:
    answer: yes
    evidence: https://spec.matrix.org/latest/
    note: Federated protocol; anyone can run a homeserver.
imported_from: awesome-privacy
jurisdiction: GB
---

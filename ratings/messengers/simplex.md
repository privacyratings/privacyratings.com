---
name: SimpleX
description: End-to-end encrypted messenger that has no user identifiers of any kind, not even random ones. Messages pass through relay servers that anyone can run.
website: https://simplex.chat
source: https://github.com/simplex-chat/simplex-chat
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/simplex-chat/simplex-chat/blob/stable/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://simplex.chat/privacy/
    note: The privacy policy states client apps contain no tracking or analytics code.
  no_ads:
    answer: yes
    evidence: https://simplex.chat/faq/
    note: Funded by venture investment and donations, with no ads; the privacy policy states user data is not sold or monetized.
  independent_audit:
    answer: partial
    evidence: https://github.com/simplex-chat/simplex-chat/blob/stable/docs/SimpleX_Design_Review_2024_Summary_Report_12_08_2024.pdf
    note: Trail of Bits reviewed the protocol design, but only a summary report is public; the earlier full audit is older than three years.
  e2ee_default:
    answer: yes
    evidence: https://simplex.chat/privacy/
    note: All direct and group messages and files are end-to-end encrypted with a quantum-resistant double ratchet.
  no_phone_number:
    answer: yes
    evidence: https://simplex.chat/privacy/
    note: No phone number, email or user ID is needed.
  metadata_protection:
    answer: yes
    evidence: https://simplex.chat/privacy/
    note: There are no user identifiers; each contact uses separate pairwise message queues, and private routing hides the sender IP from the recipient's server.
  decentralized:
    answer: yes
    evidence: https://simplex.chat/docs/server.html
    note: Anyone can run SMP and XFTP relay servers, and users on different servers can message each other.
imported_from: awesome-privacy
jurisdiction: GB
---

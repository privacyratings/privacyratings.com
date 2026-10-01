---
name: Himalaya
description: Command-line email client that manages mail over IMAP, JMAP, SMTP, Maildir, the Gmail API and Microsoft Graph, with composing and reading handled by the companion MML tool.
website: https://github.com/pimalaya/himalaya
source: https://github.com/pimalaya/himalaya
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/pimalaya/himalaya/blob/master/LICENSE-MIT
    note: MIT or Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/pimalaya/himalaya
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/pimalaya/himalaya/blob/master/README.md
    note: Funded by NLnet grants and donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: partial
    evidence: https://github.com/pimalaya/mml/blob/master/README.md
    note: PGP signing and encryption are handled by the separate MML tool from the same project, built with its gpg feature.
  no_cloud_relay:
    answer: yes
    evidence: https://github.com/pimalaya/himalaya/blob/master/README.md
    note: Connects directly to mail servers. Passwords are read from a local password manager command.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/pimalaya/mml/blob/master/README.md
    note: Command-line client that does not load remote content. HTML is rendered to plain text.
  any_provider:
    answer: yes
    evidence: https://github.com/pimalaya/himalaya/blob/master/README.md
    note: Works with any IMAP, JMAP and SMTP provider, plus Gmail and Microsoft 365 through their APIs.
---

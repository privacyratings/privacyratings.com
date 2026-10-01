---
name: SpamScanner
description: Spam, phishing and malware scanner for email written in Node.js by the Forward Email team, used as a library or a command-line tool on your own server.
website: https://spamscanner.net
source: https://github.com/spamscanner/spamscanner
disclosure: Privacy Ratings is maintained by the team behind Forward Email, which also makes SpamScanner. This entry is scored by the same criteria as every other entry in this category, and changes to it are reviewed under the published conflict-of-interest rules.
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/spamscanner/spamscanner/blob/master/LICENSE
    note: Published under the Business Source License 1.1, which is not OSI-approved and bars offering it as a commercial spam detection service. The license names Apache 2.0 as its change license.
  no_trackers:
    answer: yes
    evidence: https://github.com/spamscanner/spamscanner
    note: No telemetry or analytics in the source code. The Forward Email reputation lookup is off by default, and hostnames of links in scanned mail are checked against Cloudflare's 1.1.1.3 resolver.
  no_ads:
    answer: yes
    evidence: https://github.com/spamscanner/spamscanner
    note: Free software distributed through npm and GitHub, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
pick: 1
pick_reason: Self-hosted spam, phishing and malware scanning for Node.js with no telemetry, built by the Forward Email team and used to filter Forward Email's mail.
---

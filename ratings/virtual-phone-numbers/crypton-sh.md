---
name: Crypton.sh
description: Phone numbers backed by physical SIM cards hosted in the cloud, for receiving and sending SMS through a web interface, API or Android app, plus eSIM data plans. Stored messages are encrypted with a user key.
website: https://crypton.sh
domain: crypton.sh
imported_from: awesome-privacy
criteria:
  open_source:
    answer: partial
    evidence: https://gitlab.com/rinzler-labs/crypton-android-app/-/blob/main/LICENSE
    note: The Android app is GPL-3.0 and the self-hosted BYOD platform is source-available; the main service is closed source.
  no_trackers:
    answer: partial
    evidence: https://gitlab.com/rinzler-labs/crypton-android-app/-/blob/main/app/src/main/kotlin/sh/crypton/app/CryptonApplication.kt
    note: No third-party advertising trackers, but store builds of the Android app send crash reports to a self-hosted Bugsink server.
  no_ads:
    answer: yes
    evidence: https://crypton.sh/privacy
    note: Paid service; the privacy policy states data is not sold or used for advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://crypton.sh/transparency
    note: Publishes yearly counts of government and law enforcement requests and whether data was provided.
  user_notice:
    answer: partial
    evidence: https://crypton.sh/transparency
    note: Affected account IDs are listed in the transparency report for users to check, but there is no promise of direct notice.
jurisdiction: GB
source: https://gitlab.com/rinzler-labs
---

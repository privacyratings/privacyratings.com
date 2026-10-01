---
name: Edison Mail
description: Closed-source email client for iOS, Android and macOS from Edison Software, an affiliate of YipitData, that sorts messages into categories such as packages, travel and receipts.
website: https://www.edisonmail.com
jurisdiction: US
platforms:
  - ios
  - android
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.easilydo.mail/latest/
    note: Exodus finds 7 trackers in the Android app, including Google AdMob, Google Analytics, Firebase Analytics and Mixpanel, and the website loads Google, Facebook, LinkedIn and TikTok trackers.
  no_ads:
    answer: no
    evidence: https://www.edisonmail.com/privacy
    note: The privacy policy describes creating de-identified data from commercial emails and selling it to business subscribers, and using data to tailor ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: no
    note: No PGP or S/MIME support is documented.
  no_cloud_relay:
    answer: no
    evidence: https://mailsupport.edison.tech/hc/en-us/articles/360016157331-Does-Edison-store-my-messages
    note: Commercial messages such as receipts, shipments and travel alerts are processed and stored on Edison servers.
  remote_content_blocked:
    answer: partial
    evidence: https://www.edisonmail.com/privacy-commitments
    note: Read receipt tracking pixels are blocked, but other remote images still load.
  any_provider:
    answer: yes
    evidence: https://mailsupport.edison.tech/hc/en-us/articles/115000591046-Which-types-of-accounts-does-Edison-Mail-support
    note: Works with any IMAP provider, plus Gmail, Outlook and Exchange accounts. POP3 is not supported.
---

---
name: Keystone
description: Air-gapped hardware wallet that signs transactions by QR code and works with third-party software wallets. The Keystone 3 Pro firmware and hardware schematics are published.
website: https://keyst.one
source: https://github.com/KeystoneHQ/keystone3-firmware
jurisdiction: HK
criteria:
  open_source:
    answer: partial
    evidence: https://keyst.one/open-source
    note: The Keystone 3 firmware is MIT licensed, but some third-party chip vendor libraries are not open.
  no_trackers:
    answer: no
    evidence: https://keyst.one/privacy-policy
    note: The privacy policy names Google Analytics and advertising pixels, and the website loads Google Tag Manager, Mixpanel and the Facebook pixel.
  no_ads:
    answer: partial
    evidence: https://keyst.one/privacy-policy
    note: Funded by hardware sales, but the privacy policy says site use, purchases and ad interactions are shared with advertising partners. It states personal data is not sold.
  independent_audit:
    answer: partial
    evidence: https://keyst.one/open-source
    note: Keystone names SlowMist and Keylabs as reviewers of the Keystone 3 Pro firmware and hardware, but the full reports are not linked.
---

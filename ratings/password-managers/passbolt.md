---
name: Passbolt
description: Open source password manager for teams built on OpenPGP end-to-end encryption, with browser extensions, mobile and desktop apps. It can be self-hosted or used as a hosted cloud service.
website: https://www.passbolt.com
domain: www.passbolt.com
imported_from: awesome-privacy
source: https://github.com/passbolt/passbolt_api
jurisdiction: LU
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/passbolt/passbolt_api/blob/master/LICENSE.txt
    note: The Community Edition server and apps are AGPL-3.0, but Pro and Cloud features are proprietary.
  no_trackers:
    answer: no
    evidence: https://www.passbolt.com/privacy
    note: The website loads Google Tag Manager, and the privacy policy lists Google Analytics, Matomo, Plausible, Google Ads and LinkedIn.
  no_ads:
    answer: yes
    evidence: https://www.passbolt.com/pricing/pro
    note: Funded by paid Pro and Cloud plans, and the privacy policy says personal information is not sold.
  independent_audit:
    answer: yes
    evidence: https://www.passbolt.com/docs/files/PBL-13-report.pdf
    note: Full Cure53 and Quarkslab reports are published, including an audit of the version 5 browser extension and API.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee_vault:
    answer: yes
    evidence: https://www.passbolt.com/security
    note: Secrets are end-to-end encrypted with OpenPGP keys held by each user.
  self_host_or_local:
    answer: yes
    evidence: https://www.passbolt.com/docs/hosting/install/
    note: The server can be self-hosted.
  export:
    answer: yes
    evidence: https://www.passbolt.com/docs/user/basic-features/browser/export/
    note: All resources can be exported to KDBX, or to CSV when an administrator allows it.
imported_name: PassBolt
---

---
name: Dashlane
description: Password manager from Dashlane with browser extensions and mobile apps, end-to-end encrypted sync, passkey support and dark web monitoring. The mobile app source code is published under a non-commercial license.
website: https://www.dashlane.com
mainstream: true
jurisdiction: US
domain: app.dashlane.com
source: https://github.com/Dashlane/android-apps
platforms:
  - android
  - ios
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Dashlane/android-apps/blob/main/LICENSE.md
    note: The Android and Apple app sources are published under CC BY-NC 4.0, which is not OSI-approved. The server is closed.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.dashlane/latest/
    note: The Android app contains Adjust and Sentry, and the privacy policy says the website uses Google Analytics.
  no_ads:
    answer: partial
    evidence: https://www.dashlane.com/privacy
    note: Funded by subscriptions, but the privacy policy says Dashlane and third-party advertising partners use personal data for interest-based advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee_vault:
    answer: yes
    evidence: https://www.dashlane.com/security
    note: "Zero-knowledge design: vault data is encrypted on the device and Dashlane cannot read it."
  self_host_or_local:
    answer: partial
    evidence: https://support.dashlane.com/hc/en-us/articles/202625092-Export-your-data-from-Dashlane
    note: Vaults are stored only in the Dashlane cloud. Data can be exported.
  export:
    answer: yes
    evidence: https://support.dashlane.com/hc/en-us/articles/202625092-Export-your-data-from-Dashlane
    note: Exports to CSV, an encrypted DASH file, or through the Credential Exchange protocol.
---

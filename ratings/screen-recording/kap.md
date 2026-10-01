---
name: Kap
description: Open-source screen recorder for macOS built with Electron. It exports recordings as GIF, MP4, WebM or APNG and supports plugins for sharing to other services.
website: https://getkap.co
alternatives_page: true
source: https://github.com/wulkano/Kap
platforms:
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/wulkano/Kap/blob/main/LICENSE.md
    note: MIT.
  no_trackers:
    answer: no
    evidence: https://github.com/wulkano/Kap/blob/main/main/utils/sentry.ts
    note: Crash and error reports are sent to Sentry by default and can be turned off in the settings.
  no_ads:
    answer: yes
    evidence: https://getkap.co
    note: Free open-source app with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_by_default:
    answer: yes
    evidence: https://getkap.co
    note: Recordings are exported to local files. Uploading to services such as Giphy or Streamable is done through optional plugins.
  no_account_needed:
    answer: yes
    evidence: https://getkap.co
    note: No account is needed.
---

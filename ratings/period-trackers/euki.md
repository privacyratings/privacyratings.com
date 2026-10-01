---
name: Euki
description: Open source sexual and reproductive health app from a US nonprofit, with period tracking, reminders and health information. Data stays on the device, with an optional PIN.
website: https://eukiapp.org
source: https://github.com/Euki-Inc/Euki-Android
jurisdiction: US
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Euki-Inc/Euki-Android/blob/main/LICENSE.md
    note: GPL-3.0 for the Android and iOS apps.
  no_trackers:
    answer: no
    evidence: https://eukiapp.org
    note: The Exodus report finds no trackers in the Android app, but the eukiapp.org website loads Google Ads conversion tags.
  no_ads:
    answer: yes
    evidence: https://eukiapp.org/privacy-faqs-resources
    note: Free app from a donation-funded nonprofit, with no ads and no data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_storage:
    answer: yes
    evidence: https://eukiapp.org/privacy-faqs-resources
    note: All data is stored only on the device, with no servers or cloud storage.
  no_account_needed:
    answer: yes
    evidence: https://eukiapp.org/privacy-faqs-resources
    note: No accounts and no email collected.
---

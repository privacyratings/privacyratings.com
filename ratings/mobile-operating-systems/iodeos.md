---
name: iodéOS
description: Android-based mobile operating system derived from LineageOS, without Google apps, with microG and a built-in blocker that filters ads and trackers across all apps.
website: https://iode.tech
source: https://gitlab.iode.tech
jurisdiction: FR
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.iode.tech/os/public/blocker/iode/-/blob/main/LICENSE
    note: Based on LineageOS under Apache-2.0; the iodé blocker app is AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://iode.tech/privacy-policy/
    note: No third-party trackers; the website uses self-hosted Matomo analytics by default.
  no_ads:
    answer: yes
    evidence: https://iode.tech/documentation/faq/
    note: Funded by sales of phones with iodéOS preinstalled and by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

---
name: Jitsi
description: Open source video conferencing that runs in the browser without an account, with desktop and mobile apps. It can be self-hosted or used through the free meet.jit.si service run by 8x8.
website: https://jitsi.org
source: https://github.com/jitsi/jitsi-meet
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/jitsi/jitsi-meet/blob/master/LICENSE
    note: Apache-2.0 and MIT.
  no_trackers:
    answer: no
    evidence: https://meet.jit.si/config.js
    note: The public meet.jit.si service sends usage events to Amplitude analytics.
  no_ads:
    answer: yes
    evidence: https://jitsi.org/meet-jit-si-privacy/
    note: Developed and funded by 8x8, with no ads; the privacy notice states personal information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee:
    answer: partial
    evidence: https://jitsi.org/security/
    note: End-to-end encryption is optional and must be turned on in each meeting.
  no_account_needed:
    answer: partial
    evidence: https://jitsi.org/security/
    note: On meet.jit.si the person creating the room must sign in; guests join from a link without an account.
  self_hostable:
    answer: yes
    evidence: https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-quickstart/
    note: Official self-hosting guide and Debian packages.
jurisdiction: US
---

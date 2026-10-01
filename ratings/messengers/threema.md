---
name: Threema
description: Paid end-to-end encrypted messenger from Switzerland that works with a random Threema ID instead of a phone number. The apps are open source; the server is proprietary.
website: https://threema.com
imported_from: awesome-privacy
source: https://github.com/threema-ch
jurisdiction: CH
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/threema-ch/threema-android/blob/main/LICENSE.txt
    note: The apps are AGPL-3.0; the server is closed source.
  no_trackers:
    answer: yes
    evidence: https://threema.com/en/why-threema/privacy
    note: Threema states it refrains from advertising and tracking users; the website uses only a first-party affiliate cookie.
  no_ads:
    answer: yes
    evidence: https://threema.com/en/why-threema/privacy
    note: Funded by app purchases and business licenses, with no ads or data trading.
  independent_audit:
    answer: yes
    evidence: https://threema.com/assets/6-resources/audits/3ma-03-report.v3.pdf
    note: Cure53 published a full audit report of the desktop app.
  e2ee_default:
    answer: yes
    evidence: https://threema.com/en/why-threema/security
    note: All messages, media, calls and group data are end-to-end encrypted.
  no_phone_number:
    answer: yes
    evidence: https://threema.com/en/why-threema/privacy
    note: No phone number or email address is required; accounts use a random Threema ID.
  metadata_protection:
    answer: partial
    evidence: https://threema.com/en/why-threema/privacy
    note: Group memberships stay on devices and messages are deleted after delivery, but the server routes messages by sender and recipient ID.
  decentralized:
    answer: partial
    evidence: https://threema.com/en/products/onprem
    note: Organizations can self-host with Threema OnPrem, but servers do not federate.
---

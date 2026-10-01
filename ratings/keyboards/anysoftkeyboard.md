---
name: AnySoftKeyboard
description: Open source keyboard for Android with add-on packs for languages, layouts and themes, gesture typing, voice input and a clipboard manager.
website: https://anysoftkeyboard.github.io
platforms:
  - android
source: https://github.com/AnySoftKeyboard/AnySoftKeyboard
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/AnySoftKeyboard/AnySoftKeyboard/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.menny.android.anysoftkeyboard/latest/
    note: Exodus found no trackers, and the app has no network permission.
  no_ads:
    answer: yes
    evidence: https://github.com/AnySoftKeyboard/AnySoftKeyboard/blob/main/.github/FUNDING.yml
    note: Funded through GitHub Sponsors and PayPal donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://github.com/AnySoftKeyboard/AnySoftKeyboard/blob/main/ime/app/src/main/AndroidManifest.xml
    note: The app does not request the internet permission.
---

---
name: Gboard
description: Google's keyboard app for Android and iOS, with glide typing, voice typing, built-in Google search, translation, emoji and GIF search.
website: https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin
aliases:
  - Google Keyboard
mainstream: true
jurisdiction: US
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://support.google.com/gboard/answer/12373137
    note: Exodus found no third-party trackers, but Gboard sends federated learning data from typing to Google by default, which can be turned off.
  no_ads:
    answer: no
    evidence: https://policies.google.com/technologies/ads
    note: The app shows no ads, but it is a free Google product funded by Google's advertising business.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: no
    evidence: https://support.google.com/gboard/answer/12373137
    note: Has network access and sends learnings from typing to Google through federated learning by default.
---

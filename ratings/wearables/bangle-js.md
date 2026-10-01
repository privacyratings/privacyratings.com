---
name: Bangle.js
description: Open source, hackable smartwatch from Espruino that runs JavaScript apps, with an app loader in the browser and an Android companion based on Gadgetbridge.
website: https://banglejs.com
source: https://github.com/espruino/Espruino
platforms:
  - web
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/espruino/Espruino/blob/master/LICENSE
    note: MPL-2.0 firmware. Apps in the BangleApps repository are MIT.
  no_trackers:
    answer: no
    evidence: https://www.espruino.com/Privacy
    note: The Espruino website uses Google Analytics. App analytics in the App Loader are opt-in.
  no_ads:
    answer: yes
    evidence: https://shop.espruino.com/banglejs2
    note: Funded by hardware sales, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

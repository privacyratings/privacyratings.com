---
name: Blockstream Jade
description: Open-source Bitcoin and Liquid hardware wallet from Blockstream, with a camera for air-gapped QR signing and a virtual secure element that splits PIN protection between the device and a remote oracle server.
website: https://blockstream.com/jade/
source: https://github.com/Blockstream/Jade
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Blockstream/Jade/blob/master/COPYING
    note: GPL-3.0 for the firmware as a whole, with some components under MIT. The PIN oracle server code is also public.
  no_trackers:
    answer: no
    note: The blockstream.com website loads Google Tag Manager and Google Analytics.
  no_ads:
    answer: yes
    evidence: https://blockstream.com/privacy
    note: Funded by hardware sales with no ads. The privacy policy states collected personal information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

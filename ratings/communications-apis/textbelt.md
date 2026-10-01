---
name: Textbelt
description: Simple SMS API with a paid hosted service and an open-source self-hosted version that sends through carrier email-to-SMS gateways.
website: https://textbelt.com
source: https://github.com/typpo/textbelt
license: MIT
jurisdiction: US
domain: textbelt.com
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/typpo/textbelt/blob/master/LICENSE
    note: The self-hosted version is MIT-licensed. It uses a different, free sending method, and the code of the paid hosted service is not public.
  no_trackers:
    answer: no
    note: The website loads analytics.js with a Google Analytics ID.
---

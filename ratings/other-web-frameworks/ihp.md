---
name: IHP
description: Batteries-included Haskell web framework from digitally induced with type-checked SQL, HSX templates and a development IDE. Some features require a paid IHP Pro or Business license.
website: https://ihp.digitallyinduced.com
source: https://github.com/digitallyinduced/ihp
jurisdiction: DE
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: partial
    evidence: https://ihp.digitallyinduced.com/Pricing
    note: The core is MIT-licensed, but IHP Pro and Business features are sold under commercial licenses.
  no_trackers:
    answer: no
    evidence: https://github.com/digitallyinduced/ihp/blob/master/ihp-ide/IHP/Telemetry.hs
    note: The development server sends telemetry by default until IHP_TELEMETRY_DISABLED is set, and the website loads the Reddit Pixel, Plausible and datakant analytics.
  no_ads:
    answer: partial
    evidence: https://ihp.digitallyinduced.com/Pricing
    note: Funded by paid IHP Pro and Business licenses, but the website loads the Reddit Pixel for ad retargeting.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

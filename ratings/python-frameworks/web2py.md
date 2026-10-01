---
name: web2py
description: Full-stack Python web framework with a database abstraction layer, a web-based development interface and security defaults, designed to run without installation.
website: https://web2py.com
source: https://github.com/web2py/web2py
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/web2py/web2py/blob/master/LICENSE.web2py.txt
    note: LGPL-3.0-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/web2py/web2py
    note: No telemetry in the framework source code, and the website has no third-party trackers. The scaffold app only loads analytics when a developer sets a tracking ID.
  no_ads:
    answer: yes
    evidence: https://github.com/web2py/web2py
    note: Volunteer-maintained open-source project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

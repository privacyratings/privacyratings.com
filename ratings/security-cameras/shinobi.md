---
name: Shinobi
description: Self-hosted video surveillance and recording software written in Node.js, with a web interface, motion and object detection plugins, and paid Pro licenses.
website: https://shinobi.video
source: https://gitlab.com/Shinobi-Systems/Shinobi
platforms:
  - linux
  - windows
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://gitlab.com/Shinobi-Systems/Shinobi/-/blob/master/LICENSE.md
    note: The source is public under the Shinobi license, which is not OSI-approved and requires a paid license for commercial use.
  no_trackers:
    answer: no
    evidence: https://shinobi.video
    note: The shinobi.video website loads the third-party Tidio chat widget, and no privacy policy is published.
  no_ads:
    answer: yes
    evidence: https://licenses.shinobi.video/
    note: Funded by paid licenses and support, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

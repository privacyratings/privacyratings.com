---
name: CakePHP
description: PHP web framework following the model-view-controller pattern, with an ORM, code generation and conventions over configuration.
website: https://cakephp.org
source: https://github.com/cakephp/cakephp
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/cakephp/cakephp/blob/5.x/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: no
    evidence: https://cakephp.org/
    note: cakephp.org loads Google Analytics and the Facebook SDK.
  no_ads:
    answer: yes
    evidence: https://cakephp.org/
    note: Supported by the Cake Software Foundation, sponsors such as CakeDC, and donations, with no ads.
  independent_audit:
    answer: partial
    evidence: https://wiki.mozilla.org/images/4/40/Cakephp-report.pdf
    note: NCC Group audited CakePHP for the Mozilla Secure Open Source program; the full report is older than three years.
platforms:
  - linux
  - macos
  - windows
---

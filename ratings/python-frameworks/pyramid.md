---
name: Pyramid
description: Python web framework from the Pylons Project that scales from single-file apps to large applications, with a choice of templating and database layers.
website: https://trypyramid.com
source: https://github.com/Pylons/pyramid
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Pylons/pyramid/blob/main/LICENSE.txt
    note: Licensed under the BSD-derived Repoze Public License.
  no_trackers:
    answer: no
    evidence: https://trypyramid.com/
    note: No telemetry in the framework, but trypyramid.com loads Google Analytics.
  no_ads:
    answer: partial
    evidence: https://docs.pylonsproject.org/projects/pyramid/en/latest/
    note: A volunteer project with no ads in the framework, but the documentation hosted on Read the Docs shows EthicalAds.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

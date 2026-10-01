---
name: Markor
description: Open source Android text editor and notebook for Markdown, todo.txt and plain-text files stored locally. Works offline and can use any sync app for the files.
website: https://github.com/gsantner/markor
source: https://github.com/gsantner/markor
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/gsantner/markor/blob/master/LICENSE.txt
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/net.gsantner.markor/latest/
    note: Exodus finds no trackers, and the app does not connect to the internet unless notes reference external resources.
  no_ads:
    answer: yes
    evidence: https://github.com/gsantner/markor
    note: Free app with no ads, as stated in the project README.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

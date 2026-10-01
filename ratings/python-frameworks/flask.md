---
name: Flask
description: Lightweight WSGI web framework for Python, built on Werkzeug and Jinja, that leaves databases and other components to extensions.
website: https://flask.palletsprojects.com
source: https://github.com/pallets/flask
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/pallets/flask/blob/main/LICENSE.txt
    note: BSD-3-Clause licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/pallets/flask
    note: No telemetry in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: partial
    evidence: https://flask.palletsprojects.com/en/stable/
    note: Funded by donations to Pallets, but the documentation hosted on Read the Docs shows EthicalAds.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

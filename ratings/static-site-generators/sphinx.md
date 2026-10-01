---
name: Sphinx
description: Documentation generator written in Python that builds HTML, PDF, ePub and other formats from reStructuredText or Markdown, with cross-references and API docs extracted from code.
website: https://www.sphinx-doc.org
source: https://github.com/sphinx-doc/sphinx
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/sphinx-doc/sphinx/blob/master/LICENSE.rst
    note: BSD-2-Clause licensed.
  no_trackers:
    answer: partial
    evidence: https://docs.readthedocs.com/platform/stable/traffic-analytics.html
    note: The tool has no telemetry, but sphinx-doc.org is hosted on Read the Docs, whose script records page views for Read the Docs traffic analytics and loads EthicalAds.
  no_ads:
    answer: partial
    evidence: https://docs.readthedocs.com/platform/stable/advertising/ethical-advertising.html
    note: The documentation site on Read the Docs shows contextual EthicalAds; the software itself has no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

---
name: BookStack
description: Self-hosted wiki platform that organizes documentation into shelves, books, chapters and pages. Built with PHP and Laravel, with a WYSIWYG and Markdown editor, search and role-based permissions.
website: https://www.bookstackapp.com
source: https://codeberg.org/bookstack/bookstack
jurisdiction: GB
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/bookstack/bookstack/src/branch/development/LICENSE
    note: MIT.
  no_trackers:
    answer: partial
    evidence: https://www.bookstackapp.com/about/project-faq/
    note: The project website uses a self-hosted Plausible instance for analytics. No telemetry is documented for the software.
  no_ads:
    answer: yes
    evidence: https://www.bookstackapp.com/about/project-faq/
    note: Funded by donations, sponsorships and paid support services, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

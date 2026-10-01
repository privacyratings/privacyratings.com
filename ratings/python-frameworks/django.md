---
name: Django
description: Batteries-included Python web framework with an ORM, admin interface, templates and authentication.
website: https://www.djangoproject.com
source: https://github.com/django/django
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/django/django/blob/main/LICENSE
    note: BSD-3-Clause licensed.
  no_trackers:
    answer: yes
    evidence: https://www.djangoproject.com/
    note: No third-party trackers, and the framework has no telemetry. The website's Plausible analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://www.djangoproject.com/fundraising/
    note: Funded by donations and corporate members of the Django Software Foundation, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

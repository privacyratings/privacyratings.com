---
name: Laravel
description: PHP web framework with the Eloquent ORM, Blade templates, queues and a set of first-party packages and tools.
website: https://laravel.com
source: https://github.com/laravel/framework
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/laravel/framework/blob/13.x/LICENSE.md
    note: MIT-licensed.
  no_trackers:
    answer: no
    evidence: https://laravel.com/
    note: laravel.com loads Google Tag Manager, HubSpot, Ahrefs and Fathom analytics, and an OpenAI tracking script.
  no_ads:
    answer: yes
    evidence: https://laravel.com/cloud
    note: Developed by Laravel and funded by its paid hosting and tooling products, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

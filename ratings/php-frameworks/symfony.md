---
name: Symfony
description: PHP framework and set of reusable components for building web applications, APIs and console tools.
website: https://symfony.com
source: https://github.com/symfony/symfony
jurisdiction: FR
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/symfony/symfony/blob/8.2/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://symfony.com/
    note: No telemetry in the framework or Symfony CLI source code, but symfony.com loads the Blackfire real-user monitoring script.
  no_ads:
    answer: yes
    evidence: https://symfony.com/backers
    note: Funded by SensioLabs and company backers, with no ads.
  independent_audit:
    answer: partial
    evidence: https://ostif.org/wp-content/uploads/2026/06/OSTIF-Symfony-YAML-Report-v1.2.pdf
    note: Shielder audited only the YAML component through OSTIF and published the full report.
platforms:
  - linux
  - macos
  - windows
---

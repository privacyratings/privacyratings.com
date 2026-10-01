---
name: Plausible Analytics
description: Lightweight web analytics that counts visits without cookies and shows aggregate stats on a single dashboard. Available as a hosted service or as the self-hosted Community Edition.
website: https://plausible.io
source: https://github.com/plausible/analytics
domain: plausible.io
jurisdiction: EE
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/plausible/analytics/blob/master/extra/COPYING.txt
    note: The Community Edition is AGPL-3.0, but code for some hosted-only features in the extra directory is proprietary.
  no_trackers:
    answer: partial
    evidence: https://plausible.io/privacy
    note: The website uses Plausible's own cookieless analytics and no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://plausible.io/privacy
    note: Funded by subscriptions. The privacy policy states data is never sold or used for advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_cookies:
    answer: yes
    evidence: https://plausible.io/data-policy
    note: The script sets no cookies and generates no persistent visitor identifiers.
  no_personal_data:
    answer: yes
    evidence: https://plausible.io/data-policy
    note: Raw IP addresses and User-Agent strings are not stored, and a daily visitor hash is used instead.
  self_hostable:
    answer: yes
    evidence: https://plausible.io/self-hosted-web-analytics
    note: The Community Edition is officially offered for self-hosting.
---

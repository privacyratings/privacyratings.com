---
name: Formbricks
description: Open-source survey and form platform for link, website and in-app surveys, from Formbricks GmbH in Germany. Available as a hosted cloud service or self-hosted with Docker.
website: https://formbricks.com
source: https://github.com/formbricks/formbricks
jurisdiction: DE
domain: app.formbricks.com
platforms:
  - web
pick: 1
pick_reason: Open-source surveys and forms for links, websites and apps, as a replacement for Typeform, SurveyMonkey and Google Forms. Made by a company in Germany, with a hosted service or self-hosting with Docker.
criteria:
  open_source:
    answer: partial
    evidence: https://raw.githubusercontent.com/formbricks/formbricks/main/LICENSE
    note: The core is AGPL-3.0, but enterprise features in the ee directory are under a separate commercial license.
  no_trackers:
    answer: no
    evidence: https://formbricks.com/privacy-policy
    note: The cloud service uses PostHog for product analytics and Sentry for error tracking. Self-hosted instances send telemetry unless it is disabled.
  no_ads:
    answer: yes
    evidence: https://formbricks.com/privacy-policy
    note: Funded by paid plans and enterprise licenses. The privacy policy states personal data is not sold.
  independent_audit:
    answer: partial
    evidence: https://formbricks.com/soc2
    note: Reports SOC 2 Type II compliance and annual penetration tests. The reports are only shared through its Trust Center.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---

---
name: PostHog
description: Product analytics platform with web analytics, session replay, feature flags, experiments and surveys. Offered as PostHog Cloud or as an unsupported self-hosted deployment.
website: https://posthog.com
source: https://github.com/PostHog/posthog
domain: posthog.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/PostHog/posthog/blob/master/LICENSE
    note: MIT, except code in the ee directory, which is under a proprietary license.
  no_trackers:
    answer: no
    evidence: https://posthog.com/privacy
    note: The privacy policy describes marketing cookies and sharing account information with third-party advertising platforms such as LinkedIn.
  no_ads:
    answer: yes
    evidence: https://posthog.com/privacy
    note: Funded by usage-based subscriptions. The privacy policy states customer data is not sold.
  independent_audit:
    answer: yes
    evidence: https://posthog.com/security/soc2-report-2026.pdf
    note: The full SOC 2 Type 2 report from an independent service auditor is public.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_cookies:
    answer: partial
    evidence: https://posthog.com/tutorials/cookieless-tracking
    note: The script sets a first-party cookie and localStorage by default, and a cookieless mode can be turned on.
  no_personal_data:
    answer: no
    evidence: https://posthog.com/docs/privacy/data-collection
    note: Client IP addresses are captured by default, except for EU organizations, and can be discarded in settings.
  self_hostable:
    answer: partial
    evidence: https://posthog.com/docs/self-host
    note: Self-hosting with Docker is possible but officially unsupported.
---

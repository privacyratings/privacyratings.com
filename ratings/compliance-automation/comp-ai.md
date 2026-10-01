---
name: Comp AI
description: Open-source compliance automation platform that helps companies prepare for SOC 2, ISO 27001, HIPAA and GDPR audits by collecting evidence, managing policies and tracking controls. It is offered as a hosted service or can be self-hosted.
website: https://www.trycomp.ai
source: https://github.com/trycompai/comp
domain: app.trycomp.ai
jurisdiction: US
platforms:
  - web
pick: 1
pick_reason: Open-source compliance automation for SOC 2, ISO 27001, HIPAA and GDPR, with evidence collection, policies and control tracking. Most of the code is AGPL-3.0, and it can be self-hosted, so compliance data does not have to live with a closed vendor.
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/trycompai/comp/blob/main/LICENSE
    note: Open core. Most of the code is AGPL-3.0, but enterprise features in the ee directory need a commercial license.
  no_trackers:
    answer: no
    evidence: https://www.trycomp.ai/legal/privacy-policy
    note: The website uses Google Analytics, Google Ads and PostHog session recording.
  no_ads:
    answer: partial
    evidence: https://www.trycomp.ai/legal/privacy-policy
    note: Paid service with no ads, and personal information is not sold, but Google Ads conversion tracking runs on the website.
  independent_audit:
    answer: partial
    evidence: https://security.trycomp.ai
    note: The trust center lists SOC 2 Type 2 and ISO 27001 compliance, but the reports are only available on request.
  transparency_report:
    answer: no
    evidence: https://www.trycomp.ai/legal/privacy-policy
    note: No transparency report or government request policy is published. The privacy policy only says data may be disclosed in response to lawful requests by public authorities.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---

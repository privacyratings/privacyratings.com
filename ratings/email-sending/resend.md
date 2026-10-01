---
name: Resend
description: Email API for developers with SMTP support, React Email templates, broadcasts and webhooks.
website: https://resend.com
jurisdiction: US
domain: resend.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://resend.com/legal/privacy-policy
    note: The privacy policy lists Plausible and Mixpanel, and the website loads PostHog.
  no_ads:
    answer: yes
    evidence: https://resend.com/legal/privacy-policy
    note: Funded by paid plans. The privacy policy states personal information is not sold or rented.
  independent_audit:
    answer: partial
    evidence: https://resend.com/security
    note: States SOC 2 compliance and third-party audits, but no report is public.
  content_retention:
    answer: partial
    evidence: https://resend.com/docs/knowledge-base/account-quotas-and-limits
    note: Email content, metadata and logs are kept for 30 days on all plans. Other retention periods need an enterprise plan.
  tracking_off_by_default:
    answer: yes
    evidence: https://resend.com/docs/dashboard/domains/tracking
    note: Open and click tracking are off by default for all domains.
  enforced_tls:
    answer: yes
    evidence: https://resend.com/docs/api-reference/domains/create-domain
    note: TLS is opportunistic by default and can be set to enforced for each domain.
  eu_data_location:
    answer: no
    evidence: https://resend.com/docs/dashboard/domains/regions
    note: An EU sending region is offered, but customer data, logs and metadata stay in the United States.
---

---
name: DNSimple
description: Paid managed DNS hosting and domain registrar with DNSSEC, secondary DNS, an API, a CLI and a Terraform provider.
website: https://dnsimple.com
jurisdiction: US
domain: dnsimple.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The home page loads Google Tag Manager.
  no_ads:
    answer: partial
    evidence: https://dnsimple.com/privacy
    note: The privacy policy says third-party tracking technologies may be used for interest-based advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://dnsimple.com/privacy
    note: The privacy policy says data is released only when required by law or properly served legal process. No request counts are published.
  user_notice:
    answer: yes
    evidence: https://dnsimple.com/privacy
    note: The privacy policy says users are notified of legal process for their data when possible and legally permissible.
  dnssec:
    answer: yes
    evidence: https://support.dnsimple.com/articles/dnssec/
    note: DNSSEC is included on every plan and turned on per domain with automatic key rotation. The DS record is added at the registrar.
  api_access:
    answer: yes
    evidence: https://dnsimple.com/pricing
    note: Full API access is included on every plan.
  two_factor:
    answer: yes
    evidence: https://support.dnsimple.com/articles/multi-factor-authentication/
    note: Authenticator apps (TOTP) and WebAuthn security keys are supported.
---

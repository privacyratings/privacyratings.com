---
name: Porkbun
description: >-
  US domain registrar with free WHOIS privacy on most extensions, authenticator-app and security-key login, and an API.
website: https://porkbun.com
jurisdiction: US
domain: porkbun.com
criteria:
  free_whois_privacy:
    answer: partial
    evidence: https://porkbun.com/products/whois_privacy
    note: Free, but some registries (for example .us, .eu, .de, .uk) do not allow it.
  open_source:
    answer: no
    note: Closed source.
  no_ads:
    answer: partial
    evidence: https://porkbun.com/legal/agreement/privacy_policy
    note: The privacy policy states personal data is shared with advertising partners for personalized ads, which may count as a sale.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  at_cost_renewals:
    answer: partial
    evidence: https://porkbun.com/products/domains
    note: Many extensions, including .com, renew at the registration price, but first-year sale prices renew higher.
  two_factor:
    answer: yes
    evidence: https://kb.porkbun.com/article/19-how-to-enable-two-factor-authentication
    note: Authenticator apps and WebAuthn security keys are supported.
  registry_lock:
    answer: partial
    evidence: https://kb.porkbun.com/article/173-how-to-use-domain-management
    note: Domains are transfer-locked and must be unlocked before transfer. No registry lock service is documented.
---

---
name: Whereby
description: Browser-based video meeting service from Norway where hosts create permanent room links that guests open in a browser, with mobile apps and an embeddable video API.
website: https://whereby.com
jurisdiction: NO
platforms:
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://whereby.com/information/tos/privacy-policy/
    note: The home page loads Google Tag Manager, and the policy describes an analytics tracking system.
  no_ads:
    answer: yes
    evidence: https://whereby.com/information/tos/privacy-policy/
    note: Funded by paid subscriptions; the privacy policy says user data is not sold.
  independent_audit:
    answer: partial
    evidence: https://whereby.com/information/security/
    note: Third-party penetration test summaries are only shared under NDA, and only the ISO 27001 certificate is public.
  e2ee:
    answer: partial
    evidence: https://whereby.com/information/security/
    note: Small peer-to-peer rooms are end-to-end encrypted; larger rooms routed through servers are not.
  no_account_needed:
    answer: partial
    evidence: https://support.whereby.com/en/articles/4369346
    note: Guests join from the room link in a browser without an account; room owners need an account.
  self_hostable:
    answer: no
    note: Hosted only.
---

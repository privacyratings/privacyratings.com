---
name: Screen Studio
description: Screen recorder for macOS that adds automatic zoom, smooth cursor movement and styling to recordings for product demos and tutorials. Recordings are edited locally, with optional shareable links.
website: https://screen.studio
jurisdiction: PL
platforms:
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://screen.studio/legal/privacy-and-cookie-policy
    note: The privacy policy lists PostHog product analytics and Sentry error reporting in the app, and Plausible analytics on the website.
  no_ads:
    answer: yes
    evidence: https://screen.studio/legal/privacy-and-cookie-policy
    note: Funded by paid subscriptions and licenses. The policy states that data of identifiable users is never shared.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_by_default:
    answer: yes
    evidence: https://screen.studio/legal/privacy-and-cookie-policy
    note: Recordings are processed locally and only uploaded when you create a shareable link.
  no_account_needed:
    answer: no
    evidence: https://screen.studio/guide/activating-screen-studio
    note: Subscriptions are activated by signing in with the purchase email address. Only legacy one-time licenses use a license key.
---

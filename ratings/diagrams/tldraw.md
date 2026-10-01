---
name: tldraw
description: A collaborative infinite-canvas whiteboard for sketching and diagramming in the browser, with optional accounts for saving and sharing files. It is built on the tldraw SDK, which developers can embed in their own apps.
website: https://www.tldraw.com
source: https://github.com/tldraw/tldraw
domain: www.tldraw.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/tldraw/tldraw/blob/main/LICENSE.md
    note: Source-available under the tldraw license, which is not OSI-approved and requires a paid license key for production use.
  no_trackers:
    answer: no
    evidence: https://github.com/tldraw/tldraw/blob/main/apps/dotcom/client/src/utils/analytics.tsx
    note: tldraw.com loads Google Analytics and PostHog after cookie consent, runs PostHog in cookieless mode when consent is declined, and sends error reports to Sentry.
  no_ads:
    answer: partial
    evidence: https://www.tldraw.com/privacy.html
    note: No ads in the app, but the privacy policy says data may be shared with advertising partners for interest-based advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---

---
name: Notion
description: Proprietary workspace app that combines notes, documents, wikis, databases and project management, with real-time collaboration and built-in AI features. Content is stored on Notion's servers without end-to-end encryption.
website: https://www.notion.com
mainstream: true
jurisdiction: US
platforms:
  - windows
  - macos
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.notion.com/trust/privacy-policy
    note: The privacy policy allows third-party analytics and advertising cookies and pixels on the website, and Exodus finds Google CrashLytics in the Android app.
  no_ads:
    answer: partial
    evidence: https://www.notion.com/trust/privacy-policy
    note: No ads in the app, but the privacy policy discloses device and browsing data to advertising partners, which it says may count as a sale.
  independent_audit:
    answer: partial
    evidence: https://www.notion.com/security
    note: SOC 2 Type 2 and ISO audits by independent firms are stated, but the reports are only available on request through the Trust Center.
---

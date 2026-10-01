---
name: Excalidraw
description: An open-source virtual whiteboard for sketching hand-drawn style diagrams in the browser. Drawings are stored locally, and shared links and live collaboration are end-to-end encrypted. A paid hosted workspace, Excalidraw+, is also offered.
website: https://excalidraw.com
source: https://github.com/excalidraw/excalidraw
jurisdiction: CZ
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/excalidraw/excalidraw/blob/master/LICENSE
    note: MIT. The paid Excalidraw+ service is closed source.
  no_trackers:
    answer: partial
    evidence: https://github.com/excalidraw/excalidraw/blob/master/excalidraw-app/index.html
    note: No third-party ad trackers, but excalidraw.com loads Simple Analytics and sends error reports to Sentry by default.
  no_ads:
    answer: partial
    evidence: https://plus.excalidraw.com/privacy-policy
    note: Funded by Excalidraw+ subscriptions with no ads in the app, but the privacy notice says marketing cookies and third parties may be used for targeted advertising.
  independent_audit:
    answer: partial
    evidence: https://plus.excalidraw.com/security-and-compliance
    note: Excalidraw+ has SOC 2 Type 1 and Type 2 reports and yearly penetration tests, with reports provided through its trust center rather than published.
---

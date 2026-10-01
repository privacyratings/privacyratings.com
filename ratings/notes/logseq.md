---
name: Logseq
description: Open source outliner and knowledge base that stores notes as local Markdown or Org-mode files, with linked references, a graph view and journals. Available for desktop and mobile.
website: https://logseq.com
source: https://github.com/logseq/logseq
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/logseq/logseq/blob/master/LICENSE.md
    note: AGPL-3.0.
  no_trackers:
    answer: no
    evidence: https://github.com/logseq/logseq/blob/master/src/main/frontend/modules/instrumentation/core.cljs
    note: The apps send usage data to PostHog and error reports to Sentry by default. This can be turned off in settings.
  no_ads:
    answer: yes
    evidence: https://blog.logseq.com/privacy-policy/
    note: The privacy policy states that data is not sold or used for advertising. Funded by sponsors and paid sync.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

---
name: Trilium Notes
description: Open source hierarchical note-taking app for building a personal knowledge base, with rich text, code, diagrams, scripting and per-note encryption. Runs on the desktop or syncs with a self-hosted server. Maintained by the TriliumNext community.
website: https://triliumnotes.org
aliases:
  - TriliumNext
source: https://github.com/TriliumNext/Trilium
platforms:
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/TriliumNext/Trilium/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://triliumnotes.org
    note: The app has no telemetry, but the website loads Cloudflare Web Analytics, a cookieless analytics service.
  no_ads:
    answer: yes
    evidence: https://triliumnotes.org
    note: Free community project with no paid tiers, accounts or ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

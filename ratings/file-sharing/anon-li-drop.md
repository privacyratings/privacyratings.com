---
name: "anon.li Drop"
description: >-
  Open-source web service for sending files through a share link. Files and file names are encrypted in the browser
  with AES-256-GCM before upload, and the key stays in the URL fragment. Links can expire, have download limits and
  a password.
website: "https://anon.li/drop"
source: https://github.com/anondotli/anon.li
platforms: [web]
domain: anon.li
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/anondotli/anon.li/blob/main/LICENSE
    note: AGPL-3.0. The repository contains the web app, including the browser encryption code.
  no_trackers:
    answer: partial
    evidence: https://anon.li/sub-processors
    note: No ad trackers or cookies for analytics. PostHog (EU region) receives pseudonymous product analytics through a first-party proxy, with URL fragments stripped, and Cloudflare Turnstile runs on guest uploads.
  no_ads:
    answer: yes
    evidence: https://anon.li/privacy
    note: Funded by paid plans. The privacy policy states user data is not used for advertising, profiling or sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

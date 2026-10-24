---
name: "anon.li Form"
description: >-
  Open-source form builder whose answers and file attachments are encrypted in the respondent's browser with a
  per-form public key, so the service stores only ciphertext and only the form owner can decrypt responses.
website: "https://anon.li/form"
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
    note: No ad trackers or cookies for analytics. PostHog (EU region) receives pseudonymous product analytics through a first-party proxy, and Cloudflare Turnstile runs on form submissions.
  no_ads:
    answer: yes
    evidence: https://anon.li/privacy
    note: Funded by paid plans. The privacy policy states user data is not used for advertising, profiling or sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

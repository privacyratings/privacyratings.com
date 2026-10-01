---
name: NativeScript
description: Framework for building native Android and iOS apps with JavaScript or TypeScript, giving direct access to native platform APIs, usable with Angular, Vue, React, Svelte or Solid.
website: https://nativescript.org
source: https://github.com/NativeScript/NativeScript
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/NativeScript/NativeScript/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://github.com/NativeScript/nativescript-cli/blob/main/docs/man_pages/general/usage-reporting.md
    note: The CLI sends usage statistics only after the user agrees at a prompt, but nativescript.org loads Cloudflare Web Analytics.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/nativescript
    note: An OpenJS Foundation project funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - android
  - ios
---

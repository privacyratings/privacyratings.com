---
name: Brave Talk
description: Browser-based video calling service from Brave, built on Jitsi and run with 8x8. Calls are started from the Brave browser and can be joined from any browser.
website: https://talk.brave.com
source: https://github.com/brave/brave-talk
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/brave/brave-talk/blob/main/LICENSE
    note: The web app is MPL-2.0 and built on open source Jitsi, but the hosted 8x8 service setup is not public.
  no_trackers:
    answer: yes
    evidence: https://brave.com/talk/
    note: Brave states the service has no tracking and no data collection linking users to calls.
  no_ads:
    answer: yes
    evidence: https://brave.com/talk/
    note: Funded by a paid premium tier, with no ads in calls.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee:
    answer: partial
    evidence: https://brave.com/talk/
    note: Calls use transport encryption by default; Video Bridge Encryption is optional and has limits on call size and phone participants.
  no_account_needed:
    answer: yes
    evidence: https://brave.com/talk/
    note: Calls can be started and joined without an account or login.
  self_hostable:
    answer: no
    note: Hosted only; the service runs on 8x8 infrastructure.
---

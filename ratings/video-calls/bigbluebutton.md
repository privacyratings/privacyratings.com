---
name: BigBlueButton
description: Self-hosted web conferencing system for online classes, with whiteboard, shared notes, breakout rooms, polls and recording, often integrated with learning management systems.
website: https://bigbluebutton.org
source: https://github.com/bigbluebutton/bigbluebutton
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/bigbluebutton/bigbluebutton/blob/v3.0.x-develop/LICENSE
    note: LGPL-3.0.
  no_trackers:
    answer: no
    evidence: https://bigbluebutton.org/privacy-policy/
    note: The bigbluebutton.org website loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://docs.bigbluebutton.org/support/faq/
    note: Open source project with no ads, supported by companies that sell hosting and support.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee:
    answer: no
    evidence: https://docs.bigbluebutton.org/support/faq/
    note: Media is encrypted between each browser and the server with DTLS-SRTP, not end to end.
  no_account_needed:
    answer: yes
    evidence: https://docs.bigbluebutton.org/development/api/
    note: The server has no user accounts; participants join through links created by a front end such as Greenlight or a learning platform.
  self_hostable:
    answer: yes
    evidence: https://docs.bigbluebutton.org/administration/install/
    note: Official installation guide for Ubuntu servers.
---

---
name: Easy!Appointments
description: Self-hosted web application for booking appointments, written in PHP. Customers book online, and staff manage services, providers and schedules, with Google Calendar and CalDAV sync.
website: https://easyappointments.org
source: https://github.com/alextselegidis/easyappointments
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/alextselegidis/easyappointments/blob/develop/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://easyappointments.org/privacy-policy/
    note: The easyappointments.org website loads Google Analytics through Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://easyappointments.org/premium
    note: Funded by paid custom development, hosting, support and white-label licenses, with no ads in the software.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

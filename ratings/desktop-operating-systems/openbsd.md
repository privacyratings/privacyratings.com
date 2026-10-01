---
name: OpenBSD
description: A security-focused Unix-like operating system descended from BSD, known for code auditing, secure defaults and exploit mitigations such as pledge and unveil.
website: https://www.openbsd.org
source: https://cvsweb.openbsd.org/
jurisdiction: CA
criteria:
  open_source:
    answer: yes
    evidence: https://www.openbsd.org/policy.html
    note: ISC and BSD licenses for the base system, with a policy against restrictive licenses.
  no_trackers:
    answer: yes
    evidence: https://cvsweb.openbsd.org/
    note: No telemetry or analytics in the source code, and no trackers on the website.
  no_ads:
    answer: yes
    evidence: https://www.openbsdfoundation.org/
    note: Funded by donations through the OpenBSD Foundation, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

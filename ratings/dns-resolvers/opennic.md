---
name: OpenNIC
description: Volunteer-run alternative DNS root with public resolvers that answer for both ICANN domains and OpenNIC's own top-level domains such as .libre and .oss.
website: https://opennic.org
domain: opennic.org
imported_from: awesome-privacy
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/OpenNIC
    note: Project tooling is published on GitHub, but each volunteer resolver runs its own setup.
  no_trackers:
    answer: partial
    evidence: https://opennic.org/privacy/
    note: The website uses self-hosted Matomo analytics. No third-party trackers.
  no_ads:
    answer: yes
    evidence: https://opennic.org/
    note: Run by volunteers and funded by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  encrypted_dns:
    answer: partial
    evidence: https://wiki.opennic.org/opennic/setup/listserver
    note: Some volunteer servers offer DoH or DoT, but support varies by server.
  no_query_logs:
    answer: partial
    evidence: https://wiki.opennic.org/opennic/setup/listserver
    note: Each volunteer server sets its own log policy, and some keep no logs or anonymized logs. Not audited.
  dnssec_validation:
    answer: partial
    evidence: https://wiki.opennic.org/opennic/dnssec
    note: Server operators may enable DNSSEC validation, but it is not required.
---

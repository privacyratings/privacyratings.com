---
name: Gandi
description: >-
  French domain registrar and hosting provider with free WHOIS privacy on most extensions, TOTP and security-key login, and a yearly transparency report.
website: https://www.gandi.net/en
jurisdiction: FR
domain: www.gandi.net
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.gandi.net/en/contracts/privacy-policy
    note: The privacy policy lists AT Internet audience-measurement cookies, which can be opted out of.
  no_ads:
    answer: yes
    evidence: https://www.gandi.net/en/domain/tld/com
    note: Funded by paid domain and hosting services. No ads.
  independent_audit:
    answer: partial
    evidence: https://www.gandi.net/en
    note: The site states an ISO 27001 and ISO 22301 certification by BSI. No audit report is published.
  transparency_report:
    answer: yes
    evidence: https://www.gandi.net/en/digital-service-act-transparency-report
    note: Yearly reports with counts of information requests from authorities and content notices.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  free_whois_privacy:
    answer: partial
    evidence: https://docs.gandi.net/en/domain_names/common_operations/whois_privacy.html
    note: Free and on by default, but some extensions do not support the anonymized contact option.
  at_cost_renewals:
    answer: no
    evidence: https://www.gandi.net/en/domain/tld/com
    note: A .com registers for about 11 EUR but renews for about 32 EUR per year.
  two_factor:
    answer: yes
    evidence: https://docs.gandi.net/en/account_management/security/totp.html
    note: TOTP apps and security keys are supported.
  registry_lock:
    answer: partial
    evidence: https://docs.gandi.net/en/domain_names/transfer_out/transfer_lock.html
    note: Transfer lock is available on most extensions. Registry lock is not offered to regular accounts.
---

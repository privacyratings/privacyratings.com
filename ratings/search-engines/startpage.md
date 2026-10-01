---
name: Startpage
description: Dutch search engine returning primarily Google results, proxied to strip IP and identifiers. Includes an "Anonymous View" proxy for previewing results privately.
website: https://www.startpage.com
jurisdiction: NL
domain: www.startpage.com
imported_from: awesome-privacy
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.startpage.com/en/privacy-policy/
    note: The website has no tracking cookies, but the Startpage app sends crash reports through Sentry and anonymized product analytics, with no documented opt-out.
  no_ads:
    answer: partial
    evidence: https://www.startpage.com/en/privacy-policy/
    note: Funded by non-personalized sponsored links from Google AdSense.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://www.startpage.com/en/privacy-policy/
    note: The privacy policy describes how government requests are handled, but no request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_search_logs:
    answer: yes
    evidence: https://www.startpage.com/en/privacy-policy/
    note: IP addresses and search queries are not recorded, except for blocking automated abuse.
  no_personalized_ads:
    answer: yes
    evidence: https://www.startpage.com/en/privacy-policy/
    note: Only non-personalized ads are shown.
  no_account_needed:
    answer: partial
    evidence: https://www.startpage.com/en/privacy-policy/
    note: Search works without an account; the paid subscription needs a Startpage account.
---

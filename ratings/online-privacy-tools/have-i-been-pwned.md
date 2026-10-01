---
name: Have I Been Pwned
description: Searches a database of data breaches to show whether an email address, phone number or password has been exposed, and can notify subscribers about new breaches.
website: https://haveibeenpwned.com
domain: haveibeenpwned.com
imported_from: awesome-privacy
source: https://github.com/HaveIBeenPwned
jurisdiction: AU
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/HaveIBeenPwned/PwnedPasswordsAzureFunction/blob/main/LICENSE
    note: The Pwned Passwords API, Cloudflare worker and downloader are BSD-3-Clause; the main website and breach search are closed source.
  no_trackers:
    answer: yes
    evidence: https://haveibeenpwned.com/Privacy
    note: The privacy policy states no third-party cookies or tracking pixels are used.
  no_ads:
    answer: yes
    evidence: https://haveibeenpwned.com/Privacy
    note: Funded by paid subscriptions; the privacy policy states no ads or targeted marketing.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
imported_name: Have i been pwned
---

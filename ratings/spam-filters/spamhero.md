---
name: SpamHero
description: Hosted spam and virus filtering service for organizations with their own domain, set up by pointing MX records at it. It also offers outbound SMTP relay, quarantine, delivery logs and reseller controls for managed service providers.
website: https://www.spamhero.com
domain: www.spamhero.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.spamhero.com/privacy
    note: The website loads Google Analytics, Microsoft Clarity and a Reddit pixel, and the privacy policy allows third-party tracking.
  no_ads:
    answer: partial
    evidence: https://www.spamhero.com/privacy
    note: Paid service with no ads, but website visitor data is used to track the effectiveness of its own advertising, including a Reddit ads pixel.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    evidence: https://www.spamhero.com/privacy
    note: No transparency report or government request policy is published. The privacy policy only says data may be disclosed in response to lawful requests by public authorities.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---

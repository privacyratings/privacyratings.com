---
name: MetaGer
description: Open-source metasearch engine run by the German non-profit SUMA-EV that combines results from several search providers, paid for with a prepaid anonymous key, and includes an anonymizing proxy for opening results.
website: https://metager.org
jurisdiction: DE
domain: metager.org
source: https://gitlab.metager.de/open-source/MetaGer
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.metager.de/open-source/MetaGer/-/blob/development/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://metager.org/datenschutz
    note: No tracking or third-party analytics; error reports go to a self-hosted GlitchTip instance with IP addresses removed.
  no_ads:
    answer: yes
    evidence: https://metager.org/preise
    note: Funded by prepaid search keys and donations to the non-profit SUMA-EV, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_search_logs:
    answer: yes
    evidence: https://metager.org/datenschutz
    note: IP addresses and user agents are not saved, and queries are passed to search partners without identifiers.
  no_personalized_ads:
    answer: yes
    evidence: https://metager.org/
    note: No ads are shown.
  no_account_needed:
    answer: partial
    evidence: https://metager.org/
    note: No account or email is needed, but searching requires a prepaid, randomly generated MetaGer key.
---

---
name: Rspamd
description: Self-hosted spam filtering system written in C and Lua that checks mail with rules, statistics, fuzzy hashes and DNS lists, and integrates with Postfix, Exim and other mail servers.
website: https://rspamd.com
source: https://github.com/rspamd/rspamd
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/rspamd/rspamd/blob/master/LICENSE.md
    note: Licensed under the Apache License 2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/rspamd/rspamd
    note: No telemetry or analytics in the source code. By default, hashes of message parts are checked against the public fuzzy storage run by the Rspamd project.
  no_ads:
    answer: yes
    evidence: https://docs.rspamd.com/other/usage_policy/
    note: Free software funded by paid commercial feed and support subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

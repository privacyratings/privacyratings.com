---
name: Streamlit
description: Python framework from Snowflake for turning data scripts into interactive web apps and dashboards.
website: https://streamlit.io
source: https://github.com/streamlit/streamlit
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/streamlit/streamlit/blob/develop/LICENSE
    note: Apache-2.0 licensed.
  no_trackers:
    answer: no
    evidence: https://docs.streamlit.io/develop/api-reference/configuration/config.toml
    note: Apps send usage statistics to Streamlit by default (browser.gatherUsageStats), and streamlit.io loads Segment analytics.
  no_ads:
    answer: yes
    evidence: https://www.snowflake.com/en/pricing-options/
    note: Developed by Snowflake and funded by its paid data platform, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - web
---

---
name: FastAPI
description: Python framework for building APIs with type hints, based on Starlette and Pydantic, with automatic request validation and OpenAPI documentation.
website: https://fastapi.tiangolo.com
source: https://github.com/fastapi/fastapi
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/fastapi/fastapi/blob/master/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://fastapi.tiangolo.com/
    note: No telemetry in the framework or the fastapi CLI, but fastapi.tiangolo.com loads Cloudflare Web Analytics.
  no_ads:
    answer: yes
    evidence: https://github.com/sponsors/tiangolo
    note: Funded by sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

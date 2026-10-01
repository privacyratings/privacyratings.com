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
    answer: yes
    evidence: https://fastapi.tiangolo.com/
    note: No third-party trackers, and the framework and CLI have no telemetry. The website's Cloudflare Web Analytics are cookieless and aggregate-only.
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

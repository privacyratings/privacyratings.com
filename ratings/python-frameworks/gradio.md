---
name: Gradio
description: Python library from Hugging Face for building web interfaces and demos for machine learning models and other Python functions.
website: https://gradio.app
source: https://github.com/gradio-app/gradio
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/gradio-app/gradio/blob/main/LICENSE
    note: Apache-2.0 licensed.
  no_trackers:
    answer: no
    evidence: https://gradio.app/guides/environment-variables
    note: Apps send basic telemetry to Hugging Face by default until GRADIO_ANALYTICS_ENABLED is set to False, and gradio.app loads Google Analytics.
  no_ads:
    answer: yes
    evidence: https://huggingface.co/pricing
    note: Developed by Hugging Face and funded by its paid plans, with no ads in the framework.
  independent_audit:
    answer: yes
    evidence: https://github.com/trailofbits/publications/blob/master/reviews/2024-10-huggingface-gradio-securityreview.pdf
    note: Trail of Bits published a full security review of Gradio 5.
platforms:
  - linux
  - macos
  - windows
  - web
---

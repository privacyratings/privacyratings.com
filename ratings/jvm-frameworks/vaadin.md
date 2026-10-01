---
name: Vaadin
description: Java framework for building web application user interfaces, with server-side Java UI components (Flow) and React-based views (Hilla). Some components and tools are commercial.
website: https://vaadin.com
source: https://github.com/vaadin/flow
jurisdiction: FI
criteria:
  open_source:
    answer: partial
    evidence: https://vaadin.com/licensing-faq-and-troubleshooting
    note: The core framework is Apache 2.0-licensed, but some components and tools are under the proprietary Vaadin Commercial License.
  no_trackers:
    answer: no
    evidence: https://vaadin.com/docs/latest/flow/configuration/properties
    note: Development mode collects usage statistics by default until disabled, and vaadin.com loads HubSpot analytics.
  no_ads:
    answer: yes
    evidence: https://vaadin.com/pricing
    note: Funded by commercial subscriptions and support, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---

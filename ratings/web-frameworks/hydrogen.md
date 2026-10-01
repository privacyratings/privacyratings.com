---
name: Hydrogen
description: React framework from Shopify for building custom storefronts on the Shopify commerce platform, based on React Router.
website: https://hydrogen.shopify.dev
source: https://github.com/Shopify/hydrogen
platforms:
  - linux
  - macos
  - windows
  - web
jurisdiction: CA
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Shopify/hydrogen/blob/main/LICENSE.md
    note: MIT-licensed. Storefronts built with it run on Shopify's proprietary commerce platform.
  no_trackers:
    answer: no
    evidence: https://shopify.dev/docs/api/shopify-cli
    note: The Shopify CLI used with Hydrogen collects anonymous usage statistics by default until disabled, and hydrogen.shopify.dev loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://www.shopify.com/pricing
    note: Developed by Shopify and funded by its paid commerce plans, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

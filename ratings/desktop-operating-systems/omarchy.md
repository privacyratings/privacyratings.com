---
name: Omarchy
description: Opinionated Arch Linux setup built around the Hyprland tiling window manager, with preinstalled apps, themes and AI agent integration. Created by David Heinemeier Hansson and funded by the Omacom Foundation.
website: https://omarchy.org
source: https://github.com/omacom/omarchy
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/omacom/omarchy/blob/HEAD/LICENSE
    note: Omarchy's scripts and configuration are MIT, on top of open source Arch Linux packages. The default install also includes some proprietary apps, such as Obsidian.
  no_trackers:
    answer: yes
    evidence: https://github.com/omacom/omarchy
    note: No third-party trackers, and the installed system has no telemetry. The omarchy.org website's Plausible analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://omarchy.org/foundation/
    note: Funded by patrons through the nonprofit Omacom Foundation, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

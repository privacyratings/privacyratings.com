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
    answer: partial
    evidence: https://github.com/omacom/omarchy
    note: No telemetry in the installed system, but the omarchy.org website uses Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://omarchy.org/foundation/
    note: Funded by patrons through the nonprofit Omacom Foundation, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

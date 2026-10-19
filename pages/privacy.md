---
title: Privacy policy
description: What happens to your data when you visit Privacy Ratings or use its command-line tool. No cookies, analytics or trackers, and nothing loads from other sites.
---

# Privacy policy

Privacy Ratings sets no cookies, runs no analytics and loads nothing from other sites. This page lists everything that does happen when you visit the site or use the command-line tool.

## Hosting

[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection) serves this site. GitHub logs the IP address of every visitor for security purposes, as described in the [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Privacy Ratings runs no server of its own and has no access to those logs.

## What the site stores in your browser

- `theme`: the color theme, if you chose one.
- `lang`: the language you chose, or the one that matched your browser on your first visit.
- `mastodon`: the Mastodon server you typed in the share menu, if you used it.
- A service worker keeps copies of the pages you opened, so they work offline.

All of it stays on your device. Clearing the site data in your browser removes it.

## Requests to other sites

Every script, stylesheet, font, image and video loads from privacyratings.com, and a Content Security Policy blocks anything else. Links to other sites, including the share links, load nothing until you open them.

## Search

The search box downloads the search index from this site and filters it in your browser. On the search page, your words appear in the page address, like any other link.

## Command-line tool

The `privacyratings` command-line tool sends no analytics or telemetry. It downloads ratings from this site and, once a day, asks the GitHub API for the latest release. When there is a newer one, it updates itself from GitHub or npm. Set `PRIVACYRATINGS_NO_UPDATE=1` or pass `--no-update` to turn off updates.

## Contributions

Issues, pull requests and discussions happen on GitHub and are public. The GitHub General Privacy Statement covers your GitHub account.

## Contact

Ask questions about this policy in a [GitHub issue](https://github.com/privacyratings/privacyratings.com/issues). Report security problems as described in [SECURITY.md](https://github.com/privacyratings/privacyratings.com/blob/main/SECURITY.md).

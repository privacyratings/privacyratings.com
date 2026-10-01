# Contributing

Everything happens on GitHub. There is no other forum, chat or account to sign up for.

| To do this | Use |
| --- | --- |
| Suggest an app or service | [Open a "Suggest" issue](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Report a wrong answer or broken link | [Open a "Correction" issue](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), or use "Report a correction" on any rating page |
| Propose or change criteria | [Open a "Criteria change" issue](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Fix it yourself | Use "Edit on GitHub" on any rating page, or open a pull request |
| Ask a question or debate a pick | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Editing a rating

Each app or service is one Markdown file in `ratings/<category>/<name>.md`. The top of the file is YAML. Anything below it is optional Markdown notes shown on the page.

```yaml
---
name: Example Mail
description: >-
  One or two plain sentences about what it is.
website: https://example.com
source: https://github.com/example/example      # optional
platforms: [web, android, ios]                  # optional
jurisdiction: CH                                # optional, country code from jurisdictions.yml
mainstream: true                                # optional, adds an "alternatives to" page
aliases: [Example Office, Example Docs]         # optional, other names people search for
also_in: [macos-hardening]                      # optional, also list it in another category's table
alternatives_page: true                         # optional, adds an "alternatives to" page without mainstream
domain: mail.example.com                        # services only, used for automated tests
mail_domain: example.com                        # email categories only
imap_host: imap.example.com                     # email providers only; false if not offered
pop3_host: pop3.example.com                     # optional, found from SRV records when missing
smtp_host: smtp.example.com                     # optional, found from SRV records when missing
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/example/example/blob/main/LICENSE
    note: Apps are open source. The server is not.
  no_ads:
    answer: yes
    evidence: https://example.com/pricing
---

Optional notes in Markdown.
```

Rules (checked automatically by `npm test`):

- `answer` is one of `yes`, `partial`, `no`, `unknown` or `n/a`.
- `yes` and `partial` need an `evidence` link. `no` needs a `note` or `evidence`.
- Evidence must be a primary source: official documentation, source code, a license file, an audit report or a reproducible test. Not reviews, forum posts or marketing pages without detail.
- Links must be `https://` and must not contain referral or tracking parameters.
- Automated criteria (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) are filled in by tests. Do not set them by hand.
- `no_trackers` is also checked by the [tracker test](SCANS.md#website-trackers). If the home page loads a third-party tracker, the answer becomes "no" whatever the file says.
- Leave out any criterion that has no evidence yet. It counts as `unknown`.
- `jurisdiction` is where the company is legally based (not where its servers are). Add a country to [`jurisdictions.yml`](jurisdictions.yml) if it is missing. Every note there needs a source.
- Only maintainers add `pick`, `pick_reason` and `disclosure`. Use `pick: 1` and `pick: 2` to order two picks. See [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` keeps the name an entry had in Awesome Privacy after it is renamed, so the monthly import does not add it again. To leave an Awesome Privacy entry out for good, add it to [`import-skip.yml`](import-skip.yml) with a reason.

The criteria for each category, and what each answer means, are in [`criteria/`](criteria/) and on the [criteria page](https://privacyratings.com/criteria/).

## Adding an app or service

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

This creates a file that lists every criterion as `unknown`. Fill in what you can prove, delete the rest, then run `npm test`.

## Writing style

- Plain, neutral language. Describe what something does, not how great it is.
- Short sentences. Descriptions stay under 300 characters.
- No first person, no dates in prose, no marketing claims.
- Name things the way the vendor does.

## Running the site locally

Requires Node.js 18 or newer.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Adding a page

Put a Markdown file with a `title` and `description` in [`pages/`](pages/). It is published at `/<file-name>/` with a Markdown copy, structured data and a sitemap entry.

## Adding a category or criterion

1. Add the category to [`categories.yml`](categories.yml) under the right group.
2. Optionally add `criteria/<category-id>.yml` with category-specific criteria. Copy the format from an existing file.
3. Create `ratings/<category-id>/` and add entries.
4. Criteria changes follow the review rules in [GOVERNANCE.md](GOVERNANCE.md).

## Translations

The site is published in 25 languages. English is the source, and every other language lives in `i18n/<code>/`:

| File | Holds |
| --- | --- |
| `ui.json` | Interface text: headings, buttons and sentences with `{placeholders}` |
| `data.json` | Category names, criteria, guides and country notes |
| `entries.json` | Rating descriptions, pick reasons and disclosures |
| `pages/*.md` | Whole documents such as this one |

Each JSON file maps the English text to its translation. When the English changes, the old translation no longer matches, so the English shows until someone translates the new text. Nothing out of date is ever shown.

1. Run `npm run build`. It writes the current English lists to `i18n/source/`.
2. Run `npm run i18n:check` to see what is missing in each language, or `node scripts/i18n-check.js de ui` for the details of one language and file.
3. Add or fix translations, keeping every `{placeholder}` exactly as it is.
4. For a document, copy the English from `i18n/source/pages/`, keep its first line (`<!-- source: … -->`, which ties the translation to that version of the English), and translate the rest.

Per-answer notes and evidence stay in English. Comparisons and most single ratings are English-only; picks, categories, guides, alternatives, open-source lists, jurisdictions and documents are translated. The language menu and automatic redirect use the `hreflang` links on each page.

## Pull request checklist

- [ ] `npm test` passes.
- [ ] Every changed answer links to evidence.
- [ ] If you work for, or are connected to, a service you changed, you said so in the pull request.

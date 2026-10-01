# Privacy Ratings

Open, testable privacy ratings for the apps and services people use every day.

**[privacyratings.com](https://privacyratings.com)** · [Why this exists](WHY.md) · [Criteria](criteria/) · [Automated tests](SCANS.md) · [Contribute](CONTRIBUTING.md) · [Governance](GOVERNANCE.md)

- **Public criteria.** Each category has weighted yes-or-no questions anyone can check.
- **Evidence for every answer.** "Yes" and "partial" must link to a primary source. Anything unproven counts as unknown.
- **Automated security tests.** The Scan workflow tests hosted services on a schedule with Qualys SSL Labs, Mozilla HTTP Observatory and Internet.nl (web and email).
- **Managed on GitHub.** Issues hold suggestions and corrections, pull requests hold changes, and Discussions hold debate. Contributing needs no other platform or account.
- **Jurisdiction on each rating.** Country, Five, Nine or Fourteen Eyes, EU/GDPR and CLOUD Act exposure, with a page per country and a [CLOUD Act explainer](pages/cloud-act.md).
- **Built for search and AI.** The build gives each page structured data, a Markdown copy and a sitemap entry, and adds `llms.txt`, `llms-full.txt`, a JSON API and an Atom feed. CI requires each page type to score 100 in all Lighthouse categories.
- **Website trackers tested.** The tracker test checks each home page for third-party trackers such as Google Analytics, Meta Pixel and HubSpot. A tracker it finds turns "No trackers" into "no" automatically.
- **Email standards tested.** The scan checks IMAP `CAPABILITY`, POP3 `CAPA`, SMTP `EHLO`, MTA-STS, TLS-RPT, DANE, DNSSEC, DMARC and SPF for each email provider.
- **Embeddable badges.** Every rating has SVG badges in five styles, from a small Shields-style badge to a card, plus a Shields.io endpoint. The build draws them from the scores, and each one links back to the rating. Each rating page has an "Embed badge" button with the code.
- **Search from any page.** A search button in the header, or Ctrl+K / ⌘K on any page, opens a command palette that finds ratings, categories, alternatives pages, open-source lists and jurisdictions.
- **Readable on any device.** Light and dark themes that follow the system setting, with a switch; layouts for phones, tablets and desktops; tooltips on every badge and criterion; no web fonts or frameworks.
- **Plain files, static site.** Markdown and YAML in, HTML, Markdown and JSON out, published with GitHub Pages, with two dependencies.

Follow along on [X](https://x.com/privacyratings) and [Reddit](https://www.reddit.com/r/privacyratings/).

## How it works

```
categories.yml          Categories, grouped, which tests each one runs, and optional SEO titles
jurisdictions.yml       Countries, Eyes alliances, EU/GDPR, CLOUD Act, and sourced notes on laws
criteria/_common.yml    Criteria for every category
criteria/<id>.yml       Extra criteria for one category
ratings/<id>/<name>.md  One file per app or service (YAML front matter + optional notes)
scans/*.json            Automated test results (written by the Scan workflow)
pages/*.md              Extra pages such as the CLOUD Act explainer and the jurisdictions intro
import-skip.yml         Awesome Privacy entries left out on purpose, with the reason
vendor/awesome-privacy/ Snapshot of Awesome Privacy (CC0), used whenever it cannot be downloaded
site.yml                Site title, URL, repository and footer disclosure
site/                   CSS, JavaScript, icons and app screenshots copied as-is
assets/fonts/           Inter and JetBrains Mono (OFL), used to draw social images
topics.yml              Guides such as "private email" and "secure email"
i18n/                   Translations: locales.yml, and ui, data, entries and documents for each language
scripts/                build (context, templates, machine outputs), validate, scan, new and import
cli/                    The privacyratings command-line tool (npm package and standalone binaries)
```

1. A contributor edits a file in `ratings/` and opens a pull request.
2. The **Test** workflow validates every file and builds the site.
3. A maintainer reviews the evidence and merges.
4. The **Deploy** workflow publishes the site to GitHub Pages.
5. The **Lighthouse** workflow requires 100 in every Lighthouse category on each page type, on mobile and desktop.
6. Every day, the **Scan** workflow tests hosted services and commits the results, which triggers a new deploy.
7. Every month, the **Sync Awesome Privacy** workflow opens a pull request with any new entries from [Awesome Privacy](https://github.com/lissy93/awesome-privacy). A snapshot of its data lives in `vendor/awesome-privacy/`: if the site is down, blocks the download or serves a broken file, the import uses that copy and the workflow still succeeds. The build itself never downloads anything from Awesome Privacy.

## Generated pages and files

The build generates all of these from the data; none are written by hand.

| Output | Purpose |
| --- | --- |
| `/<category>/` | Ratings table, picks, questions and comparison links, targeting "[category] privacy ratings" searches |
| `/<category>/<entry>/` | Full rating with a plain-language summary, jurisdiction, evidence and tests |
| `/compare/<category>/<a>-vs-<b>/` | Side-by-side comparisons of each pick against other well-documented entries |
| `/alternatives/<entry>/` | "Gmail alternatives" pages for every entry marked `mainstream: true`, naming its `aliases` too |
| `/open-source/<category>/` | "Open-source password managers" style lists of entries whose code is under an OSI license |
| `/jurisdictions/` and `/jurisdictions/<country>/` | Countries, Eyes alliances, laws and the services based there |
| `/cloud-act/`, `/criteria/`, `/tests/`, `/why/`, `/governance/`, `/contribute/` | Explainers and documentation |
| `/badge/<category>/<entry>.svg` (plus `-flat-square`, `-large`, `-card`, `-card-dark`) and `.json` | Embeddable badges and a Shields.io endpoint, see `/badges/` |
| `index.md` next to every page | Markdown copy for AI agents and LLMs |
| `/llms.txt`, `/llms-full.txt` | Summary and full text for LLMs ([llms.txt standard](https://llmstxt.org)) |
| `/api/ratings.json`, `/api/entries/<category>/<entry>.json` | Full data and one file per entry |
| `/sitemap.xml` | Indexable pages with last-modified dates from Git |
| `/robots.txt` | Allows search engines and AI crawlers, with content signals |
| `/feed.xml` | Atom feed of rating changes from Git history |
| `/cli/`, `/install.sh`, `/install.ps1`, `/api/cli.json` | The command-line tool's page with a live terminal preview, its installers, and the compact index it searches |
| `/<lang>/…` | The same pages in 24 more languages (Arabic and Hebrew right to left), with `hreflang` links, a language menu, per-language sitemaps and search indexes. The site sends first-time visitors to their browser's language once, and remembers a language chosen in the menu |
| `/og/<page>.png` | A 1200 x 630 social image for every page: the grade and score for a rating, the top entries for a list, both grades for a comparison |
| `/site.webmanifest`, `/sw.js`, `/offline/` | Installable app: manifest with regular and maskable icons, shortcuts and screenshots, and a service worker that keeps visited pages available offline |

Every HTML page has a unique title and description, canonical URL, its own social image with descriptive alt text, Open Graph and Twitter cards, and schema.org structured data (WebSite with search, Organization, Dataset, BreadcrumbList, CollectionPage with ItemList, WebPage, Article and DefinedTermSet). The build adds review markup only to graded entries with no conflict of interest, following Google's rules against self-serving reviews. Entries with too little evidence get `noindex` and stay out of the sitemap until they have more data, so thin pages do not compete with complete ones.

The build calculates scores from the answers. Grades need evidence for at least 60% of criteria by weight. See [the scoring rules](https://privacyratings.com/criteria/#scoring).

## Commands

Requires Node.js 18 or newer.

```sh
npm ci                                  # install
npm test                                # validate all data and build the site
npm run serve                           # build and preview at http://localhost:8080
npm run new -- vpns "Name" https://...  # create a new rating file
npm run scan -- --only vpns/mullvad-vpn # run automated tests for one entry
node scripts/trackers.js https://example.com   # check one home page for trackers
npm run check:evidence -- --out report.json   # check every evidence, website and source link (--only vpns, --strict)
npm run import                          # add new entries from Awesome Privacy
npm run icons                           # redraw the favicon and app icons from scripts/icons.js
npm run i18n:check                      # translation coverage for every language
```

The logo is defined once in `scripts/icons.js`. It draws the header logo (which follows the light and dark theme), `favicon.svg` (which follows the browser's color scheme), `favicon.ico`, the Apple touch icon, and the regular and maskable app icons. `scripts/og.js` draws social images and caches them in `.cache/og`, so it redraws only pages whose content changed.

## Command-line tool

```sh
curl -fsSL https://privacyratings.com/install.sh | sh     # macOS and Linux
irm https://privacyratings.com/install.ps1 | iex          # Windows
npm install -g privacyratings                             # npm
```

The tool lives in [`cli/`](cli/) with its own package, tests and [README](cli/README.md). It needs Node.js 20 or newer to develop (the site itself builds on Node.js 18). Release it with `cd cli && npx np`; publishing the GitHub release runs the **CLI release** workflow, which builds standalone binaries for Linux, macOS and Windows and attaches them with checksums.

## Setup

1. Create the repository on GitHub and push this code to `main`.
2. **Pages:** Settings › Pages › Build and deployment › Source: **GitHub Actions**. Under Custom domain enter `privacyratings.com`, save, and turn on **Enforce HTTPS** once the certificate is issued. The [`CNAME`](CNAME) file holds the same domain and is published with every build; with Actions deployments GitHub reads the domain from this setting, so set both.
3. **DNS** for `privacyratings.com`:
   - `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` record for `www` pointing to `privacyratings.github.io`
   - Verify the domain under the organization's Settings › Pages, so no other account can use it.
4. **Discussions:** Settings › General › Features › Discussions. Create the categories **Picks**, **Ideas** and **Q&A**.
5. **Labels:** create `suggestion`, `correction`, `criteria`, `picks`, `bug` and `translation`.
   **Security:** Settings › Code security › turn on **Private vulnerability reporting** (see [SECURITY.md](SECURITY.md)).
6. **Branch protection** for `main`: require the **Test** (both the `test` and `cli` jobs) and **Lighthouse** checks and one approving review.
   Workflows: **Test** (every pull request), **Lighthouse** (every pull request), **Deploy** (every push to `main` and after each scan), **Scan** (daily), **Sync Awesome Privacy** (monthly) and **CLI release** (when a GitHub release is published).
7. **Actions:** Settings › Actions › General › allow GitHub Actions to create pull requests (for the monthly sync).
8. **Optional secrets** for more tests: `SSLLABS_EMAIL`, `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD`. See [SCANS.md](SCANS.md).
9. Create the `maintainers` team in the `privacyratings` organization and give it write access; [`.github/CODEOWNERS`](.github/CODEOWNERS) requests its review.
10. **npm:** the CLI is published from a maintainer's machine with `cd cli && npx np` (log in with `npm login` first). No npm token is stored in GitHub.
11. Submit `https://privacyratings.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
12. Run the **Scan** workflow once by hand (Actions › Scan › Run workflow, with a limit of `2000`) to fill in first results. Until then, the site uses the results already in [`scans/`](scans/).

To serve from `username.github.io/privacyratings.com` instead of a custom domain, set `base_path: /privacyratings.com` in `site.yml`.

## License

Code is [MIT](LICENSE). Ratings, criteria and documentation are [CC BY-SA 4.0](LICENSE-CONTENT.md). Entries first listed from Awesome Privacy come from CC0 data.

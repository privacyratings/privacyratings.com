# Automated tests

The Scan workflow tests hosted services (categories with `type: service`) when their rating file has a `domain`. Email providers and forwarding services with a `mail_domain` also get an email test.

| Test | What it checks | Criterion | Yes | Partial | No |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | TLS versions, ciphers, certificates and known TLS flaws | `tls` | A+ or A | A- or B | C or lower |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Security headers such as CSP, HSTS and X-Frame-Options, and cookie flags | `security_headers` | A+ or A | A-, B+ or B | B- or lower |
| [Internet.nl website test](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS and security options | `web_standards` | 90% or more | 70% to 89% | Below 70% |
| [Internet.nl email test](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS and DANE for the mail domain | `mail_standards` | 90% or more | 70% to 89% | Below 70% |
| [Hardenize](https://www.hardenize.com) | DNS, email and web security configuration | Linked only | | | |

## Email standards

Email providers and forwarding services with a `mail_domain` also get these tests, run by [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Test | What it checks | Criterion | Yes |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, DMARC policy, MTA-STS mode (RFC 8461), TLS-RPT (RFC 8460), DNSSEC validation, DANE TLSA on every MX host (RFC 7672), plus BIMI and RFC 6186 SRV records for information | `transport_security` | All six enforced |
| IMAP `CAPABILITY` | Implicit TLS on 993 (RFC 8314), IMAP4rev1 or IMAP4rev2, IDLE. Falls back to STARTTLS on 143 | `imap_standards` | Implicit TLS, IMAP4rev1/rev2 and IDLE |
| POP3 `CAPA` | Implicit TLS on 995, CAPA (RFC 2449), UIDL. Falls back to STLS on 110 | `pop3_standards` | Implicit TLS, CAPA and UIDL |
| SMTP `EHLO` | Submission over implicit TLS on 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Falls back to STARTTLS on 587 | `smtp_standards` | Implicit TLS and all four extensions |

Server names come from `imap_host`, `pop3_host` and `smtp_host` in the rating file, or from the provider's RFC 6186 SRV records. Set a host to `false` when the provider does not offer that protocol. Capabilities are what each server advertises before login, and each rating page shows the full lists.

## Website trackers

Every entry with a website, apps included, gets a tracker test run by [`scripts/trackers.js`](scripts/trackers.js). It loads the home page without running JavaScript and compares every script, frame, image and stylesheet host, plus inline code, with a list of known tracking and analytics services.

| Found | Effect on `no_trackers` |
| --- | --- |
| Third-party trackers such as Google Analytics, Google Tag Manager, Meta Pixel, Hotjar or HubSpot | Answer becomes "no", whatever the rating file says |
| Cookieless analytics (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | A "yes" becomes "partial" |
| Fonts, embeds, error reporting, support chat or consent tools | Listed on the page, not scored |
| Nothing | The answer in the rating file is used |

The test skips websites on a code host or app store (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play and similar), because the project does not run that page.

The test only sees trackers written into the page itself. Trackers added later by scripts, and telemetry inside apps, still need evidence in the rating file, such as a privacy policy or an [Exodus Privacy](https://reports.exodus-privacy.eu.org) report.

An outside test cannot see SRS and ARC without sending mail, so ratings answer those criteria with evidence instead.

Automated checks that have not run yet show as "Not tested yet" and stay out of the score, so a test that has not happened cannot lower a provider's score.

The SSL Labs result is the weakest grade across all of a domain's IP addresses.

Hardenize no longer offers a public API, so each page links to its public report instead of scoring it.

## Schedule

The [Scan workflow](.github/workflows/scan.yml) runs every day and tests the 40 entries with the oldest results (Internet.nl follows its own limits, below), so each service gets tested regularly without overloading the free APIs. It saves the results to [`scans/`](scans/) as JSON and commits them, and the site publishes them. Each page shows when its tests last ran.

A failed test keeps the previous result and records the error, so a temporary outage does not change a score.

### Internet.nl limits

The scan uses the Internet.nl batch API within its [terms of use](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md):

- At most 2 batch requests in any 7 days. The website test and the email test are separate requests, so one full round uses both.
- At most 5000 domains per request. When more domains have the test, the ones with missing or oldest results go first and the rest wait for a later request.
- No single-domain requests, so `--only` skips Internet.nl.

The scan records each request in `scans/internetnl-requests.json` and commits that file with the results, even when a run fails. A run that finds the weekly limit reached skips Internet.nl and keeps the existing results. Batches take hours, so the scan checks request status every 5 minutes, and a later run collects any request still running when a run ends instead of sending it again. Internet.nl ignores `--limit`, and only runs on the default branch use the Internet.nl credentials, so all runs share one record.

This website re-uses test results provided by the [Internet.nl](https://internet.nl) test tool.

## Configuration

All settings are optional repository secrets (Settings › Secrets and variables › Actions):

| Secret | Purpose |
| --- | --- |
| `SSLLABS_EMAIL` | Email registered with the [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Without it, the scan uses the v3 API. Registration needs an organization email address. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Account for the [Internet.nl batch API](https://internet.nl/faqs/batch-and-dashboard/). Without them, pages link to the public Internet.nl tests and the Internet.nl criteria stay "unknown". |
| `INTERNETNL_API` | Batch API base URL, for a [self-hosted Internet.nl](https://github.com/internetstandards/Internet.nl) instance. Defaults to `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory needs no account. GitHub license data uses the workflow's built-in token.

## Running tests locally

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Which domain is tested

The `domain` field should be the main website or web app where people sign in, for example `mail.example.com` rather than a marketing subdomain on a different host. Vendors can suggest a more accurate domain in a pull request.

# Why Privacy Ratings exists

Privacy guides help millions of people choose better apps and services, and many do excellent work. Most also share the same weaknesses:

- **Unclear rules.** A service is listed or left out, and the reason is a forum thread, a private discussion, or not published at all.
- **Pass or fail only.** A list says "recommended" or says nothing. It does not show how close something came, or what would change the result.
- **Claims without checks.** Descriptions say "encrypted" or "no logs" without linking to anything a reader can verify.
- **No testing.** Hosted services are rarely checked for basic security such as TLS settings, security headers or email authentication.
- **Separate platforms.** Suggestions and debate happen on a forum or chat server that needs its own account and moderation, apart from the actual content.
- **Slow to change.** When a product changes, lists often stay out of date because updating them depends on a few people.

Privacy Ratings is built to fix each of these.

## From awesome lists to a maintained resource

Many of these guides began as GitHub lists. The "awesome" list format, started by [Sindre Sorhus](https://github.com/sindresorhus/awesome), made it easy for anyone to publish a curated list, and thousands of awesome-something lists followed, many of them forks of each other. Lists like [Awesome Privacy](https://github.com/lissy93/awesome-privacy) do valuable work, and many entries here were first listed there.

The format has a weakness: most lists depend on one or two volunteers. When a maintainer moves on, the list goes quiet, gets archived, or splits into forks that each drift out of date. Readers cannot tell which copy is current, and nothing in a list is tested or scored.

**Privacy Ratings is backed and run by a business, [Forward Email](https://forwardemail.net).** It does not depend on volunteers who may leave or archive the repository. The data lives in structured files instead of a single README, so scripts validate, score and test it every day. The code is open source and the content is CC BY-SA licensed, so anyone can copy, check and improve it.

## What is different

**Every rule is public.** Each category has a short list of questions with a weight from 1 to 3. The questions, the meaning of each answer and how to verify it are all in the [`criteria/`](criteria/) folder. See [the criteria](https://privacyratings.com/criteria/).

**Answers need evidence.** A "yes" or "partial" must link to a source anyone can check: documentation, source code, a license file or an audit report. Anything without evidence counts as "unknown" and scores zero. An entry gets a letter grade only when enough of its answers are backed by evidence.

**Scores from 0 to 100.** Each entry gets a score, so you can see how services compare and where each one falls short.

**Automated security tests.** The Scan workflow tests hosted services on a schedule with Qualys SSL Labs, Mozilla HTTP Observatory and Internet.nl (including the Internet.nl email test for email providers). It saves the results in the repository, and each page links to them. See [SCANS.md](SCANS.md).

**Jurisdiction in the open.** Each rating shows where the company is based, whether that country is in the Five, Nine or Fourteen Eyes, whether GDPR applies, and whether the US CLOUD Act reaches it. The score leaves jurisdiction out, because what a provider can hand over depends mostly on what it keeps and who holds the keys. See [jurisdictions](https://privacyratings.com/jurisdictions/) and [the CLOUD Act](https://privacyratings.com/cloud-act/).

**Contributions happen on GitHub.** Suggestions and corrections are GitHub issues, changes are pull requests, and debate takes place in GitHub Discussions. There is no separate forum, chat server or account system, and Git keeps a public history of each change to each rating.

**Open data.** Ratings are plain Markdown and YAML files, and the build publishes the full data set as JSON. Content is licensed CC BY-SA 4.0, so anyone can reuse it.

**Picks are labeled as picks.** The maintainers choose one or two picks per category and explain each one. Picks appear separately and never change scores, so you can tell editorial judgment apart from measured results.

## Who maintains it

Privacy Ratings is backed, funded and maintained by [Forward Email](https://forwardemail.net), a privacy-focused email service that is also rated here. That funding keeps the project maintained for the long term. It is also a conflict of interest, and the project handles it in the open:

- Forward Email's score uses the same criteria as every other email provider.
- Its entry carries a disclosure, and so does any entry with another connection to the maintainers.
- Changes that raise the score of an affiliated entry must link evidence and stay open for public review before merging. See [GOVERNANCE.md](GOVERNANCE.md).
- There are no affiliate links, paid placements or sponsorships. Validation rejects links with referral parameters.

If a rating looks wrong, the whole process is to open an issue or a pull request with evidence.

## Credits

Many entries were first listed from [Awesome Privacy](https://github.com/lissy93/awesome-privacy), released under CC0. Mail server hosting data comes from [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).

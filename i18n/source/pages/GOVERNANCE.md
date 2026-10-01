<!-- source: 63c0d07d1a26 -->
# Governance

How decisions are made, how picks are chosen and how conflicts of interest are handled.

## Maintainers

Maintainers review and merge pull requests, triage issues and moderate Discussions. Maintainers are listed in [`.github/CODEOWNERS`](.github/CODEOWNERS). Anyone can become a maintainer after a record of accurate, well-sourced contributions.

## How changes are accepted

1. All changes go through a pull request. Nobody, including maintainers, pushes rating changes straight to `main`.
2. Every pull request must pass `npm test` (validation and build).
3. At least one maintainer approves the pull request.
4. Answers need evidence from a primary source: official documentation, source code, license files, published audit reports or reproducible tests. Reviews, blog posts and marketing claims without detail are not evidence.
5. When sources disagree, the most recent primary source wins. If it is still unclear, the answer is "unknown".

## Criteria changes

Criteria define every score, so changes to `criteria/` need more care:

- Open a "Criteria change" issue or a Discussion first.
- The pull request stays open for at least 7 days for public comment.
- It needs approval from two maintainers.
- Criterion ids are never renamed once published. Retire a criterion by removing it in a pull request that explains why.

## Picks

- Each category can have up to two picks.
- A pick must have a `pick_reason` that explains the choice in plain language.
- Each category has at most two picks, ordered with `pick: 1` and `pick: 2`.
- Picks are editorial. They are shown separately and never change scores.
- Anyone can challenge a pick in the "Picks" Discussions category. Challenges are answered publicly.

## Conflicts of interest

Privacy Ratings is maintained by the team behind Forward Email. Entries connected to the maintainers are "affiliated entries". Right now that means Forward Email.

Rules for affiliated entries:

- Each affiliated entry carries a `disclosure` shown at the top of its page.
- A pull request that raises an affiliated entry's score, or makes it a pick, must link evidence for every changed answer and stay open for at least 7 days before merging.
- A pull request that lowers an affiliated entry's score with valid evidence is merged like any other.
- Maintainers must add a disclosure to any entry they, or their employer, have a financial or personal connection to.

## Money

- No affiliate links. Validation rejects URLs with referral or tracking parameters.
- No paid placements, sponsored entries or paid reviews.
- Vendors can submit corrections like anyone else, with evidence, and must say they are the vendor.

## Moderation

Issues, pull requests and Discussions follow the [Code of Conduct](CODE_OF_CONDUCT.md). Maintainers may lock or hide comments that are abusive, off topic or promotional.

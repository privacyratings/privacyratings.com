# Security policy

Privacy Ratings is maintained by the team behind [Forward Email](https://forwardemail.net), and security reports follow Forward Email's organization-wide policy:

- **Policy and reporting instructions:** <https://github.com/forwardemail/.github/blob/main/SECURITY.md>
- **Security page:** <https://forwardemail.net/security>
- **security.txt:** <https://forwardemail.net/.well-known/security.txt>

Report vulnerabilities privately to **security@forwardemail.net** (OpenPGP key linked from the security.txt above), or through [GitHub private vulnerability reporting](https://github.com/privacyratings/privacyratings.com/security/advisories/new) on this repository. Please do not open a public issue for a security problem.

## In scope

- The privacyratings.com website and everything in this repository: the site generator, the automated test scripts, the GitHub Actions workflows and the `privacyratings` command-line tool, its installers and its release binaries.

## Not in scope

- The security of the apps and services that are rated. Report those to their vendors. If a rating is wrong because of a vulnerability, [submit a correction](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml) with public evidence once the issue is disclosed.

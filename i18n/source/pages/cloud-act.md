<!-- source: 2f40b8f7e8ef -->
# What is the CLOUD Act?

The **Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** is a US law that answers one question: can US authorities get data from a US company when that data is stored in another country? The answer is yes.

## What it does

1. **Location does not matter.** A provider subject to US jurisdiction must hand over data in its "possession, custody, or control" in response to valid US legal process, wherever in the world the data is stored. [Source: US Department of Justice](https://www.justice.gov/criminal/cloud-act-resources)
2. **Agreements with other countries.** The US can sign data access agreements that let trusted foreign governments request data directly from US providers for serious crimes, without going through the slower mutual legal assistance treaty (MLAT) process. [Source: US Department of Justice](https://www.justice.gov/criminal/cloud-act-resources)
3. **A way to push back.** Providers can ask a court to cancel or change a request when it conflicts with the laws of another country with an agreement in place.

Agreements are in force with the **United Kingdom** and **Australia**. Negotiations have been announced with **Canada** and the **European Union**. [Source: US Department of Justice](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## What it does not do

- It does not create new surveillance powers or remove the need for a warrant. US authorities still need valid legal process, and the content of communications generally needs a search warrant.
- It does not force a provider to decrypt data it cannot decrypt. It covers data the provider has. Data encrypted with keys only the user holds stays encrypted.
- It does not apply only to US data centers. Choosing a European server location does not help if the company running it is subject to US jurisdiction.

## Who it affects

Every company subject to US jurisdiction: Google, Microsoft, Apple, Amazon, Cloudflare, and smaller US services, including Forward Email. See [all rated services based in the United States](/jurisdictions/united-states/).

It can also reach **non-US services that store data with US cloud providers**, since the cloud provider itself can receive a request. This is why the useful question is not only "where is the company?" but also "what data exists, and who holds the keys?"

## Why encryption and minimal data matter more than location

Laws change, and every country has a way to compel data. What matters most is what a provider **can** hand over:

| Situation | What a request can reach |
| --- | --- |
| Mail stored in plain text | Everything in the mailbox |
| Mail encrypted at rest with provider-held keys | Everything, because the provider can decrypt it |
| Mail encrypted with keys derived from the user's password | Account details and connection data, not message contents |
| No logs kept | Nothing about activity |

Real examples:

- **Proton (Switzerland, outside all Eyes arrangements)** complied with 8,313 of 9,301 Swiss legal orders in its most recent yearly report, providing account information it holds. [Source: Proton transparency report](https://proton.me/legal/transparency)
- **Proton VPN (same company, same country)** complied with none, because it keeps no logs. [Source: Proton transparency report](https://proton.me/legal/transparency)
- **Tuta (Germany)** can be ordered by a German judge to hand over mailboxes or monitor them in real time. End-to-end encrypted mail stays encrypted. [Source: Tuta transparency report](https://tuta.com/blog/transparency-report)

The same company in the same country gets very different results depending on what data exists. That is why Privacy Ratings shows jurisdiction on every page but scores what providers actually do. See [how jurisdiction is handled](/jurisdictions/).

## How the CLOUD Act applies to Forward Email

Forward Email is based in the United States and is subject to the CLOUD Act. Its [technical whitepaper](https://forwardemail.net/technical-whitepaper.pdf) describes how its design limits what a request could reach:

- **Encrypted mailboxes.** Each mailbox is an individually encrypted SQLite file. The whitepaper states Forward Email cannot access message contents.
- **No logging of email content or metadata to disk.** Forward Email does not keep records of who users write to.
- **Limited data.** What could be disclosed is basic account information (such as the account email address, sign-up date and payment details) and limited IP address logs that may be kept temporarily for security and abuse prevention.
- **Valid legal process only.** Requests need a subpoena, court order or search warrant. Requests from outside the US must come through a US court, a mutual legal assistance treaty, or a CLOUD Act agreement that meets US legal requirements.
- **Notice and challenges.** Users are notified when the law allows, and overbroad requests are challenged.

Forward Email maintains Privacy Ratings. Its rating uses the same criteria as every other provider. See [the Forward Email rating](/email-providers/forward-email/) and [the governance rules](/governance/).

## Further reading

- [US Department of Justice: CLOUD Act resources](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: Cross-Border Data Sharing Under the CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: Section 702 surveillance](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)
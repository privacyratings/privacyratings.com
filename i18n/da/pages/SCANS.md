<!-- source: 16559ce369ce -->
# Automatiske test

Hostede tjenester (kategorier med `type: service`) testes automatisk, når deres vurderingsfil har et `domain`. E-mailudbydere og videresendelsestjenester med et `mail_domain` får også en e-mailtest.

| Test | Hvad den tjekker | Kriterium | Ja | Delvis | Nej |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | TLS-versioner, ciphers, certifikater og kendte TLS-fejl | `tls` | A+ eller A | A- eller B | C eller lavere |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Sikkerhedsheadere som CSP, HSTS og X-Frame-Options samt cookieflag | `security_headers` | A+ eller A | A-, B+ eller B | B- eller lavere |
| [Internet.nl-webstedstest](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS og sikkerhedsindstillinger | `web_standards` | 90 % eller mere | 70 % til 89 % | Under 70 % |
| [Internet.nl-e-mailtest](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS og DANE for maildomænet | `mail_standards` | 90 % eller mere | 70 % til 89 % | Under 70 % |
| [Hardenize](https://www.hardenize.com) | Sikkerhedskonfiguration af DNS, e-mail og web | Kun linket | | | |

## E-mailstandarder

E-mailudbydere og videresendelsestjenester med et `mail_domain` får også disse test, som køres af [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Test | Hvad den tjekker | Kriterium | Ja |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, DMARC-politik, MTA-STS-tilstand (RFC 8461), TLS-RPT (RFC 8460), DNSSEC-validering, DANE TLSA på hver MX-vært (RFC 7672) samt BIMI- og RFC 6186-SRV-poster til orientering | `transport_security` | Alle seks håndhævet |
| IMAP `CAPABILITY` | Implicit TLS på 993 (RFC 8314), IMAP4rev1 eller IMAP4rev2, IDLE. Falder tilbage til STARTTLS på 143 | `imap_standards` | Implicit TLS, IMAP4rev1/rev2 og IDLE |
| POP3 `CAPA` | Implicit TLS på 995, CAPA (RFC 2449), UIDL. Falder tilbage til STLS på 110 | `pop3_standards` | Implicit TLS, CAPA og UIDL |
| SMTP `EHLO` | Afsendelse over implicit TLS på 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Falder tilbage til STARTTLS på 587 | `smtp_standards` | Implicit TLS og alle fire udvidelser |

Servernavne kommer fra `imap_host`, `pop3_host` og `smtp_host` i vurderingsfilen eller fra udbyderens RFC 6186-SRV-poster. Sæt en vært til `false`, når udbyderen ikke tilbyder den protokol. Funktionerne er det, hver server annoncerer før login, og de fulde lister vises på hver vurderingsside.

## Sporing på webstedet

Hver post med et websted, også apps, får en sporingstest, som køres af [`scripts/trackers.js`](scripts/trackers.js). Den indlæser forsiden uden at køre JavaScript og sammenligner hvert værtsnavn for scripts, frames, billeder og stylesheets samt inline-kode med en liste over kendte sporings- og statistiktjenester.

| Fundet | Virkning på `no_trackers` |
| --- | --- |
| Sporing fra tredjeparter som Google Analytics, Google Tag Manager, Meta Pixel, Hotjar eller HubSpot | Svaret bliver »nej«, uanset hvad vurderingsfilen siger |
| Statistik uden cookies (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | Et »ja« bliver til »delvis« |
| Skrifttyper, indlejringer, fejlrapportering, supportchat eller samtykkeværktøjer | Vises på siden, indgår ikke i scoren |
| Intet | Svaret i vurderingsfilen bruges |

Når webstedet er en side på en kodehost eller i en appbutik (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play og lignende), springes testen over, fordi den side ikke drives af projektet.

Testen ser kun sporing, der er skrevet ind i selve siden. Sporing, der tilføjes senere af scripts, og telemetri i apps kræver stadig dokumentation i vurderingsfilen, for eksempel en privatlivspolitik eller en rapport fra [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS og ARC kan ikke ses udefra uden at sende post, så de er kriterier, der besvares med dokumentation i stedet for test.

Automatiske tjek, der endnu ikke er kørt, vises som »Ikke testet endnu« og tæller ikke med i scoren, så en udbyder aldrig trækkes ned for en test, der ikke har fundet sted.

For SSL Labs bruges den svageste karakter på tværs af alle et domænes IP-adresser.

Hardenize tilbyder ikke længere et offentligt API, så hver side linker til den offentlige rapport i stedet for at give point for den.

## Tidsplan

[Scan-workflowet](.github/workflows/scan.yml) kører hver dag og tester de 40 poster med de ældste resultater (Internet.nl følger sine egne grænser, se nedenfor), så hver tjeneste testes jævnligt uden at overbelaste de gratis API'er. Resultaterne gemmes i [`scans/`](scans/) som JSON, committes til repositoryet og offentliggøres sammen med webstedet. Hver side viser, hvornår dens test sidst blev kørt.

En mislykket test beholder det forrige resultat og registrerer fejlen, så et midlertidigt nedbrud ikke ændrer en score.

### Grænser for Internet.nl

Internet.nl's batch-API bruges inden for dets [brugsvilkår](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md):

- Højst 2 batchanmodninger inden for en periode på 7 dage. Webstedstesten og e-mailtesten er separate anmodninger, så én fuld runde bruger begge.
- Højst 5000 domæner pr. anmodning. Når flere domæner har testen, kommer dem med manglende eller ældste resultater først, og resten venter på en senere anmodning.
- Ingen anmodninger for enkelte domæner, så `--only` springer Internet.nl over.

Hver anmodning registreres i `scans/internetnl-requests.json`, som committes sammen med resultaterne, også når en kørsel mislykkes. En kørsel, der finder den ugentlige grænse nået, springer Internet.nl over og beholder de eksisterende resultater. Batches tager timer, så anmodningens status tjekkes hvert 5. minut, og en anmodning, der stadig kører, når kørslen slutter, hentes af en senere kørsel i stedet for at blive sendt igen. Internet.nl ignorerer `--limit`, og kun kørsler på standardgrenen bruger Internet.nl-legitimationsoplysningerne, så alle kørsler deler én registrering.

Dette websted genbruger testresultater leveret af testværktøjet [Internet.nl](https://internet.nl).

## Konfiguration

Alle indstillinger er valgfrie repository-secrets (Settings › Secrets and variables › Actions):

| Secret | Formål |
| --- | --- |
| `SSLLABS_EMAIL` | E-mailadresse registreret hos [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Uden den bruges v3-API'et. Registrering kræver en e-mailadresse fra en organisation. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Konto til [Internet.nl batch-API'et](https://internet.nl/faqs/batch-and-dashboard/). Uden dem linker siderne til de offentlige Internet.nl-test, og Internet.nl-kriterierne forbliver »ukendt«. |
| `INTERNETNL_API` | Basis-URL for batch-API'et til en [selvhostet Internet.nl](https://github.com/internetstandards/Internet.nl)-instans. Standard er `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory kræver ingen konto. Licensdata fra GitHub bruger workflowets indbyggede token.

## Kørsel af test lokalt

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Hvilket domæne der testes

Feltet `domain` bør være det primære websted eller den webapp, hvor folk logger ind, for eksempel `mail.example.com` frem for et markedsføringsunderdomæne på en anden vært. Leverandører kan foreslå et mere præcist domæne i en pull request.

<!-- source: 16559ce369ce -->
# Automatické testy

Hostované služby (kategorie s `type: service`) se testují automaticky, pokud jejich soubor s hodnocením obsahuje `domain`. Poskytovatelé e-mailu a služby pro přeposílání s `mail_domain` procházejí také e-mailovým testem.

| Test | Co kontroluje | Kritérium | Ano | Částečně | Ne |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | Verze TLS, šifry, certifikáty a známé chyby TLS | `tls` | A+ nebo A | A- nebo B | C nebo horší |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Bezpečnostní hlavičky jako CSP, HSTS a X-Frame-Options a příznaky cookies | `security_headers` | A+ nebo A | A-, B+ nebo B | B- nebo horší |
| [Test webu Internet.nl](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS a bezpečnostní volby | `web_standards` | 90 % a více | 70 % až 89 % | Pod 70 % |
| [E-mailový test Internet.nl](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS a DANE pro poštovní doménu | `mail_standards` | 90 % a více | 70 % až 89 % | Pod 70 % |
| [Hardenize](https://www.hardenize.com) | Konfigurace zabezpečení DNS, e-mailu a webu | Pouze odkaz | | | |

## E-mailové standardy

Poskytovatelé e-mailu a služby pro přeposílání s `mail_domain` procházejí také těmito testy, které spouští [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Test | Co kontroluje | Kritérium | Ano |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, politika DMARC, režim MTA-STS (RFC 8461), TLS-RPT (RFC 8460), validace DNSSEC, DANE TLSA na každém hostiteli MX (RFC 7672) a pro informaci také BIMI a záznamy SRV podle RFC 6186 | `transport_security` | Všech šest vynuceno |
| IMAP `CAPABILITY` | Implicitní TLS na 993 (RFC 8314), IMAP4rev1 nebo IMAP4rev2, IDLE. Náhradně STARTTLS na 143 | `imap_standards` | Implicitní TLS, IMAP4rev1/rev2 a IDLE |
| POP3 `CAPA` | Implicitní TLS na 995, CAPA (RFC 2449), UIDL. Náhradně STLS na 110 | `pop3_standards` | Implicitní TLS, CAPA a UIDL |
| SMTP `EHLO` | Odesílání přes implicitní TLS na 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Náhradně STARTTLS na 587 | `smtp_standards` | Implicitní TLS a všechna čtyři rozšíření |

Názvy serverů pocházejí z `imap_host`, `pop3_host` a `smtp_host` v souboru s hodnocením, nebo ze záznamů SRV poskytovatele podle RFC 6186. Pokud poskytovatel daný protokol nenabízí, nastavte hostitele na `false`. Schopnosti jsou to, co každý server nabízí před přihlášením, a úplné seznamy se zobrazují na stránce každého hodnocení.

## Sledovače na webu

Každá položka s webem, včetně aplikací, prochází testem sledovačů, který spouští [`scripts/trackers.js`](scripts/trackers.js). Test načte domovskou stránku bez spuštění JavaScriptu a porovná hostitele všech skriptů, rámců, obrázků a stylů i vložený kód se seznamem známých sledovacích a analytických služeb.

| Nalezeno | Vliv na `no_trackers` |
| --- | --- |
| Sledovače třetích stran jako Google Analytics, Google Tag Manager, Meta Pixel, Hotjar nebo HubSpot | Odpověď bude „no“ bez ohledu na obsah souboru s hodnocením |
| Analytika bez cookies (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | Z „yes“ se stane „partial“ |
| Písma, vložený obsah, hlášení chyb, chat podpory nebo nástroje pro souhlas | Uvedeno na stránce, nehodnotí se |
| Nic | Použije se odpověď ze souboru s hodnocením |

Pokud je web stránkou hostingu kódu nebo obchodu s aplikacemi (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play a podobně), test se přeskočí, protože tuto stránku neprovozuje projekt.

Test vidí jen sledovače zapsané přímo ve stránce. Sledovače přidané později skripty a telemetrie uvnitř aplikací stále potřebují důkazy v souboru s hodnocením, například zásady ochrany soukromí nebo zprávu [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS a ARC nelze zvenčí zjistit bez odeslání pošty, takže jde o kritéria zodpovězená důkazy místo testů.

Automatické kontroly, které ještě neproběhly, se zobrazují jako „Zatím netestováno“ a do skóre se nezapočítávají, takže poskytovatel nikdy nepřijde o body kvůli testu, který se ještě neuskutečnil.

U SSL Labs se použije nejhorší známka ze všech IP adres domény.

Hardenize už nenabízí veřejné API, takže každá stránka místo hodnocení odkazuje na jeho veřejnou zprávu.

## Harmonogram

[Workflow Scan](.github/workflows/scan.yml) běží každý den a testuje 40 položek s nejstaršími výsledky (Internet.nl se řídí vlastními limity, viz níže), takže každá služba je testována pravidelně bez přetěžování bezplatných API. Výsledky se ukládají do [`scans/`](scans/) jako JSON, commitují se do repozitáře a zveřejňují spolu s webem. Každá stránka ukazuje, kdy její testy naposledy proběhly.

Neúspěšný test ponechá předchozí výsledek a zaznamená chybu, takže dočasný výpadek skóre nezmění.

### Limity Internet.nl

Dávkové API Internet.nl se používá v souladu s jeho [podmínkami použití](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md):

- Nejvýše 2 dávkové požadavky za libovolných 7 dní. Test webu a test e-mailu jsou samostatné požadavky, takže jedno úplné kolo využije oba.
- Nejvýše 5000 domén na jeden požadavek. Pokud se test týká více domén, mají přednost ty s chybějícími nebo nejstaršími výsledky a zbytek počká na pozdější požadavek.
- Žádné požadavky na jednu doménu, takže `--only` Internet.nl přeskočí.

Každý požadavek se zaznamenává do `scans/internetnl-requests.json`, který se commituje spolu s výsledky i tehdy, když běh selže. Běh, který zjistí, že týdenní limit je vyčerpán, Internet.nl přeskočí a ponechá stávající výsledky. Dávky trvají hodiny, proto se stav požadavku kontroluje každých 5 minut a požadavek, který při skončení běhu stále probíhá, převezme pozdější běh, místo aby se odeslal znovu. Internet.nl ignoruje `--limit` a přihlašovací údaje Internet.nl používají jen běhy na výchozí větvi, takže všechny běhy sdílejí jeden záznam.

Tento web znovu využívá výsledky testů poskytnuté testovacím nástrojem [Internet.nl](https://internet.nl).

## Konfigurace

Všechna nastavení jsou volitelné secrets repozitáře (Settings › Secrets and variables › Actions):

| Secret | Účel |
| --- | --- |
| `SSLLABS_EMAIL` | E-mail registrovaný pro [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Bez něj se použije API v3. Registrace vyžaduje e-mailovou adresu organizace. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Účet pro [dávkové API Internet.nl](https://internet.nl/faqs/batch-and-dashboard/). Bez nich stránky odkazují na veřejné testy Internet.nl a kritéria Internet.nl zůstávají „unknown“. |
| `INTERNETNL_API` | Základní URL dávkového API pro [self-hosted instanci Internet.nl](https://github.com/internetstandards/Internet.nl). Výchozí hodnota je `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory nevyžaduje účet. Licenční data z GitHubu používají vestavěný token workflow.

## Lokální spuštění testů

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Která doména se testuje

Pole `domain` má obsahovat hlavní web nebo webovou aplikaci, kde se lidé přihlašují, například `mail.example.com`, a ne marketingovou subdoménu na jiném hostiteli. Výrobci mohou přesnější doménu navrhnout v pull requestu.

<!-- source: 16559ce369ce -->
# Automaattiset testit

Isännöidyt palvelut (kategoriat, joissa on `type: service`) testataan automaattisesti, kun niiden arviotiedostossa on `domain`. Sähköpostipalvelut ja edelleenlähetyspalvelut, joilla on `mail_domain`, saavat lisäksi sähköpostitestin.

| Testi | Mitä se tarkistaa | Kriteeri | Kyllä | Osittain | Ei |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | TLS-versiot, salausalgoritmit, varmenteet ja tunnetut TLS-haavoittuvuudet | `tls` | A+ tai A | A- tai B | C tai heikompi |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Tietoturvaotsakkeet, kuten CSP, HSTS ja X-Frame-Options, sekä evästeiden määreet | `security_headers` | A+ tai A | A-, B+ tai B | B- tai heikompi |
| [Internet.nl-verkkosivustotesti](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS ja tietoturva-asetukset | `web_standards` | 90 % tai enemmän | 70–89 % | Alle 70 % |
| [Internet.nl-sähköpostitesti](https://internet.nl/test-mail/) | Sähköpostiverkkotunnuksen IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS ja DANE | `mail_standards` | 90 % tai enemmän | 70–89 % | Alle 70 % |
| [Hardenize](https://www.hardenize.com) | DNS-, sähköposti- ja verkkotietoturvan määritykset | Vain linkitetty | | | |

## Sähköpostistandardit

Sähköpostipalvelut ja edelleenlähetyspalvelut, joilla on `mail_domain`, saavat myös nämä testit, jotka suorittaa [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Testi | Mitä se tarkistaa | Kriteeri | Kyllä |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, DMARC-käytäntö, MTA-STS-tila (RFC 8461), TLS-RPT (RFC 8460), DNSSEC-validointi, DANE TLSA jokaisella MX-palvelimella (RFC 7672) sekä tiedoksi BIMI ja RFC 6186 -SRV-tietueet | `transport_security` | Kaikki kuusi pakotettuina |
| IMAP `CAPABILITY` | Implisiittinen TLS portissa 993 (RFC 8314), IMAP4rev1 tai IMAP4rev2, IDLE. Varavaihtoehtona STARTTLS portissa 143 | `imap_standards` | Implisiittinen TLS, IMAP4rev1/rev2 ja IDLE |
| POP3 `CAPA` | Implisiittinen TLS portissa 995, CAPA (RFC 2449), UIDL. Varavaihtoehtona STLS portissa 110 | `pop3_standards` | Implisiittinen TLS, CAPA ja UIDL |
| SMTP `EHLO` | Lähetys implisiittisellä TLS:llä portissa 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Varavaihtoehtona STARTTLS portissa 587 | `smtp_standards` | Implisiittinen TLS ja kaikki neljä laajennusta |

Palvelinten nimet saadaan arviotiedoston kentistä `imap_host`, `pop3_host` ja `smtp_host` tai palveluntarjoajan RFC 6186 -SRV-tietueista. Aseta palvelimen arvoksi `false`, kun palveluntarjoaja ei tarjoa kyseistä protokollaa. Ominaisuudet ovat sitä, mitä kukin palvelin ilmoittaa ennen kirjautumista, ja täydelliset luettelot näytetään kunkin arviosivulla.

## Verkkosivuston seurantatyökalut

Jokainen kohde, jolla on verkkosivusto, sovellukset mukaan lukien, saa seurantatestin, jonka suorittaa [`scripts/trackers.js`](scripts/trackers.js). Se lataa etusivun suorittamatta JavaScriptiä ja vertaa jokaisen skriptin, kehyksen, kuvan ja tyylitiedoston isäntää sekä sivun sisäistä koodia tunnettujen seuranta- ja analytiikkapalveluiden luetteloon.

| Löydös | Vaikutus kriteeriin `no_trackers` |
| --- | --- |
| Kolmansien osapuolten seurantatyökalut, kuten Google Analytics, Google Tag Manager, Meta Pixel, Hotjar tai HubSpot | Vastaukseksi tulee ”no” riippumatta siitä, mitä arviotiedostossa lukee |
| Evästeetön analytiikka (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | ”yes” muuttuu arvoksi ”partial” |
| Fontit, upotukset, virheraportointi, tukichat tai suostumustyökalut | Luetellaan sivulla, ei pisteytetä |
| Ei mitään | Käytetään arviotiedoston vastausta |

Kun verkkosivusto on koodinjakopalvelun tai sovelluskaupan sivu (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play ja vastaavat), testi ohitetaan, koska kyseinen sivu ei ole projektin ylläpitämä.

Testi näkee vain itse sivulle kirjoitetut seurantatyökalut. Skriptien myöhemmin lisäämät seurantatyökalut ja sovellusten sisäinen telemetria vaativat edelleen todisteet arviotiedostoon, kuten tietosuojakäytännön tai [Exodus Privacy](https://reports.exodus-privacy.eu.org) -raportin.

SRS:ää ja ARCia ei voi nähdä ulkopuolelta lähettämättä postia, joten ne ovat testien sijaan kriteerejä, joihin vastataan todisteilla.

Automaattiset tarkistukset, joita ei ole vielä suoritettu, näkyvät tilassa ”Ei vielä testattu” ja jätetään pois pisteistä, joten palveluntarjoajaa ei koskaan rangaista testistä, jota ei ole tehty.

SSL Labsin osalta käytetään verkkotunnuksen kaikkien IP-osoitteiden heikointa arvosanaa.

Hardenize ei enää tarjoa julkista rajapintaa, joten jokainen sivu linkittää sen julkiseen raporttiin pisteyttämisen sijaan.

## Aikataulu

[Scan-työnkulku](.github/workflows/scan.yml) suoritetaan päivittäin, ja se testaa ne 40 kohdetta, joiden tulokset ovat vanhimpia (Internet.nl noudattaa omia rajojaan, ks. alla), joten jokainen palvelu testataan säännöllisesti ylikuormittamatta ilmaisia rajapintoja. Tulokset tallennetaan JSON-muodossa kansioon [`scans/`](scans/), viedään repositorioon ja julkaistaan sivuston mukana. Jokainen sivu näyttää, milloin sen testit on viimeksi suoritettu.

Epäonnistunut testi säilyttää edellisen tuloksen ja kirjaa virheen, joten tilapäinen katkos ei muuta pisteitä.

### Internet.nl:n rajat

Internet.nl:n eräajo-API:a käytetään sen [käyttöehtojen](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md) mukaisesti:

- Enintään 2 eräpyyntöä minkä tahansa 7 päivän aikana. Verkkosivustotesti ja sähköpostitesti ovat erillisiä pyyntöjä, joten yksi täysi kierros käyttää molemmat.
- Enintään 5000 verkkotunnusta pyyntöä kohden. Kun testattavia verkkotunnuksia on enemmän, ensin tulevat ne, joilta tulokset puuttuvat tai joiden tulokset ovat vanhimpia, ja loput odottavat myöhempää pyyntöä.
- Yksittäisen verkkotunnuksen pyyntöjä ei tehdä, joten `--only` ohittaa Internet.nl:n.

Jokainen pyyntö kirjataan tiedostoon `scans/internetnl-requests.json`, joka viedään repositorioon tulosten mukana silloinkin, kun ajo epäonnistuu. Ajo, joka havaitsee viikkorajan täyttyneen, ohittaa Internet.nl:n ja säilyttää nykyiset tulokset. Erät kestävät tunteja, joten pyynnön tila tarkistetaan 5 minuutin välein, ja pyyntö, joka on yhä käynnissä ajon päättyessä, noudetaan myöhemmässä ajossa sen sijaan, että se lähetettäisiin uudelleen. Internet.nl ohittaa valitsimen `--limit`, ja vain oletushaaran ajot käyttävät Internet.nl:n tunnuksia, joten kaikki ajot jakavat yhden kirjanpidon.

Tämä sivusto käyttää uudelleen [Internet.nl](https://internet.nl)-testityökalun tarjoamia testituloksia.

## Määritykset

Kaikki asetukset ovat valinnaisia repositorion salaisuuksia (Settings › Secrets and variables › Actions):

| Salaisuus | Tarkoitus |
| --- | --- |
| `SSLLABS_EMAIL` | [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md) -rajapintaan rekisteröity sähköpostiosoite. Ilman sitä käytetään v3-rajapintaa. Rekisteröityminen vaatii organisaation sähköpostiosoitteen. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Tili [Internet.nl-eräajorajapintaan](https://internet.nl/faqs/batch-and-dashboard/). Ilman niitä sivut linkittävät Internet.nl:n julkisiin testeihin, ja Internet.nl-kriteerit jäävät tilaan ”unknown”. |
| `INTERNETNL_API` | Eräajorajapinnan perus-URL [itse ylläpidettyä Internet.nl](https://github.com/internetstandards/Internet.nl) -instanssia varten. Oletus on `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory ei vaadi tiliä. GitHubin lisenssitiedot käyttävät työnkulun sisäänrakennettua tunnusta.

## Testien ajaminen paikallisesti

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Mikä verkkotunnus testataan

`domain`-kentän tulee olla pääsivusto tai verkkosovellus, johon ihmiset kirjautuvat, esimerkiksi `mail.example.com` eikä eri isännällä oleva markkinointialiverkkotunnus. Valmistajat voivat ehdottaa tarkempaa verkkotunnusta pull requestissa.

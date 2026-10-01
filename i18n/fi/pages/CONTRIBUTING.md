<!-- source: 38b6fc4b567c -->
# Osallistuminen

Kaikki tapahtuu GitHubissa. Muuta foorumia, chattia tai rekisteröitävää tiliä ei ole.

| Kun haluat | Käytä |
| --- | --- |
| Ehdottaa sovellusta tai palvelua | [Avaa ”Suggest”-issue](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Ilmoittaa väärästä vastauksesta tai rikkinäisestä linkistä | [Avaa ”Correction”-issue](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml) tai käytä minkä tahansa arviosivun kohtaa ”Ilmoita korjaus” |
| Ehdottaa kriteerejä tai muuttaa niitä | [Avaa ”Criteria change” -issue](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Korjata asian itse | Käytä minkä tahansa arviosivun kohtaa ”Muokkaa GitHubissa” tai avaa pull request |
| Kysyä kysymyksen tai keskustella suosituksesta | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Arvion muokkaaminen

Jokainen sovellus tai palvelu on yksi Markdown-tiedosto polussa `ratings/<category>/<name>.md`. Tiedoston alussa on YAMLia. Sen alapuolella oleva sisältö on valinnaisia Markdown-huomautuksia, jotka näytetään sivulla.

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

Säännöt (`npm test` tarkistaa ne automaattisesti):

- `answer` on jokin arvoista `yes`, `partial`, `no`, `unknown` tai `n/a`.
- `yes` ja `partial` vaativat `evidence`-linkin. `no` vaatii `note`- tai `evidence`-kentän.
- Todisteen on oltava ensisijainen lähde: virallinen dokumentaatio, lähdekoodi, lisenssitiedosto, auditointiraportti tai toistettava testi. Ei arvosteluja, foorumiviestejä tai yksityiskohdattomia markkinointisivuja.
- Linkkien on oltava `https://`-muotoisia, eikä niissä saa olla suosittelu- tai seurantaparametreja.
- Automaattiset kriteerit (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) täytetään testeillä. Älä aseta niitä käsin.
- `no_trackers` tarkistetaan myös [seurantatestillä](SCANS.md#website-trackers). Jos etusivu lataa kolmannen osapuolen seurantatyökalun, vastaukseksi tulee ”no” riippumatta siitä, mitä tiedostossa lukee.
- Jätä pois kriteerit, joille ei vielä ole todisteita. Ne lasketaan arvoksi `unknown`.
- `jurisdiction` on maa, jossa yrityksen oikeudellinen kotipaikka on (ei se, missä sen palvelimet ovat). Lisää maa tiedostoon [`jurisdictions.yml`](jurisdictions.yml), jos se puuttuu. Jokainen siellä oleva huomautus vaatii lähteen.
- Vain ylläpitäjät lisäävät kentät `pick`, `pick_reason` ja `disclosure`. Järjestä kaksi suositusta merkinnöillä `pick: 1` ja `pick: 2`. Katso [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` säilyttää nimen, joka kohteella oli Awesome Privacyssa ennen uudelleennimeämistä, jotta kuukausittainen tuonti ei lisää sitä uudelleen. Jos haluat jättää Awesome Privacyn kohteen pysyvästi pois, lisää se perusteluineen tiedostoon [`import-skip.yml`](import-skip.yml).

Kunkin kategorian kriteerit ja kunkin vastauksen merkitys ovat kansiossa [`criteria/`](criteria/) ja [kriteerisivulla](https://privacyratings.com/criteria/).

## Sovelluksen tai palvelun lisääminen

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Tämä luo tiedoston, jossa jokainen kriteeri on merkitty arvolla `unknown`. Täytä se, minkä voit todistaa, poista loput ja suorita sitten `npm test`.

## Kirjoitustyyli

- Selkeää, neutraalia kieltä. Kuvaa, mitä jokin tekee, älä sitä, kuinka hieno se on.
- Lyhyitä virkkeitä. Kuvaukset ovat alle 300 merkkiä.
- Ei ensimmäistä persoonaa, ei päivämääriä leipätekstissä, ei markkinointiväitteitä.
- Nimeä asiat samoin kuin valmistaja.

## Sivuston ajaminen paikallisesti

Vaatii Node.js:n version 18 tai uudemman.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Sivun lisääminen

Lisää kansioon [`pages/`](pages/) Markdown-tiedosto, jossa on `title` ja `description`. Se julkaistaan osoitteessa `/<file-name>/` Markdown-kopion, rakenteisten tietojen ja sivukarttamerkinnän kanssa.

## Kategorian tai kriteerin lisääminen

1. Lisää kategoria tiedostoon [`categories.yml`](categories.yml) oikean ryhmän alle.
2. Lisää halutessasi `criteria/<category-id>.yml`, jossa on kategoriakohtaiset kriteerit. Kopioi muoto olemassa olevasta tiedostosta.
3. Luo `ratings/<category-id>/` ja lisää kohteet.
4. Kriteerimuutoksissa noudatetaan tiedoston [GOVERNANCE.md](GOVERNANCE.md) tarkistussääntöjä.

## Käännökset

Sivusto julkaistaan 25 kielellä. Lähdekieli on englanti, ja jokainen muu kieli on kansiossa `i18n/<code>/`:

| Tiedosto | Sisältö |
| --- | --- |
| `ui.json` | Käyttöliittymän tekstit: otsikot, painikkeet ja lauseet, joissa on `{placeholders}` |
| `data.json` | Kategorioiden nimet, kriteerit, oppaat ja maakohtaiset huomautukset |
| `entries.json` | Arvioiden kuvaukset, suositusten perustelut ja sidonnaisuusilmoitukset |
| `pages/*.md` | Kokonaiset asiakirjat, kuten tämä |

Jokainen JSON-tiedosto liittää englanninkieliseen tekstiin sen käännöksen. Kun englanninkielinen teksti muuttuu, vanha käännös ei enää vastaa sitä, joten englanninkielinen teksti näytetään, kunnes joku kääntää uuden tekstin. Vanhentunutta sisältöä ei näytetä koskaan.

1. Suorita `npm run build`. Se kirjoittaa ajantasaiset englanninkieliset luettelot kansioon `i18n/source/`.
2. Suorita `npm run i18n:check` nähdäksesi, mitä kustakin kielestä puuttuu, tai `node scripts/i18n-check.js de ui` yhden kielen ja tiedoston tarkempia tietoja varten.
3. Lisää tai korjaa käännöksiä ja säilytä jokainen `{placeholder}` täsmälleen ennallaan.
4. Asiakirjaa varten kopioi englanninkielinen teksti kansiosta `i18n/source/pages/`, säilytä sen ensimmäinen rivi (`<!-- source: … -->`, joka sitoo käännöksen kyseiseen englanninkieliseen versioon) ja käännä loput.

Yksittäisten vastausten huomautukset ja todisteet pysyvät englanniksi. Vertailut ja useimmat yksittäiset arviot ovat vain englanniksi; suositukset, kategoriat, oppaat, vaihtoehdot, avoimen lähdekoodin luettelot, lainkäyttöalueet ja asiakirjat käännetään. Kielivalikko ja automaattinen uudelleenohjaus käyttävät kunkin sivun `hreflang`-linkkejä.

## Pull requestin tarkistuslista

- [ ] `npm test` menee läpi.
- [ ] Jokainen muutettu vastaus linkittää todisteisiin.
- [ ] Jos työskentelet muuttamassasi palvelussa tai olet siihen muuten sidoksissa, kerroit siitä pull requestissa.

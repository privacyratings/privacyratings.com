<!-- source: 38b6fc4b567c -->
# Bijdragen

Alles gebeurt op GitHub. Er is geen ander forum, geen chat en geen account om voor aan te melden.

| Om dit te doen | Gebruik |
| --- | --- |
| Een app of dienst voorstellen | [Open een issue "Suggest"](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Een onjuist antwoord of een kapotte link melden | [Open een issue "Correction"](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), of gebruik "Een correctie melden" op een beoordelingspagina |
| Criteria voorstellen of wijzigen | [Open een issue "Criteria change"](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Het zelf oplossen | Gebruik "Bewerken op GitHub" op een beoordelingspagina, of open een pull request |
| Een vraag stellen of over een keuze discussiëren | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Een beoordeling bewerken

Elke app of dienst is één Markdown-bestand in `ratings/<category>/<name>.md`. Het begin van het bestand is YAML. Alles daaronder zijn optionele Markdown-opmerkingen die op de pagina worden getoond.

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

Regels (automatisch gecontroleerd door `npm test`):

- `answer` is een van `yes`, `partial`, `no`, `unknown` of `n/a`.
- `yes` en `partial` hebben een `evidence`-link nodig. `no` heeft een `note` of `evidence` nodig.
- Bewijs moet uit een primaire bron komen: officiële documentatie, broncode, een licentiebestand, een auditrapport of een reproduceerbare test. Geen reviews, forumberichten of marketingpagina's zonder details.
- Links moeten `https://` gebruiken en mogen geen verwijzings- of trackingparameters bevatten.
- Geautomatiseerde criteria (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) worden door tests ingevuld. Stel ze niet handmatig in.
- `no_trackers` wordt ook gecontroleerd door de [trackertest](SCANS.md#website-trackers). Als de startpagina een tracker van derden laadt, wordt het antwoord "no", wat er ook in het bestand staat.
- Laat elk criterium weg waarvoor nog geen bewijs is. Het telt als `unknown`.
- `jurisdiction` is waar het bedrijf juridisch gevestigd is (niet waar de servers staan). Voeg een land toe aan [`jurisdictions.yml`](jurisdictions.yml) als het ontbreekt. Elke opmerking daarin heeft een bron nodig.
- Alleen beheerders voegen `pick`, `pick_reason` en `disclosure` toe. Gebruik `pick: 1` en `pick: 2` om twee keuzes te ordenen. Zie [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` bewaart de naam die een vermelding in Awesome Privacy had nadat ze is hernoemd, zodat de maandelijkse import haar niet opnieuw toevoegt. Om een vermelding uit Awesome Privacy definitief weg te laten, voegt u die met een reden toe aan [`import-skip.yml`](import-skip.yml).

De criteria voor elke categorie, en wat elk antwoord betekent, staan in [`criteria/`](criteria/) en op de [pagina met criteria](https://privacyratings.com/criteria/).

## Een app of dienst toevoegen

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Dit maakt een bestand aan dat elk criterium als `unknown` vermeldt. Vul in wat u kunt aantonen, verwijder de rest en voer daarna `npm test` uit.

## Schrijfstijl

- Gewone, neutrale taal. Beschrijf wat iets doet, niet hoe geweldig het is.
- Korte zinnen. Beschrijvingen blijven onder de 300 tekens.
- Geen eerste persoon, geen datums in lopende tekst, geen marketingclaims.
- Noem dingen zoals de leverancier ze noemt.

## De site lokaal draaien

Vereist Node.js 18 of nieuwer.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Een pagina toevoegen

Plaats een Markdown-bestand met een `title` en `description` in [`pages/`](pages/). Het wordt gepubliceerd op `/<file-name>/`, met een Markdown-kopie, gestructureerde gegevens en een vermelding in de sitemap.

## Een categorie of criterium toevoegen

1. Voeg de categorie toe aan [`categories.yml`](categories.yml) onder de juiste groep.
2. Voeg optioneel `criteria/<category-id>.yml` toe met criteria die specifiek zijn voor de categorie. Neem het formaat over van een bestaand bestand.
3. Maak `ratings/<category-id>/` aan en voeg vermeldingen toe.
4. Wijzigingen in criteria volgen de beoordelingsregels in [GOVERNANCE.md](GOVERNANCE.md).

## Vertalingen

De site wordt in 25 talen gepubliceerd. Engels is de bron, en elke andere taal staat in `i18n/<code>/`:

| Bestand | Bevat |
| --- | --- |
| `ui.json` | Interfacetekst: koppen, knoppen en zinnen met `{placeholders}` |
| `data.json` | Categorienamen, criteria, gidsen en landnotities |
| `entries.json` | Beschrijvingen van beoordelingen, redenen voor keuzes en openbaarmakingen |
| `pages/*.md` | Volledige documenten, zoals dit document |

Elk JSON-bestand koppelt de Engelse tekst aan de vertaling. Als het Engels verandert, komt de oude vertaling niet meer overeen, dus wordt het Engels getoond totdat iemand de nieuwe tekst vertaalt. Er wordt nooit iets verouderds getoond.

1. Voer `npm run build` uit. Dit schrijft de huidige Engelse lijsten naar `i18n/source/`.
2. Voer `npm run i18n:check` uit om te zien wat er in elke taal ontbreekt, of `node scripts/i18n-check.js de ui` voor de details van één taal en één bestand.
3. Voeg vertalingen toe of verbeter ze, en laat elke `{placeholder}` precies zoals hij is.
4. Kopieer voor een document het Engels uit `i18n/source/pages/`, behoud de eerste regel (`<!-- source: … -->`, die de vertaling aan die versie van het Engels koppelt) en vertaal de rest.

Notities en bewijs per antwoord blijven in het Engels. Vergelijkingen en de meeste afzonderlijke beoordelingen zijn alleen in het Engels; keuzes, categorieën, gidsen, alternatieven, opensourcelijsten, jurisdicties en documenten worden vertaald. Het taalmenu en de automatische doorverwijzing gebruiken de `hreflang`-links op elke pagina.

## Checklist voor pull requests

- [ ] `npm test` slaagt.
- [ ] Elk gewijzigd antwoord linkt naar bewijs.
- [ ] Als u werkt voor, of verbonden bent met, een dienst die u hebt gewijzigd, hebt u dat in de pull request vermeld.

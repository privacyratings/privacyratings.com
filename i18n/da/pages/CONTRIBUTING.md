<!-- source: f2ab6af4acf3 -->
# Sådan bidrager du

Alt foregår på GitHub. Der er intet andet forum, ingen chat og ingen konto, du skal oprette.

| For at gøre dette | Brug |
| --- | --- |
| Foreslå en app eller tjeneste | [Opret et issue af typen »Suggest«](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Rapportér et forkert svar eller et dødt link | [Opret et issue af typen »Correction«](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), eller brug »Indsend en rettelse« på en vilkårlig vurderingsside |
| Foreslå eller ændr kriterier | [Opret et issue af typen »Criteria change«](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Ret det selv | Brug »Redigér på GitHub« på en vilkårlig vurderingsside, eller opret en pull request |
| Stil et spørgsmål eller debattér en anbefaling | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Redigering af en vurdering

Hver app eller tjeneste er én Markdown-fil i `ratings/<category>/<name>.md`. Øverst i filen står YAML. Alt nedenfor er valgfrie noter i Markdown, som vises på siden.

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

Regler (kontrolleres automatisk af `npm test`):

- `answer` er en af `yes`, `partial`, `no`, `unknown` eller `n/a`.
- `yes` og `partial` kræver et `evidence`-link. `no` kræver en `note` eller `evidence`.
- Dokumentationen skal være en primær kilde: officiel dokumentation, kildekode, en licensfil, en revisionsrapport eller en reproducerbar test. Ikke anmeldelser, forumindlæg eller markedsføringssider uden detaljer.
- Links skal være `https://` og må ikke indeholde henvisnings- eller sporingsparametre.
- Automatiske kriterier (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) udfyldes af test. Sæt dem ikke manuelt.
- `no_trackers` kontrolleres også af [sporingstesten](SCANS.md#website-trackers). Hvis forsiden indlæser en sporingstjeneste fra en tredjepart, bliver svaret »no«, uanset hvad der står i filen.
- Udelad ethvert kriterium, der endnu ikke har dokumentation. Det tæller som `unknown`.
- `jurisdiction` er der, hvor virksomheden juridisk har hjemsted (ikke hvor dens servere står). Tilføj et land i [`jurisdictions.yml`](jurisdictions.yml), hvis det mangler. Hver note der skal have en kilde.
- Kun vedligeholdere tilføjer `pick`, `pick_reason` og `disclosure`. Brug `pick: 1` og `pick: 2` til at ordne to anbefalinger. Se [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` bevarer det navn, en post havde i Awesome Privacy, efter at den er omdøbt, så den månedlige import ikke tilføjer den igen. For at udelade en post fra Awesome Privacy permanent skal du tilføje den i [`import-skip.yml`](import-skip.yml) med en begrundelse.

Kriterierne for hver kategori, og hvad hvert svar betyder, findes i [`criteria/`](criteria/) og på [kriteriesiden](https://privacyratings.com/criteria/).

## Tilføjelse af en app eller tjeneste

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Det opretter en fil, der opfører hvert kriterium som `unknown`. Udfyld det, du kan dokumentere, slet resten, og kør derefter `npm test`.

## Skrivestil

- Enkelt, neutralt sprog. Beskriv, hvad noget gør, ikke hvor godt det er.
- Korte sætninger. Beskrivelser holdes under 300 tegn.
- Ingen første person, ingen datoer i brødteksten, ingen markedsføringspåstande.
- Navngiv ting, som leverandøren gør.

## Kørsel af webstedet lokalt

Kræver Node.js 18 eller nyere.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Tilføjelse af en side

Læg en Markdown-fil med `title` og `description` i [`pages/`](pages/). Den offentliggøres på `/<file-name>/` med en Markdown-kopi, strukturerede data og en post i sitemappet.

## Tilføjelse af en kategori eller et kriterium

1. Tilføj kategorien i [`categories.yml`](categories.yml) under den rigtige gruppe.
2. Tilføj eventuelt `criteria/<category-id>.yml` med kategorispecifikke kriterier. Kopiér formatet fra en eksisterende fil.
3. Opret `ratings/<category-id>/`, og tilføj poster.
4. Ændringer af kriterier følger reglerne for gennemgang i [GOVERNANCE.md](GOVERNANCE.md).

## Oversættelser

Webstedet udgives på 25 sprog. Engelsk er kilden, og hvert af de andre sprog ligger i `i18n/<code>/`:

| Fil | Indeholder |
| --- | --- |
| `ui.json` | Grænsefladetekst: overskrifter, knapper og sætninger med `{placeholders}` |
| `data.json` | Kategorinavne, kriterier, guider og landenoter |
| `entries.json` | Beskrivelser af vurderinger, begrundelser for anbefalinger og oplysninger om interessekonflikter |
| `pages/*.md` | Hele dokumenter som dette |

Hver JSON-fil knytter den engelske tekst til dens oversættelse. Når den engelske tekst ændres, passer den gamle oversættelse ikke længere, så den engelske tekst vises, indtil nogen oversætter den nye tekst. Forældet indhold vises aldrig.

1. Kør `npm run build`. Kommandoen skriver de aktuelle engelske lister til `i18n/source/`.
2. Kør `npm run i18n:check` for at se, hvad der mangler på hvert sprog, eller `node scripts/i18n-check.js de ui` for detaljerne om ét sprog og én fil.
3. Tilføj eller ret oversættelser, og bevar hver `{placeholder}` præcis som den er.
4. For et dokument skal den engelske tekst kopieres fra `i18n/source/pages/`. Behold den første linje (`<!-- source: … -->`, som knytter oversættelsen til den version af den engelske tekst), og oversæt resten.

Noter og dokumentation til de enkelte svar forbliver på engelsk. Sammenligninger og de fleste enkelte vurderinger findes kun på engelsk; anbefalinger, kategorier, guider, alternativer, open source-lister, jurisdiktioner og dokumenter oversættes. Sprogmenuen og den automatiske omdirigering bruger `hreflang`-linkene på hver side.

## Tjekliste for pull requests

- [ ] `npm test` består.
- [ ] Hvert ændret svar linker til dokumentation.
- [ ] Hvis du arbejder for eller har forbindelse til en tjeneste, du har ændret, har du oplyst det i pull requesten.

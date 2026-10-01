<!-- source: f2ab6af4acf3 -->
# Bidra

Bidrag sker på GitHub, utan något annat forum, någon chatt eller något konto att registrera.

| För att göra detta | Använd |
| --- | --- |
| Föreslå en app eller tjänst | [Öppna ett ärende av typen ”Suggest”](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Rapportera ett felaktigt svar eller en trasig länk | [Öppna ett ärende av typen ”Correction”](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), eller använd ”Rapportera en rättelse” på valfri bedömningssida |
| Föreslå eller ändra kriterier | [Öppna ett ärende av typen ”Criteria change”](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Rätta det själv | Använd ”Redigera på GitHub” på valfri bedömningssida, eller öppna en pull request |
| Ställa en fråga eller diskutera en rekommendation | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Redigera en bedömning

Varje app eller tjänst är en Markdown-fil i `ratings/<category>/<name>.md`. Filens början är YAML. Allt under den är valfria anteckningar i Markdown som visas på sidan.

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

`npm test` kontrollerar dessa regler:

- `answer` är något av `yes`, `partial`, `no`, `unknown` eller `n/a`.
- `yes` och `partial` kräver en `evidence`-länk. `no` kräver en `note` eller `evidence`.
- Belägg måste vara en primärkälla: officiell dokumentation, källkod, en licensfil, en granskningsrapport eller ett reproducerbart test. Recensioner, foruminlägg och marknadsföringssidor utan detaljer räknas inte.
- Länkar måste börja med `https://` och får inte innehålla hänvisnings- eller spårningsparametrar.
- De automatiska testerna fyller i sina kriterier (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`). Ange dem inte för hand.
- [Spårartestet](SCANS.md#website-trackers) kontrollerar också `no_trackers`. Om startsidan laddar en tredjepartsspårare blir svaret ”nej” oavsett vad filen säger.
- Utelämna kriterier som ännu saknar belägg. De räknas som `unknown`.
- `jurisdiction` är där företaget har sitt juridiska säte (inte där dess servrar finns). Lägg till ett land i [`jurisdictions.yml`](jurisdictions.yml) om det saknas. Varje anteckning där kräver en källa.
- Endast förvaltare lägger till `pick`, `pick_reason` och `disclosure`. Använd `pick: 1` och `pick: 2` för att ordna två rekommendationer. Se [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` behåller det namn en post hade i Awesome Privacy efter att den har bytt namn, så att den månatliga importen inte lägger till den igen. För att permanent utesluta en post från Awesome Privacy, lägg till den i [`import-skip.yml`](import-skip.yml) med en motivering.

Kriterierna för varje kategori, och vad varje svar betyder, finns i [`criteria/`](criteria/) och på [kriteriesidan](https://privacyratings.com/criteria/).

## Lägga till en app eller tjänst

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Detta skapar en fil som listar varje kriterium som `unknown`. Fyll i det du kan bevisa, ta bort resten och kör sedan `npm test`.

## Skrivstil

- Enkelt, neutralt språk. Beskriv vad något gör utan att berömma det.
- Korta meningar. Beskrivningar håller sig under 300 tecken.
- Ingen första person, inga datum i löptext, inga marknadsföringspåståenden.
- Namnge saker på samma sätt som leverantören gör.

## Köra webbplatsen lokalt

Kräver Node.js 18 eller senare.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Lägga till en sida

Lägg en Markdown-fil med `title` och `description` i [`pages/`](pages/). Bygget publicerar den på `/<file-name>/` med en Markdown-kopia, strukturerade data och en post i webbplatskartan.

## Lägga till en kategori eller ett kriterium

1. Lägg till kategorin i [`categories.yml`](categories.yml) under rätt grupp.
2. Lägg eventuellt till `criteria/<category-id>.yml` med kategorispecifika kriterier. Kopiera formatet från en befintlig fil.
3. Skapa `ratings/<category-id>/` och lägg till poster.
4. Ändringar av kriterier följer granskningsreglerna i [GOVERNANCE.md](GOVERNANCE.md).

## Översättningar

Webbplatsen publiceras på 25 språk. Engelska är källan, och varje annat språk finns i `i18n/<code>/`:

| Fil | Innehåller |
| --- | --- |
| `ui.json` | Gränssnittstext: rubriker, knappar och meningar med `{placeholders}` |
| `data.json` | Kategorinamn, kriterier, guider och landsanteckningar |
| `entries.json` | Beskrivningar av bedömningar, motiveringar för rekommendationer och upplysningar |
| `pages/*.md` | Hela dokument, till exempel det här |

Varje JSON-fil mappar den engelska texten till dess översättning. När den engelska texten ändras stämmer den gamla översättningen inte längre, så webbplatsen visar den engelska texten tills någon översätter den nya texten och visar aldrig en inaktuell översättning.

1. Kör `npm run build`. Kommandot skriver de aktuella engelska listorna till `i18n/source/`.
2. Kör `npm run i18n:check` för att se vad som saknas på varje språk, eller `node scripts/i18n-check.js de ui` för detaljer om ett språk och en fil.
3. Lägg till eller rätta översättningar och behåll varje `{placeholder}` exakt som den är.
4. För ett dokument: kopiera den engelska texten från `i18n/source/pages/`, behåll den första raden (`<!-- source: … -->`, som knyter översättningen till den versionen av den engelska texten) och översätt resten.

Anteckningar och belägg för enskilda svar förblir på engelska. Jämförelser och de flesta enskilda bedömningar finns bara på engelska; rekommendationer, kategorier, guider, alternativ, listor över öppen källkod, jurisdiktioner och dokument översätts. Språkmenyn och den automatiska omdirigeringen använder `hreflang`-länkarna på varje sida.

## Checklista för pull requests

- [ ] `npm test` går igenom.
- [ ] Varje ändrat svar länkar till belägg.
- [ ] Om du arbetar för, eller har koppling till, en tjänst som du har ändrat har du uppgett det i pull requesten.

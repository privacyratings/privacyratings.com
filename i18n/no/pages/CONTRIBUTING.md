<!-- source: f2ab6af4acf3 -->
# Bidra

Alt skjer på GitHub. Det finnes ikke noe annet forum, ingen chat og ingen konto å registrere seg for.

| For å gjøre dette | Bruk |
| --- | --- |
| Foreslå en app eller tjeneste | [Opprett en «Suggest»-sak](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Melde fra om et feil svar eller en død lenke | [Opprett en «Correction»-sak](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), eller bruk «Meld inn en rettelse» på en vurderingsside |
| Foreslå eller endre kriterier | [Opprett en «Criteria change»-sak](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Rette det selv | Bruk «Rediger på GitHub» på en vurderingsside, eller opprett en pull request |
| Stille et spørsmål eller diskutere et valg | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Redigere en vurdering

Hver app eller tjeneste er én Markdown-fil i `ratings/<category>/<name>.md`. Øverst i filen står YAML. Alt under det er valgfrie merknader i Markdown som vises på siden.

```yaml
---
name: Example Mail
description: >-
  One or two plain sentences about what it is.
website: https://example.com
source: https://github.com/example/example      # valgfritt
platforms: [web, android, ios]                  # valgfritt
jurisdiction: CH                                # valgfritt, landkode fra jurisdictions.yml
mainstream: true                                # valgfritt, legger til en side med «alternativer til»
aliases: [Example Office, Example Docs]         # valgfritt, andre navn folk søker etter
also_in: [macos-hardening]                      # valgfritt, viser den også i tabellen til en annen kategori
alternatives_page: true                         # valgfritt, legger til en side med «alternativer til» uten mainstream
domain: mail.example.com                        # bare tjenester, brukes til automatiske tester
mail_domain: example.com                        # bare e-postkategorier
imap_host: imap.example.com                     # bare e-postleverandører; false hvis det ikke tilbys
pop3_host: pop3.example.com                     # valgfritt, hentes fra SRV-poster når det mangler
smtp_host: smtp.example.com                     # valgfritt, hentes fra SRV-poster når det mangler
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

Regler (kontrolleres automatisk av `npm test`):

- `answer` er en av `yes`, `partial`, `no`, `unknown` eller `n/a`.
- `yes` og `partial` krever en `evidence`-lenke. `no` krever `note` eller `evidence`.
- Bevis må være en primærkilde: offisiell dokumentasjon, kildekode, en lisensfil, en revisjonsrapport eller en reproduserbar test. Ikke anmeldelser, foruminnlegg eller markedsføringssider uten detaljer.
- Lenker må være `https://` og kan ikke inneholde henvisnings- eller sporingsparametere.
- Automatiske kriterier (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) fylles ut av tester. Ikke sett dem manuelt.
- `no_trackers` kontrolleres også av [sporertesten](SCANS.md#website-trackers). Hvis forsiden laster inn en tredjepartssporer, blir svaret «nei» uansett hva filen sier.
- Utelat kriterier som ennå ikke har bevis. De regnes som `unknown`.
- `jurisdiction` er der selskapet juridisk hører hjemme (ikke der serverne står). Legg til et land i [`jurisdictions.yml`](jurisdictions.yml) hvis det mangler. Hver merknad der trenger en kilde.
- Bare vedlikeholdere legger til `pick`, `pick_reason` og `disclosure`. Bruk `pick: 1` og `pick: 2` for å rangere to valg. Se [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` beholder navnet en oppføring hadde i Awesome Privacy etter at den har fått nytt navn, slik at den månedlige importen ikke legger den til på nytt. For å utelate en oppføring fra Awesome Privacy for godt, legg den til i [`import-skip.yml`](import-skip.yml) med en begrunnelse.

Kriteriene for hver kategori, og hva hvert svar betyr, finnes i [`criteria/`](criteria/) og på [kriteriesiden](https://privacyratings.com/criteria/).

## Legge til en app eller tjeneste

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Dette lager en fil som oppfører alle kriterier som `unknown`. Fyll ut det du kan dokumentere, slett resten, og kjør deretter `npm test`.

## Skrivestil

- Enkelt, nøytralt språk. Beskriv hva noe gjør, ikke hvor bra det er.
- Korte setninger. Beskrivelser holdes under 300 tegn.
- Ingen førsteperson, ingen datoer i løpende tekst, ingen markedsføringspåstander.
- Bruk navnene slik leverandøren gjør.

## Kjøre nettstedet lokalt

Krever Node.js 18 eller nyere.

```sh
npm ci
npm test           # valider data og bygg nettstedet
npm run serve      # forhåndsvisning på http://localhost:8080
```

## Legge til en side

Legg en Markdown-fil med `title` og `description` i [`pages/`](pages/). Den publiseres på `/<file-name>/` med en Markdown-kopi, strukturerte data og en oppføring i nettstedskartet.

## Legge til en kategori eller et kriterium

1. Legg til kategorien i [`categories.yml`](categories.yml) under riktig gruppe.
2. Legg eventuelt til `criteria/<category-id>.yml` med kategorispesifikke kriterier. Kopier formatet fra en eksisterende fil.
3. Opprett `ratings/<category-id>/` og legg til oppføringer.
4. Endringer i kriteriene følger gjennomgangsreglene i [GOVERNANCE.md](GOVERNANCE.md).

## Oversettelser

Nettstedet publiseres på 25 språk. Engelsk er kilden, og alle andre språk ligger i `i18n/<code>/`:

| Fil | Inneholder |
| --- | --- |
| `ui.json` | Grensesnittekst: overskrifter, knapper og setninger med `{placeholders}` |
| `data.json` | Kategorinavn, kriterier, guider og landnotater |
| `entries.json` | Beskrivelser av vurderinger, begrunnelser for valg og opplysninger om bindinger |
| `pages/*.md` | Hele dokumenter, som dette |

Hver JSON-fil knytter den engelske teksten til oversettelsen. Når den engelske teksten endres, stemmer ikke den gamle oversettelsen lenger, så den engelske vises til noen oversetter den nye teksten. Utdatert innhold vises aldri.

1. Kjør `npm run build`. Den skriver de gjeldende engelske listene til `i18n/source/`.
2. Kjør `npm run i18n:check` for å se hva som mangler på hvert språk, eller `node scripts/i18n-check.js de ui` for detaljer om ett språk og én fil.
3. Legg til eller rett oversettelser, og behold hver `{placeholder}` nøyaktig som den er.
4. For et dokument kopierer du den engelske teksten fra `i18n/source/pages/`, beholder den første linjen (`<!-- source: … -->`, som knytter oversettelsen til den versjonen av den engelske teksten) og oversetter resten.

Notater og dokumentasjon for hvert svar forblir på engelsk. Sammenligninger og de fleste enkeltvurderinger finnes bare på engelsk; valg, kategorier, guider, alternativer, lister over åpen kildekode, jurisdiksjoner og dokumenter oversettes. Språkmenyen og den automatiske videresendingen bruker `hreflang`-lenkene på hver side.

## Sjekkliste for pull requests

- [ ] `npm test` består.
- [ ] Hvert endrede svar lenker til bevis.
- [ ] Hvis du jobber for, eller har tilknytning til, en tjeneste du har endret, har du opplyst om det i pull requesten.

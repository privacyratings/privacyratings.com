<!-- source: f2ab6af4acf3 -->
# Come contribuire

Tutto avviene su GitHub. Non ci sono altri forum, chat o account a cui registrarsi.

| Per fare questo | Usa |
| --- | --- |
| Suggerire un'app o un servizio | [Apri una issue "Suggest"](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Segnalare una risposta sbagliata o un link non funzionante | [Apri una issue "Correction"](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), oppure usa "Segnala una correzione" in qualsiasi pagina di valutazione |
| Proporre o modificare criteri | [Apri una issue "Criteria change"](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Correggere in autonomia | Usa "Modifica su GitHub" in qualsiasi pagina di valutazione, oppure apri una pull request |
| Fare una domanda o discutere una scelta | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Modificare una valutazione

Ogni app o servizio è un file Markdown in `ratings/<category>/<name>.md`. La parte iniziale del file è in YAML. Tutto ciò che segue è costituito da note Markdown facoltative mostrate nella pagina.

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

Regole (verificate automaticamente da `npm test`):

- `answer` è uno tra `yes`, `partial`, `no`, `unknown` o `n/a`.
- `yes` e `partial` richiedono un link `evidence`. `no` richiede una `note` o un'`evidence`.
- Le prove devono provenire da una fonte primaria: documentazione ufficiale, codice sorgente, un file di licenza, un report di audit o un test riproducibile. Non recensioni, post nei forum o pagine di marketing prive di dettagli.
- I link devono essere `https://` e non devono contenere parametri di referral o di tracciamento.
- I criteri automatici (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) vengono compilati dai test. Non impostarli a mano.
- `no_trackers` viene verificato anche dal [test dei tracker](SCANS.md#website-trackers). Se la home page carica un tracker di terze parti, la risposta diventa "no" qualunque cosa dica il file.
- Ometti qualsiasi criterio per cui non ci sono ancora prove. Conta come `unknown`.
- `jurisdiction` è il paese in cui l'azienda ha sede legale (non dove si trovano i suoi server). Aggiungi un paese a [`jurisdictions.yml`](jurisdictions.yml) se manca. Ogni nota in quel file richiede una fonte.
- Solo i curatori aggiungono `pick`, `pick_reason` e `disclosure`. Usa `pick: 1` e `pick: 2` per ordinare due scelte. Consulta [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` conserva il nome che una voce aveva in Awesome Privacy dopo essere stata rinominata, così l'importazione mensile non la aggiunge di nuovo. Per escludere definitivamente una voce di Awesome Privacy, aggiungila a [`import-skip.yml`](import-skip.yml) con una motivazione.

I criteri di ogni categoria, e il significato di ogni risposta, si trovano in [`criteria/`](criteria/) e nella [pagina dei criteri](https://privacyratings.com/criteria/).

## Aggiungere un'app o un servizio

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Questo crea un file che elenca ogni criterio come `unknown`. Compila ciò che puoi dimostrare, elimina il resto, poi esegui `npm test`.

## Stile di scrittura

- Linguaggio semplice e neutro. Descrivi cosa fa qualcosa, non quanto è eccezionale.
- Frasi brevi. Le descrizioni restano sotto i 300 caratteri.
- Niente prima persona, niente date nel testo, niente affermazioni pubblicitarie.
- Chiama le cose come le chiama il produttore.

## Eseguire il sito in locale

Richiede Node.js 18 o successivo.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Aggiungere una pagina

Inserisci un file Markdown con `title` e `description` in [`pages/`](pages/). Viene pubblicato all'indirizzo `/<file-name>/` con una copia in Markdown, dati strutturati e una voce nella sitemap.

## Aggiungere una categoria o un criterio

1. Aggiungi la categoria a [`categories.yml`](categories.yml) nel gruppo corretto.
2. Facoltativamente, aggiungi `criteria/<category-id>.yml` con criteri specifici della categoria. Copia il formato da un file esistente.
3. Crea `ratings/<category-id>/` e aggiungi le voci.
4. Le modifiche ai criteri seguono le regole di revisione in [GOVERNANCE.md](GOVERNANCE.md).

## Traduzioni

Il sito è pubblicato in 25 lingue. L'inglese è la lingua di partenza e ogni altra lingua si trova in `i18n/<code>/`:

| File | Contenuto |
| --- | --- |
| `ui.json` | Testo dell'interfaccia: titoli, pulsanti e frasi con `{placeholders}` |
| `data.json` | Nomi delle categorie, criteri, guide e note sui paesi |
| `entries.json` | Descrizioni delle valutazioni, motivazioni delle scelte e dichiarazioni |
| `pages/*.md` | Documenti completi come questo |

Ogni file JSON associa il testo inglese alla sua traduzione. Quando l'inglese cambia, la vecchia traduzione non corrisponde più, quindi viene mostrato l'inglese finché qualcuno non traduce il nuovo testo. Non viene mai mostrato nulla di non aggiornato.

1. Esegui `npm run build`. Il comando scrive gli elenchi inglesi aggiornati in `i18n/source/`.
2. Esegui `npm run i18n:check` per vedere cosa manca in ogni lingua, oppure `node scripts/i18n-check.js de ui` per i dettagli di una lingua e di un file.
3. Aggiungi o correggi le traduzioni, mantenendo ogni `{placeholder}` esattamente com'è.
4. Per un documento, copia l'inglese da `i18n/source/pages/`, mantieni la sua prima riga (`<!-- source: … -->`, che collega la traduzione a quella versione dell'inglese) e traduci il resto.

Le note e le prove di ogni risposta restano in inglese. I confronti e la maggior parte delle singole valutazioni sono solo in inglese; scelte, categorie, guide, alternative, elenchi open source, giurisdizioni e documenti sono tradotti. Il menu delle lingue e il reindirizzamento automatico usano i link `hreflang` di ogni pagina.

## Checklist per le pull request

- [ ] `npm test` viene superato.
- [ ] Ogni risposta modificata rimanda a prove.
- [ ] Se lavori per un servizio che hai modificato, o hai legami con esso, lo hai dichiarato nella pull request.

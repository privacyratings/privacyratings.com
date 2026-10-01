<!-- source: f2ab6af4acf3 -->
# Jak přispět

Příspěvky probíhají na GitHubu, bez jakéhokoli jiného fóra, chatu nebo účtu, ke kterému byste se museli registrovat.

| Co chcete udělat | Co použít |
| --- | --- |
| Navrhnout aplikaci nebo službu | [Otevřete issue „Suggest“](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Nahlásit chybnou odpověď nebo nefunkční odkaz | [Otevřete issue „Correction“](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), nebo použijte „Nahlásit opravu“ na stránce libovolného hodnocení |
| Navrhnout nebo změnit kritéria | [Otevřete issue „Criteria change“](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Opravit to sami | Použijte „Upravit na GitHubu“ na stránce libovolného hodnocení, nebo otevřete pull request |
| Položit otázku nebo diskutovat o naší volbě | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Úprava hodnocení

Každá aplikace nebo služba je jeden soubor Markdown v `ratings/<category>/<name>.md`. Horní část souboru je YAML. Cokoli pod ním jsou volitelné poznámky v Markdownu zobrazené na stránce.

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

`npm test` kontroluje tato pravidla:

- `answer` je jedna z hodnot `yes`, `partial`, `no`, `unknown` nebo `n/a`.
- `yes` a `partial` potřebují odkaz `evidence`. `no` potřebuje `note` nebo `evidence`.
- Důkazy musí pocházet z primárního zdroje: oficiální dokumentace, zdrojový kód, licenční soubor, zpráva z auditu nebo reprodukovatelný test. Recenze, příspěvky na fórech a marketingové stránky bez podrobností se nepočítají.
- Odkazy musí začínat `https://` a nesmí obsahovat referral ani sledovací parametry.
- Automatické testy vyplňují svá kritéria (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`). Nenastavujte je ručně.
- [Test sledovačů](SCANS.md#website-trackers) kontroluje také `no_trackers`. Pokud domovská stránka načítá sledovač třetí strany, odpověď bude „no“ bez ohledu na obsah souboru.
- Vynechte každé kritérium, pro které zatím nemáte důkazy. Počítá se jako `unknown`.
- `jurisdiction` je místo, kde má společnost právní sídlo (nikoli kde jsou její servery). Pokud země chybí, přidejte ji do [`jurisdictions.yml`](jurisdictions.yml). Každá poznámka tam potřebuje zdroj.
- `pick`, `pick_reason` a `disclosure` přidávají pouze správci. Pro seřazení dvou voleb použijte `pick: 1` a `pick: 2`. Viz [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` uchovává název, který položka měla v Awesome Privacy, i po jejím přejmenování, aby ji měsíční import nepřidal znovu. Chcete-li položku z Awesome Privacy trvale vynechat, přidejte ji s odůvodněním do [`import-skip.yml`](import-skip.yml).

Kritéria pro každou kategorii a význam jednotlivých odpovědí najdete v [`criteria/`](criteria/) a na [stránce kritérií](https://privacyratings.com/criteria/).

## Přidání aplikace nebo služby

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Tím vznikne soubor, ve kterém jsou všechna kritéria uvedena jako `unknown`. Vyplňte, co dokážete doložit, zbytek smažte a pak spusťte `npm test`.

## Styl psaní

- Jednoduchý, neutrální jazyk. Popisujte, co něco dělá, bez chvály.
- Krátké věty. Popisy mají méně než 300 znaků.
- Žádná první osoba, žádná data v textu, žádná marketingová tvrzení.
- Věci pojmenovávejte tak, jak to dělá výrobce.

## Lokální spuštění webu

Vyžaduje Node.js 18 nebo novější.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Přidání stránky

Vložte soubor Markdown s `title` a `description` do [`pages/`](pages/). Sestavení ho zveřejní na `/<file-name>/` spolu s kopií v Markdownu, strukturovanými daty a záznamem v mapě webu.

## Přidání kategorie nebo kritéria

1. Přidejte kategorii do [`categories.yml`](categories.yml) pod správnou skupinu.
2. Volitelně přidejte `criteria/<category-id>.yml` s kritérii specifickými pro kategorii. Formát zkopírujte z existujícího souboru.
3. Vytvořte `ratings/<category-id>/` a přidejte položky.
4. Změny kritérií se řídí pravidly kontroly v [GOVERNANCE.md](GOVERNANCE.md).

## Překlady

Web vychází ve 25 jazycích. Zdrojem je angličtina a každý další jazyk je uložen v `i18n/<code>/`:

| Soubor | Obsahuje |
| --- | --- |
| `ui.json` | Texty rozhraní: nadpisy, tlačítka a věty s `{placeholders}` |
| `data.json` | Názvy kategorií, kritéria, průvodce a poznámky k zemím |
| `entries.json` | Popisy hodnocení, zdůvodnění doporučení a prohlášení o střetu zájmů |
| `pages/*.md` | Celé dokumenty, jako je tento |

Každý soubor JSON přiřazuje anglickému textu jeho překlad. Když se anglický text změní, starý překlad už neodpovídá, a proto web zobrazuje angličtinu, dokud někdo nový text nepřeloží, a nikdy nezobrazí zastaralý překlad.

1. Spusťte `npm run build`. Zapíše aktuální anglické seznamy do `i18n/source/`.
2. Spusťte `npm run i18n:check` a zjistěte, co v jednotlivých jazycích chybí, nebo `node scripts/i18n-check.js de ui` pro podrobnosti o jednom jazyce a souboru.
3. Přidejte nebo opravte překlady a každý `{placeholder}` ponechte přesně tak, jak je.
4. U dokumentu zkopírujte anglický text z `i18n/source/pages/`, ponechte jeho první řádek (`<!-- source: … -->`, který překlad váže k dané verzi anglického textu) a přeložte zbytek.

Poznámky a důkazy k jednotlivým odpovědím zůstávají v angličtině. Srovnání a většina jednotlivých hodnocení jsou jen v angličtině; doporučení, kategorie, průvodci, alternativy, seznamy open source, jurisdikce a dokumenty se překládají. Nabídka jazyků a automatické přesměrování používají odkazy `hreflang` na každé stránce.

## Kontrolní seznam pro pull request

- [ ] `npm test` prochází.
- [ ] Každá změněná odpověď odkazuje na důkazy.
- [ ] Pokud pracujete pro službu, kterou jste změnili, nebo jste s ní spojeni, uvedli jste to v pull requestu.

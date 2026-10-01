<!-- source: f2ab6af4acf3 -->
# Közreműködés

Minden a GitHubon történik. Nincs más fórum, csevegő vagy fiók, ahová regisztrálni kellene.

| Teendő | Eszköz |
| --- | --- |
| Alkalmazás vagy szolgáltatás javaslása | [„Suggest” hibajegy nyitása](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Hibás válasz vagy nem működő hivatkozás bejelentése | [„Correction” hibajegy nyitása](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), vagy a „Javítás bejelentése” használata bármely értékelő oldalon |
| Kritérium javaslása vagy módosítása | [„Criteria change” hibajegy nyitása](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Saját javítás | A „Szerkesztés a GitHubon” használata bármely értékelő oldalon, vagy pull request nyitása |
| Kérdés feltevése vagy egy ajánlás megvitatása | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Értékelés szerkesztése

Minden alkalmazás vagy szolgáltatás egy Markdown-fájl a `ratings/<category>/<name>.md` helyen. A fájl eleje YAML. Az alatta lévő rész opcionális, az oldalon megjelenő Markdown-megjegyzés.

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

Szabályok (az `npm test` automatikusan ellenőrzi őket):

- Az `answer` értéke `yes`, `partial`, `no`, `unknown` vagy `n/a` lehet.
- A `yes` és a `partial` válaszhoz `evidence` hivatkozás kell. A `no` válaszhoz `note` vagy `evidence` kell.
- A bizonyítéknak elsődleges forrásnak kell lennie: hivatalos dokumentáció, forráskód, licencfájl, auditjelentés vagy megismételhető teszt. Nem az: tesztcikkek, fórumbejegyzések vagy részletek nélküli marketingoldalak.
- A hivatkozásoknak `https://` kezdetűnek kell lenniük, és nem tartalmazhatnak ajánlói vagy követési paramétereket.
- Az automatikus kritériumokat (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) tesztek töltik ki. Ne állítsa be őket kézzel.
- A `no_trackers` értékét a [nyomkövető-teszt](SCANS.md#website-trackers) is ellenőrzi. Ha a kezdőlap külső nyomkövetőt tölt be, a válasz „no” lesz, függetlenül attól, mi áll a fájlban.
- Hagyja ki azokat a kritériumokat, amelyekhez még nincs bizonyíték. Ezek `unknown` értéknek számítanak.
- A `jurisdiction` az, ahol a vállalat jogi székhelye van (nem pedig a szerverei). Ha egy ország hiányzik, adja hozzá a [`jurisdictions.yml`](jurisdictions.yml) fájlhoz. Minden ottani megjegyzéshez forrás kell.
- A `pick`, `pick_reason` és `disclosure` mezőket csak a karbantartók adják hozzá. Két ajánlás sorrendjét a `pick: 1` és `pick: 2` határozza meg. Lásd: [GOVERNANCE.md](GOVERNANCE.md).
- Az `imported_name` megőrzi azt a nevet, amelyen egy bejegyzés az Awesome Privacy listában szerepelt, miután átnevezték, hogy a havi importálás ne adja hozzá újra. Ha egy Awesome Privacy-bejegyzést végleg ki szeretne hagyni, vegye fel indoklással az [`import-skip.yml`](import-skip.yml) fájlba.

Az egyes kategóriák kritériumai és az egyes válaszok jelentése a [`criteria/`](criteria/) mappában és a [kritériumok oldalán](https://privacyratings.com/criteria/) található.

## Alkalmazás vagy szolgáltatás hozzáadása

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Ez létrehoz egy fájlt, amelyben minden kritérium `unknown` értékű. Töltse ki, amit bizonyítani tud, a többit törölje, majd futtassa az `npm test` parancsot.

## Stílus

- Egyszerű, semleges nyelvezet. Azt írja le, mit csinál valami, ne azt, milyen nagyszerű.
- Rövid mondatok. A leírások 300 karakter alatt maradnak.
- Nincs első személy, nincsenek dátumok a szövegben, nincsenek marketingállítások.
- A neveket úgy írja, ahogy a gyártó.

## A webhely helyi futtatása

Node.js 18 vagy újabb szükséges.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Oldal hozzáadása

Helyezzen el egy `title` és `description` mezővel ellátott Markdown-fájlt a [`pages/`](pages/) mappában. Az oldal a `/<file-name>/` címen jelenik meg, Markdown-másolattal, strukturált adatokkal és oldaltérkép-bejegyzéssel.

## Kategória vagy kritérium hozzáadása

1. Adja hozzá a kategóriát a [`categories.yml`](categories.yml) fájlhoz a megfelelő csoportban.
2. Opcionálisan hozzon létre egy `criteria/<category-id>.yml` fájlt kategóriaspecifikus kritériumokkal. A formátumot egy meglévő fájlból másolja.
3. Hozza létre a `ratings/<category-id>/` mappát, és adjon hozzá bejegyzéseket.
4. A kritériumok módosítására a [GOVERNANCE.md](GOVERNANCE.md) átnézési szabályai vonatkoznak.

## Fordítások

A webhely 25 nyelven jelenik meg. Az angol a forrásnyelv, minden más nyelv az `i18n/<code>/` mappában található:

| Fájl | Tartalom |
| --- | --- |
| `ui.json` | Felületi szövegek: címsorok, gombok és `{placeholders}` elemeket tartalmazó mondatok |
| `data.json` | Kategórianevek, kritériumok, útmutatók és országokra vonatkozó megjegyzések |
| `entries.json` | Értékelési leírások, az ajánlások indoklása és közzétételek |
| `pages/*.md` | Teljes dokumentumok, például ez is |

Minden JSON-fájl az angol szöveget rendeli hozzá a fordításához. Ha az angol szöveg megváltozik, a régi fordítás már nem egyezik, ezért az angol szöveg jelenik meg, amíg valaki le nem fordítja az új szöveget. Elavult tartalom soha nem jelenik meg.

1. Futtassa az `npm run build` parancsot. Ez az `i18n/source/` mappába írja az aktuális angol listákat.
2. Futtassa az `npm run i18n:check` parancsot, hogy lássa, mi hiányzik az egyes nyelvekből, vagy a `node scripts/i18n-check.js de ui` parancsot egy adott nyelv és fájl részleteihez.
3. Adjon hozzá vagy javítson fordításokat, és minden `{placeholder}` elemet pontosan változatlanul hagyjon.
4. Dokumentum esetén másolja az angol szöveget az `i18n/source/pages/` mappából, tartsa meg az első sorát (`<!-- source: … -->`, amely a fordítást az angol szöveg adott verziójához köti), és fordítsa le a többit.

A válaszonkénti megjegyzések és bizonyítékok angolul maradnak. Az összehasonlítások és a legtöbb egyedi értékelés csak angolul érhető el; az ajánlások, kategóriák, útmutatók, alternatívák, nyílt forráskódú listák, joghatóságok és dokumentumok le vannak fordítva. A nyelvi menü és az automatikus átirányítás az egyes oldalakon lévő `hreflang` hivatkozásokat használja.

## Pull request ellenőrzőlista

- [ ] Az `npm test` sikeresen lefut.
- [ ] Minden módosított válasz bizonyítékra hivatkozik.
- [ ] Ha Ön egy módosított szolgáltatásnál dolgozik vagy kapcsolatban áll vele, ezt jelezte a pull requestben.

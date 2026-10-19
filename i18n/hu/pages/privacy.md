<!-- source: 95e0ae8a3554 -->
# Adatvédelmi irányelvek

A Privacy Ratings nem helyez el sütiket, nem használ analitikát, és semmit sem tölt be más oldalakról. Ez az oldal felsorol mindent, ami ténylegesen történik, amikor felkeresed az oldalt vagy használod a parancssori eszközt.

## Tárhely

Az oldalt a [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection) szolgálja ki. A GitHub biztonsági okokból naplózza minden látogató IP-címét, ahogy a [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) leírja. A Privacy Ratings nem üzemeltet saját szervert, és nem fér hozzá ezekhez a naplókhoz.

## Mit tárol az oldal a böngésződben

- `theme`: a színtéma, ha választottál egyet.
- `lang`: a választott nyelv, vagy az, amelyik az első látogatásodkor megfelelt a böngésződnek.
- `mastodon`: a megosztás menüben megadott Mastodon-szerver, ha használtad.
- Egy service worker másolatot őriz a megnyitott oldalakról, hogy offline is működjenek.

Minden az eszközödön marad. Ha a böngészőben törlöd az oldal adatait, ezek is törlődnek.

## Kérések más oldalakra

Minden szkript, stíluslap, betűtípus, kép és videó a privacyratings.com címről töltődik be, minden mást pedig blokkol a Content Security Policy. A más oldalakra mutató linkek, a megosztási linkeket is beleértve, semmit sem töltenek be, amíg meg nem nyitod őket.

## Keresés

A keresőmező letölti a keresési indexet erről az oldalról, és a böngésződben szűri. A keresőoldalon a keresett szavak megjelennek az oldal címében, mint bármely más linkben.

## Parancssori eszköz

A `privacyratings` parancssori eszköz nem küld analitikát vagy telemetriát. Erről az oldalról tölti le az értékeléseket, és naponta egyszer a GitHub API-n ellenőrzi, van-e új kiadás. Ha van újabb, az eszköz frissíti magát a GitHubról vagy npm-mel. A frissítések kikapcsolásához állítsd be a `PRIVACYRATINGS_NO_UPDATE=1` változót, vagy használd a `--no-update` kapcsolót.

## Közreműködés

Az issue-k, pull requestek és beszélgetések a GitHubon zajlanak, és nyilvánosak. A GitHub-fiókodra a GitHub General Privacy Statement vonatkozik.

## Kapcsolat

Az irányelvekkel kapcsolatos kérdéseidet egy [GitHub-issue-ban](https://github.com/privacyratings/privacyratings.com/issues) teheted fel. A biztonsági problémákat a [SECURITY.md](https://github.com/privacyratings/privacyratings.com/blob/main/SECURITY.md) szerint jelentsd.

<!-- source: 63c0d07d1a26 -->
# Styrning

Hur beslut fattas, hur rekommendationer väljs och hur intressekonflikter hanteras.

## Förvaltare

Förvaltarna granskar och sammanfogar pull requests, sorterar ärenden och modererar Discussions. Förvaltarna listas i [`.github/CODEOWNERS`](.github/CODEOWNERS). Vem som helst kan bli förvaltare efter att ha gjort korrekta bidrag med goda källor.

## Hur ändringar godkänns

1. Alla ändringar görs via en pull request. Ingen, inte heller förvaltarna, pushar ändringar av bedömningar direkt till `main`.
2. Varje pull request måste klara `npm test` (validering och bygge).
3. Minst en förvaltare godkänner pull requesten.
4. Svar kräver belägg från en primärkälla: officiell dokumentation, källkod, licensfiler, publicerade granskningsrapporter eller reproducerbara tester. Recensioner, blogginlägg och marknadsföringspåståenden utan detaljer är inte belägg.
5. När källor går isär gäller den senaste primärkällan. Om det fortfarande är oklart blir svaret ”okänt”.

## Ändringar av kriterier

Kriterierna bestämmer varje poäng, så ändringar i `criteria/` kräver större noggrannhet:

- Öppna först ett ärende av typen ”Criteria change” eller en diskussion.
- Pull requesten förblir öppen i minst 7 dagar för offentliga kommentarer.
- Den kräver godkännande från två förvaltare.
- Kriteriers id:n byts aldrig namn på efter publicering. Ett kriterium avvecklas genom att tas bort i en pull request som förklarar varför.

## Rekommendationer

- Varje kategori kan ha upp till två rekommendationer.
- En rekommendation måste ha en `pick_reason` som förklarar valet på ett enkelt språk.
- Varje kategori har högst två rekommendationer, ordnade med `pick: 1` och `pick: 2`.
- Rekommendationerna är redaktionella. De visas separat och ändrar aldrig poängen.
- Vem som helst kan ifrågasätta en rekommendation i kategorin ”Picks” i Discussions. Invändningar besvaras offentligt.

## Intressekonflikter

Privacy Ratings förvaltas av teamet bakom Forward Email. Poster med koppling till förvaltarna är ”anknutna poster”. I nuläget gäller det Forward Email.

Regler för anknutna poster:

- Varje anknuten post har en `disclosure` (upplysning) som visas överst på dess sida.
- En pull request som höjer en anknuten posts poäng, eller gör den till en rekommendation, måste länka till belägg för varje ändrat svar och vara öppen i minst 7 dagar innan den sammanfogas.
- En pull request som sänker en anknuten posts poäng med giltiga belägg sammanfogas som vilken annan som helst.
- Förvaltare måste lägga till en upplysning på varje post som de själva, eller deras arbetsgivare, har en ekonomisk eller personlig koppling till.

## Pengar

- Inga affiliatelänkar. Valideringen avvisar URL:er med hänvisnings- eller spårningsparametrar.
- Inga betalda placeringar, sponsrade poster eller betalda recensioner.
- Leverantörer kan skicka in rättelser som alla andra, med belägg, och måste uppge att de är leverantören.

## Moderering

Ärenden, pull requests och Discussions följer [uppförandekoden](CODE_OF_CONDUCT.md). Förvaltare får låsa eller dölja kommentarer som är kränkande, ovidkommande eller reklam.

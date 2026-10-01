<!-- source: 63c0d07d1a26 -->
# Styring

Hvordan beslutninger træffes, hvordan anbefalinger vælges, og hvordan interessekonflikter håndteres.

## Vedligeholdere

Vedligeholderne gennemgår og fletter pull requests, sorterer issues og modererer Discussions. Vedligeholderne er opført i [`.github/CODEOWNERS`](.github/CODEOWNERS). Alle kan blive vedligeholder efter at have leveret nøjagtige bidrag med gode kilder.

## Sådan godkendes ændringer

1. Alle ændringer går gennem en pull request. Ingen, heller ikke vedligeholderne, pusher ændringer i vurderinger direkte til `main`.
2. Hver pull request skal bestå `npm test` (validering og build).
3. Mindst én vedligeholder godkender pull requesten.
4. Svar kræver dokumentation fra en primær kilde: officiel dokumentation, kildekode, licensfiler, offentliggjorte revisionsrapporter eller reproducerbare test. Anmeldelser, blogindlæg og markedsføringspåstande uden detaljer er ikke dokumentation.
5. Når kilderne er uenige, gælder den nyeste primære kilde. Hvis det stadig er uklart, er svaret »ukendt«.

## Ændringer af kriterier

Kriterierne bestemmer hver score, så ændringer i `criteria/` kræver ekstra omhu:

- Opret først et issue af typen »Criteria change« eller en Discussion.
- Pull requesten forbliver åben i mindst 7 dage til offentlig kommentering.
- Den skal godkendes af to vedligeholdere.
- Id'er for kriterier omdøbes aldrig, når de først er offentliggjort. Et kriterium udfases ved at fjerne det i en pull request, der forklarer hvorfor.

## Anbefalinger

- Hver kategori kan have op til to anbefalinger.
- En anbefaling skal have en `pick_reason`, der forklarer valget i et enkelt sprog.
- Hver kategori har højst to anbefalinger, ordnet med `pick: 1` og `pick: 2`.
- Anbefalinger er redaktionelle. De vises separat og ændrer aldrig scorerne.
- Alle kan anfægte en anbefaling i Discussions-kategorien »Picks«. Indsigelser besvares offentligt.

## Interessekonflikter

Privacy Ratings vedligeholdes af teamet bag Forward Email. Poster med forbindelse til vedligeholderne er »tilknyttede poster«. Lige nu gælder det Forward Email.

Regler for tilknyttede poster:

- Hver tilknyttet post har en `disclosure`, der vises øverst på dens side.
- En pull request, der hæver en tilknyttet posts score eller gør den til en anbefaling, skal linke til dokumentation for hvert ændret svar og forblive åben i mindst 7 dage, før den flettes.
- En pull request, der sænker en tilknyttet posts score med gyldig dokumentation, flettes som alle andre.
- Vedligeholdere skal tilføje en oplysning om tilknytning til enhver post, som de eller deres arbejdsgiver har en økonomisk eller personlig forbindelse til.

## Penge

- Ingen affiliate-links. Valideringen afviser URL'er med henvisnings- eller sporingsparametre.
- Ingen betalte placeringer, sponsorerede poster eller betalte anmeldelser.
- Leverandører kan indsende rettelser som alle andre, med dokumentation, og skal oplyse, at de er leverandøren.

## Moderation

Issues, pull requests og Discussions følger [adfærdskodeksen](CODE_OF_CONDUCT.md). Vedligeholdere kan låse eller skjule kommentarer, der er krænkende, uden for emnet eller reklamerende.

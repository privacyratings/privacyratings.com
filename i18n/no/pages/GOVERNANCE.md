<!-- source: 63c0d07d1a26 -->
# Styring

Hvordan beslutninger tas, hvordan valgene gjøres og hvordan interessekonflikter håndteres.

## Vedlikeholdere

Vedlikeholderne gjennomgår og fletter pull requests, sorterer saker og modererer Discussions. Vedlikeholderne er oppført i [`.github/CODEOWNERS`](.github/CODEOWNERS). Alle kan bli vedlikeholdere etter å ha levert nøyaktige bidrag med gode kilder over tid.

## Slik godtas endringer

1. Alle endringer går gjennom en pull request. Ingen, heller ikke vedlikeholderne, pusher endringer i vurderinger direkte til `main`.
2. Hver pull request må bestå `npm test` (validering og bygging).
3. Minst én vedlikeholder godkjenner pull requesten.
4. Svarene krever bevis fra en primærkilde: offisiell dokumentasjon, kildekode, lisensfiler, publiserte revisjonsrapporter eller reproduserbare tester. Anmeldelser, blogginnlegg og markedsføringspåstander uten detaljer er ikke bevis.
5. Når kildene er uenige, gjelder den nyeste primærkilden. Hvis det fortsatt er uklart, er svaret «ukjent».

## Endringer i kriteriene

Kriteriene bestemmer hver poengsum, så endringer i `criteria/` krever ekstra omhu:

- Opprett først en «Criteria change»-sak eller en diskusjon.
- Pull requesten står åpen i minst 7 dager for offentlige kommentarer.
- Den må godkjennes av to vedlikeholdere.
- ID-er for kriterier endres aldri etter at de er publisert. Et kriterium fases ut ved å fjerne det i en pull request som forklarer hvorfor.

## Valg

- Hver kategori kan ha opptil to valg.
- Et valg må ha en `pick_reason` som forklarer valget på et enkelt språk.
- Hver kategori har høyst to valg, rangert med `pick: 1` og `pick: 2`.
- Valgene er redaksjonelle. De vises separat og endrer aldri poengsummene.
- Alle kan utfordre et valg i Discussions-kategorien «Picks». Utfordringer besvares offentlig.

## Interessekonflikter

Privacy Ratings vedlikeholdes av teamet bak Forward Email. Oppføringer med tilknytning til vedlikeholderne er «tilknyttede oppføringer». Akkurat nå gjelder det Forward Email.

Regler for tilknyttede oppføringer:

- Hver tilknyttet oppføring har en `disclosure` som vises øverst på siden.
- En pull request som hever poengsummen til en tilknyttet oppføring, eller gjør den til et valg, må lenke til bevis for hvert endrede svar og stå åpen i minst 7 dager før fletting.
- En pull request som senker poengsummen til en tilknyttet oppføring med gyldige bevis, flettes som alle andre.
- Vedlikeholdere må legge til en opplysning om tilknytning for alle oppføringer som de selv eller arbeidsgiveren deres har økonomisk eller personlig tilknytning til.

## Penger

- Ingen affiliatelenker. Valideringen avviser URL-er med henvisnings- eller sporingsparametere.
- Ingen betalte plasseringer, sponsede oppføringer eller betalte anmeldelser.
- Leverandører kan sende inn rettelser som alle andre, med bevis, og må opplyse om at de er leverandøren.

## Moderering

Saker, pull requests og Discussions følger [retningslinjene for oppførsel](CODE_OF_CONDUCT.md). Vedlikeholdere kan låse eller skjule kommentarer som er krenkende, utenfor temaet eller reklame.

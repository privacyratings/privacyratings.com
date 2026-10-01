<!-- source: 206790af40f5 -->
# Hvorfor Privacy Ratings finnes

Personvernguider hjelper millioner av mennesker med å velge bedre apper og tjenester. Mange gjør et utmerket arbeid. Men de fleste har de samme svakhetene:

- **Uklare regler.** En tjeneste blir tatt med eller utelatt, og begrunnelsen er en forumtråd, en privat diskusjon eller ikke publisert i det hele tatt.
- **Bare bestått eller ikke bestått.** En liste sier «anbefalt» eller ingenting. Den viser ikke hvor nær noe var, eller hva som ville endret resultatet.
- **Påstander uten kontroll.** Beskrivelser sier «kryptert» eller «ingen logger» uten å lenke til noe leseren kan kontrollere.
- **Ingen testing.** Vertsbaserte tjenester kontrolleres sjelden for grunnleggende sikkerhet som TLS-innstillinger, sikkerhetshoder eller autentisering av e-post.
- **Separate plattformer.** Forslag og debatt foregår på et forum eller en chatserver som krever egen konto og egen moderering, atskilt fra selve innholdet.
- **Treg til å endre seg.** Når et produkt endres, blir listene ofte stående utdaterte fordi oppdateringen avhenger av noen få personer.

Privacy Ratings er laget for å løse hvert av disse problemene.

## Fra awesome-lister til en vedlikeholdt ressurs

Mange av disse guidene startet som lister på GitHub. «Awesome»-listeformatet, som [Sindre Sorhus](https://github.com/sindresorhus/awesome) startet, gjorde det enkelt for hvem som helst å publisere en kuratert liste, og tusenvis av awesome-lister fulgte, mange av dem forgreninger av hverandre. Lister som [Awesome Privacy](https://github.com/lissy93/awesome-privacy) gjør et verdifullt arbeid, og mange oppføringer her ble først oppført der.

Formatet har en svakhet: De fleste listene avhenger av én eller to frivillige. Når en vedlikeholder går videre, blir listen stille, arkiveres eller deles opp i forgreninger som hver for seg blir utdaterte. Leserne kan ikke se hvilken kopi som er gjeldende, og ingenting i en liste blir testet eller gitt poeng.

**Privacy Ratings støttes og drives av en bedrift, [Forward Email](https://forwardemail.net).** Det avhenger ikke av frivillige som kan slutte eller arkivere kodelageret. Dataene er strukturerte i stedet for én enkelt README, så de kan valideres, gis poeng og testes automatisk hver dag. Og fordi alt har åpen kildekode og er lisensiert under CC BY-SA, kan fellesskapet alltid kopiere, kontrollere og forbedre det.

## Hva som er annerledes

**Alle regler er offentlige.** Hver kategori har en kort liste med spørsmål som vektes fra 1 til 3. Spørsmålene, hva hvert svar betyr og hvordan det kan kontrolleres, ligger i mappen [`criteria/`](criteria/). Se [kriteriene](https://privacyratings.com/criteria/).

**Hvert svar har bevis.** Et «ja» eller «delvis» må lenke til en kilde som alle kan sjekke: dokumentasjon, kildekode, en lisensfil eller en revisjonsrapport. Alt uten bevis regnes som «ukjent» og gir null poeng. En oppføring får bare en bokstavkarakter når nok av svarene er underbygget med bevis.

**Poengsummer, ikke bare lister.** Hver oppføring får en poengsum fra 0 til 100, så leserne kan se hvordan tjenestene står seg mot hverandre, og nøyaktig hvor hver av dem kommer til kort.

**Automatiske sikkerhetstester.** Vertsbaserte tjenester testes etter en fast plan med Qualys SSL Labs, Mozilla HTTP Observatory og Internet.nl (inkludert Internet.nl-e-posttesten for e-postleverandører). Resultatene lagres i kodelageret og lenkes fra hver side. Se [SCANS.md](SCANS.md).

**Jurisdiksjon åpent vist.** Hver side viser hvor selskapet hører hjemme, om landet er med i Five, Nine eller Fourteen Eyes, om GDPR gjelder, og om den amerikanske CLOUD Act når dit. Jurisdiksjon vises, men gir ikke poeng, fordi hva en leverandør kan utlevere, avhenger mest av hva den lagrer og hvem som har nøklene. Se [jurisdiksjoner](https://privacyratings.com/jurisdictions/) og [CLOUD Act](https://privacyratings.com/cloud-act/).

**Alt skjer på GitHub.** Forslag og rettelser er GitHub-saker. Endringer er pull requests. Debatten foregår i GitHub Discussions. Det finnes ikke noe separat forum, ingen chatserver og intet kontosystem. Hver endring i hver vurdering har en offentlig historikk.

**Åpne data.** Vurderingene er vanlige Markdown- og YAML-filer, og hele datasettet publiseres som JSON. Innholdet er lisensiert under CC BY-SA 4.0, så alle kan bruke det på nytt.

**Valg er merket som valg.** Vedlikeholderne velger ett eller to valg per kategori og forklarer hvert av dem. Valgene vises separat og endrer aldri poengsummene, så leseren kan alltid skille redaksjonell vurdering fra målte resultater.

## Hvem som vedlikeholder det

Privacy Ratings støttes, finansieres og vedlikeholdes av [Forward Email](https://forwardemail.net), en personvernfokusert e-posttjeneste som også vurderes her. Det sikrer at prosjektet vedlikeholdes på lang sikt, men det er også en interessekonflikt, så den håndteres åpent:

- Forward Email får poeng etter de samme kriteriene som alle andre e-postleverandører.
- Oppføringen har en opplysning om tilknytning, og det samme har alle oppføringer med annen tilknytning til vedlikeholderne.
- Endringer som hever poengsummen til en tilknyttet oppføring, må lenke til bevis og stå åpne for offentlig gjennomgang før fletting. Se [GOVERNANCE.md](GOVERNANCE.md).
- Det finnes ingen affiliatelenker, betalte plasseringer eller sponsorater. Valideringen avviser lenker med henvisningsparametere.

Hvis en vurdering ser feil ut, opprett en sak eller en pull request med bevis. Det er hele prosessen.

## Takk til

Mange oppføringer ble først oppført fra [Awesome Privacy](https://github.com/lissy93/awesome-privacy), utgitt under CC0. Data om hosting av e-postservere kommer fra [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).

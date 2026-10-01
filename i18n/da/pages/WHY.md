<!-- source: 206790af40f5 -->
# Hvorfor Privacy Ratings findes

Guider om privatliv hjælper millioner af mennesker med at vælge bedre apps og tjenester. Mange gør et fremragende stykke arbejde. Men de fleste har de samme svagheder:

- **Uklare regler.** En tjeneste optages eller udelades, og begrundelsen er en forumtråd, en privat diskussion eller slet ikke offentliggjort.
- **Kun bestået eller dumpet.** En liste siger »anbefalet« eller ingenting. Den viser ikke, hvor tæt noget var på, eller hvad der ville ændre resultatet.
- **Påstande uden kontrol.** Beskrivelser siger »krypteret« eller »ingen logs« uden at linke til noget, læseren kan kontrollere.
- **Ingen test.** Hostede tjenester bliver sjældent tjekket for grundlæggende sikkerhed som TLS-indstillinger, sikkerhedsheadere eller e-mailgodkendelse.
- **Separate platforme.** Forslag og debat foregår på et forum eller en chatserver, der kræver sin egen konto og moderation, adskilt fra selve indholdet.
- **Langsomme til at ændre sig.** Når et produkt ændrer sig, forbliver lister ofte forældede, fordi opdateringen afhænger af nogle få personer.

Privacy Ratings er bygget til at løse hvert af disse problemer.

## Fra awesome-lister til en vedligeholdt ressource

Mange af disse guider begyndte som lister på GitHub. Formatet »awesome«-liste, som [Sindre Sorhus](https://github.com/sindresorhus/awesome) startede, gjorde det let for alle at offentliggøre en kurateret liste, og tusindvis af awesome-lister fulgte, mange af dem forks af hinanden. Lister som [Awesome Privacy](https://github.com/lissy93/awesome-privacy) gør et værdifuldt stykke arbejde, og mange poster her blev først opført der.

Formatet har en svaghed: De fleste lister afhænger af en eller to frivillige. Når en vedligeholder går videre, går listen i stå, bliver arkiveret eller deler sig i forks, der hver især bliver forældede. Læserne kan ikke se, hvilken kopi der er den aktuelle, og intet på en liste bliver testet eller får point.

**Privacy Ratings støttes og drives af en virksomhed, [Forward Email](https://forwardemail.net).** Projektet afhænger ikke af frivillige, der kan forlade det eller arkivere repositoryet. Dataene er strukturerede i stedet for en enkelt README, så de kan valideres, gives point og testes automatisk hver dag. Og fordi alt er open source og licenseret under CC BY-SA, kan fællesskabet altid kopiere, kontrollere og forbedre det.

## Hvad der er anderledes

**Alle regler er offentlige.** Hver kategori har en kort liste over spørgsmål med en vægt fra 1 til 3. Spørgsmålene, betydningen af hvert svar og hvordan det kontrolleres, ligger alle i mappen [`criteria/`](criteria/). Se [kriterierne](https://privacyratings.com/criteria/).

**Hvert svar har dokumentation.** Et »ja« eller »delvis« skal linke til en kilde, som alle kan kontrollere: dokumentation, kildekode, en licensfil eller en revisionsrapport. Alt uden dokumentation tæller som »ukendt« og giver nul point. En post får først en bogstavkarakter, når tilstrækkeligt mange af dens svar er underbygget af dokumentation.

**Scorer, ikke kun lister.** Hver post får en score fra 0 til 100, så læserne kan se, hvordan tjenester klarer sig i forhold til hinanden, og præcis hvor hver enkelt kommer til kort.

**Automatiske sikkerhedstest.** Hostede tjenester testes efter en fast plan med Qualys SSL Labs, Mozilla HTTP Observatory og Internet.nl (herunder Internet.nl-e-mailtesten for e-mailudbydere). Resultaterne gemmes i repositoryet og linkes fra hver side. Se [SCANS.md](SCANS.md).

**Jurisdiktion åbent frem.** Hver side viser, hvor virksomheden har hjemsted, om landet er med i Five, Nine eller Fourteen Eyes, om GDPR gælder, og om den amerikanske CLOUD Act når den. Jurisdiktion vises, men indgår ikke i scoren, fordi hvad en udbyder kan udlevere, mest afhænger af, hvad den gemmer, og hvem der har nøglerne. Se [jurisdiktioner](https://privacyratings.com/jurisdictions/) og [CLOUD Act](https://privacyratings.com/cloud-act/).

**Alt foregår på GitHub.** Forslag og rettelser er GitHub-issues. Ændringer er pull requests. Debatten foregår i GitHub Discussions. Der er intet separat forum, ingen chatserver og intet kontosystem. Hver ændring af hver vurdering har en offentlig historik.

**Åbne data.** Vurderingerne er almindelige Markdown- og YAML-filer, og hele datasættet offentliggøres som JSON. Indholdet er licenseret under CC BY-SA 4.0, så alle kan genbruge det.

**Anbefalinger er mærket som anbefalinger.** Vedligeholderne vælger en eller to anbefalinger pr. kategori og begrunder hver enkelt. Anbefalinger vises separat og ændrer aldrig scorerne, så læseren altid kan skelne redaktionel vurdering fra målte resultater.

## Hvem vedligeholder det

Privacy Ratings støttes, finansieres og vedligeholdes af [Forward Email](https://forwardemail.net), en e-mailtjeneste med fokus på privatliv, som også vurderes her. Det sikrer, at projektet vedligeholdes på lang sigt, og det er også en interessekonflikt, så den håndteres åbent:

- Forward Email får point efter de samme kriterier som alle andre e-mailudbydere.
- Dens post har en oplysning om tilknytningen, og det samme gælder enhver post med en anden forbindelse til vedligeholderne.
- Ændringer, der hæver scoren for en tilknyttet post, skal linke til dokumentation og forblive åbne for offentlig gennemgang, før de flettes. Se [GOVERNANCE.md](GOVERNANCE.md).
- Der er ingen affiliate-links, betalte placeringer eller sponsorater. Valideringen afviser links med henvisningsparametre.

Hvis en vurdering ser forkert ud, kan du oprette et issue eller en pull request med dokumentation. Det er hele processen.

## Tak

Mange poster blev først opført fra [Awesome Privacy](https://github.com/lissy93/awesome-privacy), udgivet under CC0. Data om hosting af mailservere kommer fra [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).

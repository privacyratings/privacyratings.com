<!-- source: 2f40b8f7e8ef -->
# Hvad er CLOUD Act?

**Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** er en amerikansk lov, der besvarer ét spørgsmål: Kan amerikanske myndigheder få data fra en amerikansk virksomhed, når dataene er gemt i et andet land? Svaret er ja.

## Hvad loven gør

1. **Placeringen er ligegyldig.** En udbyder, der er underlagt amerikansk jurisdiktion, skal udlevere data i sin »besiddelse, varetægt eller kontrol« som svar på et gyldigt amerikansk retsligt krav, uanset hvor i verden dataene er gemt. [Kilde: det amerikanske justitsministerium](https://www.justice.gov/criminal/cloud-act-resources)
2. **Aftaler med andre lande.** USA kan indgå aftaler om adgang til data, der lader betroede udenlandske regeringer anmode amerikanske udbydere direkte om data i sager om alvorlig kriminalitet uden at gå gennem den langsommere procedure for traktater om gensidig retshjælp (MLAT). [Kilde: det amerikanske justitsministerium](https://www.justice.gov/criminal/cloud-act-resources)
3. **En mulighed for at gøre modstand.** Udbydere kan bede en domstol om at annullere eller ændre en anmodning, når den er i strid med lovene i et andet land, der har en aftale.

Der er aftaler i kraft med **Storbritannien** og **Australien**. Der er annonceret forhandlinger med **Canada** og **Den Europæiske Union**. [Kilde: det amerikanske justitsministerium](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Hvad loven ikke gør

- Den skaber ikke nye overvågningsbeføjelser og fjerner ikke kravet om retskendelse. Amerikanske myndigheder skal stadig have et gyldigt retsligt krav, og indholdet af kommunikation kræver generelt en ransagningskendelse.
- Den tvinger ikke en udbyder til at dekryptere data, som den ikke kan dekryptere. Den omfatter de data, udbyderen har. Data, der er krypteret med nøgler, som kun brugeren har, forbliver krypteret.
- Den gælder ikke kun for datacentre i USA. Det hjælper ikke at vælge en serverplacering i Europa, hvis virksomheden, der driver den, er underlagt amerikansk jurisdiktion.

## Hvem den berører

Alle virksomheder, der er underlagt amerikansk jurisdiktion: Google, Microsoft, Apple, Amazon, Cloudflare og mindre amerikanske tjenester, herunder Forward Email. Se [alle vurderede tjenester med hjemsted i USA](/jurisdictions/united-states/).

Den kan også nå **ikke-amerikanske tjenester, der gemmer data hos amerikanske cloududbydere**, da cloududbyderen selv kan modtage en anmodning. Derfor er det nyttige spørgsmål ikke kun »hvor ligger virksomheden?«, men også »hvilke data findes der, og hvem har nøglerne?«

## Hvorfor kryptering og minimale data betyder mere end placering

Love ændrer sig, og alle lande har en måde at tvinge data udleveret på. Det vigtigste er, hvad en udbyder **kan** udlevere:

| Situation | Hvad en anmodning kan nå |
| --- | --- |
| Post gemt i klartekst | Alt i postkassen |
| Post krypteret i hvile med nøgler, som udbyderen har | Alt, fordi udbyderen kan dekryptere den |
| Post krypteret med nøgler afledt af brugerens adgangskode | Kontooplysninger og forbindelsesdata, ikke beskedernes indhold |
| Ingen logs gemt | Intet om aktivitet |

Virkelige eksempler:

- **Proton (Schweiz, uden for alle Eyes-aftaler)** efterkom 8.313 af 9.301 schweiziske retskendelser i sin seneste årsrapport og udleverede de kontooplysninger, virksomheden har. [Kilde: Protons gennemsigtighedsrapport](https://proton.me/legal/transparency)
- **Proton VPN (samme virksomhed, samme land)** efterkom ingen, fordi den ikke gemmer logs. [Kilde: Protons gennemsigtighedsrapport](https://proton.me/legal/transparency)
- **Tuta (Tyskland)** kan af en tysk dommer pålægges at udlevere postkasser eller overvåge dem i realtid. End-to-end-krypteret post forbliver krypteret. [Kilde: Tutas gennemsigtighedsrapport](https://tuta.com/blog/transparency-report)

Den samme virksomhed i det samme land får meget forskellige resultater afhængigt af, hvilke data der findes. Derfor viser Privacy Ratings jurisdiktion på hver side, men giver point for, hvad udbyderne faktisk gør. Se [hvordan jurisdiktion håndteres](/jurisdictions/).

## Sådan gælder CLOUD Act for Forward Email

Forward Email har hjemsted i USA og er underlagt CLOUD Act. Virksomhedens [tekniske whitepaper](https://forwardemail.net/technical-whitepaper.pdf) beskriver, hvordan designet begrænser, hvad en anmodning kan nå:

- **Krypterede postkasser.** Hver postkasse er en individuelt krypteret SQLite-fil. Ifølge whitepaperen kan Forward Email ikke få adgang til beskedernes indhold.
- **Ingen logning af e-mailindhold eller metadata til disk.** Forward Email fører ikke register over, hvem brugerne skriver til.
- **Begrænsede data.** Det, der kan udleveres, er grundlæggende kontooplysninger (som kontoens e-mailadresse, tilmeldingsdato og betalingsoplysninger) og begrænsede logs over IP-adresser, der kan gemmes midlertidigt af hensyn til sikkerhed og forebyggelse af misbrug.
- **Kun gyldige retslige krav.** Anmodninger kræver en stævning, en retskendelse eller en ransagningskendelse. Anmodninger uden for USA skal komme gennem en amerikansk domstol, en traktat om gensidig retshjælp eller en CLOUD Act-aftale, der opfylder amerikanske retlige krav.
- **Underretning og indsigelser.** Brugerne underrettes, når loven tillader det, og for vidtgående anmodninger anfægtes.

Forward Email vedligeholder Privacy Ratings. Dens vurdering bruger de samme kriterier som alle andre udbyderes. Se [vurderingen af Forward Email](/email-providers/forward-email/) og [reglerne for styring](/governance/).

## Læs mere

- [Det amerikanske justitsministerium: ressourcer om CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: Cross-Border Data Sharing Under the CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: overvågning efter Section 702](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)

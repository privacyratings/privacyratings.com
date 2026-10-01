<!-- source: 2f40b8f7e8ef -->
# Hva er CLOUD Act?

**Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** er en amerikansk lov som besvarer ett spørsmål: Kan amerikanske myndigheter få data fra et amerikansk selskap når dataene er lagret i et annet land? Svaret er ja.

## Hva loven gjør

1. **Plasseringen spiller ingen rolle.** En leverandør som er underlagt amerikansk jurisdiksjon, må utlevere data den har i sin «besittelse, forvaring eller kontroll» som svar på gyldige amerikanske rettslige pålegg, uansett hvor i verden dataene er lagret. [Kilde: USAs justisdepartement](https://www.justice.gov/criminal/cloud-act-resources)
2. **Avtaler med andre land.** USA kan inngå avtaler om tilgang til data som lar pålitelige utenlandske myndigheter be amerikanske leverandører direkte om data ved alvorlig kriminalitet, uten å gå gjennom den tregere prosessen med avtaler om gjensidig rettshjelp (MLAT). [Kilde: USAs justisdepartement](https://www.justice.gov/criminal/cloud-act-resources)
3. **En mulighet til å protestere.** Leverandører kan be en domstol om å oppheve eller endre en forespørsel når den er i strid med lovene i et annet land som har en slik avtale.

Avtaler er i kraft med **Storbritannia** og **Australia**. Forhandlinger er kunngjort med **Canada** og **Den europeiske union**. [Kilde: USAs justisdepartement](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Hva loven ikke gjør

- Den skaper ikke nye overvåkingsfullmakter og fjerner ikke behovet for rettskjennelse. Amerikanske myndigheter trenger fortsatt gyldige rettslige pålegg, og innholdet i kommunikasjon krever som hovedregel en ransakingskjennelse.
- Den tvinger ikke en leverandør til å dekryptere data den ikke kan dekryptere. Den omfatter data leverandøren har. Data som er kryptert med nøkler bare brukeren har, forblir kryptert.
- Den gjelder ikke bare for amerikanske datasentre. Å velge en europeisk serverplassering hjelper ikke hvis selskapet som driver den, er underlagt amerikansk jurisdiksjon.

## Hvem den berører

Alle selskaper som er underlagt amerikansk jurisdiksjon: Google, Microsoft, Apple, Amazon, Cloudflare og mindre amerikanske tjenester, inkludert Forward Email. Se [alle vurderte tjenester fra USA](/jurisdictions/united-states/).

Den kan også nå **ikke-amerikanske tjenester som lagrer data hos amerikanske skyleverandører**, siden skyleverandøren selv kan motta en forespørsel. Derfor er det nyttige spørsmålet ikke bare «hvor holder selskapet til?», men også «hvilke data finnes, og hvem har nøklene?»

## Hvorfor kryptering og minimale data betyr mer enn plassering

Lover endres, og alle land har måter å tvinge frem data på. Det som betyr mest, er hva en leverandør **kan** utlevere:

| Situasjon | Hva en forespørsel kan nå |
| --- | --- |
| E-post lagret i klartekst | Alt i postkassen |
| E-post kryptert ved lagring med nøkler leverandøren har | Alt, fordi leverandøren kan dekryptere den |
| E-post kryptert med nøkler avledet fra brukerens passord | Kontoopplysninger og tilkoblingsdata, ikke innholdet i meldingene |
| Ingen logger lagres | Ingenting om aktivitet |

Reelle eksempler:

- **Proton (Sveits, utenfor alle Eyes-ordninger)** etterkom 8 313 av 9 301 sveitsiske rettslige pålegg i sin siste årsrapport, og utleverte kontoopplysninger selskapet har. [Kilde: Protons åpenhetsrapport](https://proton.me/legal/transparency)
- **Proton VPN (samme selskap, samme land)** etterkom ingen, fordi tjenesten ikke lagrer logger. [Kilde: Protons åpenhetsrapport](https://proton.me/legal/transparency)
- **Tuta (Tyskland)** kan av en tysk dommer bli pålagt å utlevere postkasser eller overvåke dem i sanntid. Ende-til-ende-kryptert e-post forblir kryptert. [Kilde: Tutas åpenhetsrapport](https://tuta.com/blog/transparency-report)

Det samme selskapet i det samme landet får svært ulike resultater avhengig av hvilke data som finnes. Derfor viser Privacy Ratings jurisdiksjon på hver side, men gir poeng for hva leverandørene faktisk gjør. Se [hvordan jurisdiksjon håndteres](/jurisdictions/).

## Hvordan CLOUD Act gjelder for Forward Email

Forward Email har hovedsete i USA og er underlagt CLOUD Act. Selskapets [tekniske whitepaper](https://forwardemail.net/technical-whitepaper.pdf) beskriver hvordan designet begrenser hva en forespørsel kan nå:

- **Krypterte postkasser.** Hver postkasse er en individuelt kryptert SQLite-fil. Ifølge whitepaperen har Forward Email ikke tilgang til innholdet i meldingene.
- **Ingen logging av e-postinnhold eller metadata til disk.** Forward Email fører ikke oversikt over hvem brukerne skriver til.
- **Begrensede data.** Det som kan utleveres, er grunnleggende kontoopplysninger (som kontoens e-postadresse, registreringsdato og betalingsopplysninger) og begrensede logger over IP-adresser som kan lagres midlertidig for sikkerhet og forebygging av misbruk.
- **Bare gyldige rettslige pålegg.** Forespørsler krever stevning, rettskjennelse eller ransakingskjennelse. Forespørsler fra utenfor USA må komme via en amerikansk domstol, en avtale om gjensidig rettshjelp eller en CLOUD Act-avtale som oppfyller amerikanske rettslige krav.
- **Varsling og protester.** Brukerne varsles når loven tillater det, og for vidtrekkende forespørsler bestrides.

Forward Email vedlikeholder Privacy Ratings. Vurderingen av selskapet bruker de samme kriteriene som for alle andre leverandører. Se [vurderingen av Forward Email](/email-providers/forward-email/) og [reglene for styring](/governance/).

## Mer lesing

- [USAs justisdepartement: ressurser om CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: deling av data over landegrensene under CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: overvåking under Section 702](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)

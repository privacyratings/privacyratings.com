<!-- source: e696176d1bdb -->
# Bestuur

Hoe beslissingen worden genomen, hoe keuzes worden gemaakt en hoe met belangenconflicten wordt omgegaan.

## Beheerders

Beheerders beoordelen en mergen pull requests, sorteren issues en modereren Discussions. De beheerders staan vermeld in [`.github/CODEOWNERS`](.github/CODEOWNERS). Iedereen kan beheerder worden na een reeks nauwkeurige bijdragen met goede bronnen.

## Hoe wijzigingen worden geaccepteerd

1. Alle wijzigingen verlopen via een pull request. Niemand, ook geen beheerder, pusht wijzigingen in beoordelingen rechtstreeks naar `main`.
2. Elke pull request moet slagen voor `npm test` (validatie en build).
3. Minstens één beheerder keurt de pull request goed.
4. Antwoorden hebben bewijs uit een primaire bron nodig: officiële documentatie, broncode, licentiebestanden, gepubliceerde auditrapporten of reproduceerbare tests. Reviews, blogposts en marketingclaims zonder details zijn geen bewijs.
5. Wanneer bronnen elkaar tegenspreken, geldt de meest recente primaire bron. Als het dan nog onduidelijk is, is het antwoord "onbekend".

## Wijzigingen in criteria

Criteria bepalen elke score, dus wijzigingen in `criteria/` vragen meer zorg:

- Open eerst een issue "Criteria change" of een Discussion.
- De pull request blijft minstens 7 dagen open voor openbaar commentaar.
- Er is goedkeuring van twee beheerders nodig.
- De id's van criteria worden na publicatie nooit hernoemd. Een criterium wordt uitgefaseerd door het te verwijderen in een pull request die uitlegt waarom.

## Keuzes

- Elke categorie kan maximaal twee keuzes hebben.
- Een keuze moet een `pick_reason` hebben die de keuze in gewone taal uitlegt.
- Elke categorie heeft maximaal twee keuzes, geordend met `pick: 1` en `pick: 2`.
- Keuzes zijn redactioneel. Ze worden apart getoond en veranderen nooit de scores.
- Iedereen kan een keuze aanvechten in de Discussions-categorie "Picks". Op bezwaren wordt openbaar gereageerd.

## Belangenconflicten

Privacy Ratings wordt onderhouden door het team achter Forward Email. Vermeldingen die verbonden zijn met de beheerders zijn "gelieerde vermeldingen". Op dit moment is dat Forward Email.

Regels voor gelieerde vermeldingen:

- Elke gelieerde vermelding bevat een `disclosure` die bovenaan de pagina wordt getoond.
- Een pull request die de score van een gelieerde vermelding verhoogt, of er een keuze van maakt, moet voor elk gewijzigd antwoord naar bewijs linken en minstens 7 dagen open blijven voordat hij wordt gemerged.
- Een pull request die de score van een gelieerde vermelding met geldig bewijs verlaagt, wordt gemerged zoals elke andere.
- Beheerders moeten een openbaarmaking toevoegen aan elke vermelding waarmee zij, of hun werkgever, een financiële of persoonlijke band hebben.

## Geld

- Geen affiliatelinks. De validatie weigert URL's met verwijzings- of trackingparameters.
- Geen betaalde plaatsingen, gesponsorde vermeldingen of betaalde reviews.
- Leveranciers kunnen net als ieder ander correcties indienen, met bewijs, en moeten vermelden dat zij de leverancier zijn.

## Moderatie

Issues, pull requests en Discussions volgen de [gedragscode](CODE_OF_CONDUCT.md). Beheerders mogen reacties die beledigend, off-topic of promotioneel zijn vergrendelen of verbergen.

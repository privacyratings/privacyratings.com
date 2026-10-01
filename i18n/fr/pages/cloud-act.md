<!-- source: 37558129142b -->
# Qu'est-ce que le CLOUD Act ?

Le **Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** est une loi américaine qui répond à une question : les autorités américaines peuvent-elles obtenir des données d'une entreprise américaine lorsque ces données sont stockées dans un autre pays ? La réponse est oui.

## Ce qu'il fait

1. **L'emplacement ne compte pas.** Un fournisseur soumis à la juridiction américaine doit remettre les données en sa « possession, garde ou contrôle » (« possession, custody, or control ») en réponse à une procédure judiciaire américaine valide, quel que soit l'endroit du monde où ces données sont stockées. [Source : ministère de la Justice des États-Unis](https://www.justice.gov/criminal/cloud-act-resources)
2. **Des accords avec d'autres pays.** Les États-Unis peuvent signer des accords d'accès aux données qui permettent à des gouvernements étrangers de confiance de demander des données directement aux fournisseurs américains pour des crimes graves, sans passer par la procédure plus lente des traités d'entraide judiciaire (MLAT). [Source : ministère de la Justice des États-Unis](https://www.justice.gov/criminal/cloud-act-resources)
3. **Un moyen de contestation.** Les fournisseurs peuvent demander à un tribunal d'annuler ou de modifier une demande lorsqu'elle est en conflit avec les lois d'un autre pays lié par un accord.

Des accords sont en vigueur avec le **Royaume-Uni** et l'**Australie**. Des négociations ont été annoncées avec le **Canada** et l'**Union européenne**. [Source : ministère de la Justice des États-Unis](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Ce qu'il ne fait pas

- Il ne crée pas de nouveaux pouvoirs de surveillance et ne supprime pas la nécessité d'un mandat. Les autorités américaines ont toujours besoin d'une procédure judiciaire valide, et le contenu des communications nécessite en général un mandat de perquisition.
- Il n'oblige pas un fournisseur à déchiffrer des données qu'il ne peut pas déchiffrer. Il couvre les données dont le fournisseur dispose. Les données chiffrées avec des clés que seul l'utilisateur détient restent chiffrées.
- Il ne s'applique pas uniquement aux centres de données américains. Choisir un emplacement de serveur en Europe n'aide pas si l'entreprise qui l'exploite est soumise à la juridiction américaine.

## Qui est concerné

Toute entreprise soumise à la juridiction américaine : Google, Microsoft, Apple, Amazon, Cloudflare et des services américains plus petits, dont Forward Email. Voir [tous les services évalués établis aux États-Unis](/jurisdictions/united-states/).

Il peut aussi atteindre des **services non américains qui stockent des données chez des fournisseurs cloud américains**, puisque le fournisseur cloud lui-même peut recevoir une demande. C'est pourquoi la question utile n'est pas seulement « où est l'entreprise ? » mais aussi « quelles données existent, et qui détient les clés ? ».

## Pourquoi le chiffrement et la minimisation des données comptent plus que l'emplacement

Les lois changent, et chaque pays dispose d'un moyen d'exiger des données. Ce qui compte le plus, c'est ce qu'un fournisseur **peut** remettre :

| Situation | Ce qu'une demande peut atteindre |
| --- | --- |
| Courrier stocké en clair | Tout le contenu de la boîte aux lettres |
| Courrier chiffré au repos avec des clés détenues par le fournisseur | Tout, car le fournisseur peut le déchiffrer |
| Courrier chiffré avec des clés dérivées du mot de passe de l'utilisateur | Les informations du compte et les données de connexion, pas le contenu des messages |
| Aucun journal conservé | Rien sur l'activité |

Exemples réels :

- **Proton (Suisse, hors de tout accord Eyes)** s'est conformé à 8 313 des 9 301 ordonnances judiciaires suisses selon son dernier rapport annuel, en fournissant les informations de compte qu'il détient. [Source : rapport de transparence de Proton](https://proton.me/legal/transparency)
- **Proton VPN (même entreprise, même pays)** ne s'est conformé à aucune, car il ne conserve aucun journal. [Source : rapport de transparence de Proton](https://proton.me/legal/transparency)
- **Tuta (Allemagne)** peut se voir ordonner par un juge allemand de remettre des boîtes aux lettres ou de les surveiller en temps réel. Le courrier chiffré de bout en bout reste chiffré. [Source : rapport de transparence de Tuta](https://tuta.com/blog/transparency-report)

La même entreprise dans le même pays obtient des résultats très différents selon les données qui existent. C'est pourquoi Privacy Ratings indique la juridiction sur chaque page mais note ce que les fournisseurs font réellement. Voir [comment la juridiction est traitée](/jurisdictions/).

## Comment le CLOUD Act s'applique à Forward Email

Forward Email est établi aux États-Unis et est soumis au CLOUD Act. Son [livre blanc technique](https://forwardemail.net/technical-whitepaper.pdf) décrit comment sa conception limite ce qu'une demande pourrait atteindre :

- **Boîtes aux lettres chiffrées.** Chaque boîte aux lettres est un fichier SQLite chiffré individuellement. Le livre blanc indique que Forward Email ne peut pas accéder au contenu des messages.
- **Aucune journalisation sur disque du contenu ou des métadonnées des e-mails.** Forward Email ne conserve pas de trace des personnes auxquelles écrivent ses utilisateurs.
- **Données limitées.** Ce qui pourrait être divulgué, ce sont les informations de base du compte (comme l'adresse e-mail du compte, la date d'inscription et les informations de paiement) et des journaux d'adresses IP limités, qui peuvent être conservés temporairement pour la sécurité et la prévention des abus.
- **Uniquement sur procédure judiciaire valide.** Les demandes nécessitent une injonction (subpoena), une ordonnance judiciaire ou un mandat de perquisition. Les demandes provenant de l'extérieur des États-Unis doivent passer par un tribunal américain, un traité d'entraide judiciaire ou un accord CLOUD Act conforme aux exigences légales américaines.
- **Notification et contestation.** Les utilisateurs sont informés lorsque la loi le permet, et les demandes trop larges sont contestées.

Forward Email maintient Privacy Ratings. Son évaluation utilise les mêmes critères que pour tous les autres fournisseurs. Voir [l'évaluation de Forward Email](/email-providers/forward-email/) et [les règles de gouvernance](/governance/).

## Pour aller plus loin

- [Ministère de la Justice des États-Unis : ressources sur le CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service : Cross-Border Data Sharing Under the CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF : la surveillance au titre de la section 702](https://www.eff.org/702-spying)
- [EFF : les National Security Letters](https://www.eff.org/issues/national-security-letters)

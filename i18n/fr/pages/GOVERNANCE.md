<!-- source: 63c0d07d1a26 -->
# Gouvernance

Comment les décisions sont prises, comment les choix sont faits et comment les conflits d'intérêts sont gérés.

## Mainteneurs

Les mainteneurs relisent et fusionnent les pull requests, trient les tickets et modèrent les Discussions. Les mainteneurs sont listés dans [`.github/CODEOWNERS`](.github/CODEOWNERS). Toute personne peut devenir mainteneur après une série de contributions exactes et bien sourcées.

## Comment les modifications sont acceptées

1. Toutes les modifications passent par une pull request. Personne, pas même les mainteneurs, ne pousse de modification d'évaluation directement sur `main`.
2. Chaque pull request doit réussir `npm test` (validation et build).
3. Au moins un mainteneur approuve la pull request.
4. Les réponses nécessitent des preuves issues d'une source primaire : documentation officielle, code source, fichiers de licence, rapports d'audit publiés ou tests reproductibles. Les avis, articles de blog et arguments marketing sans détails ne sont pas des preuves.
5. Lorsque les sources se contredisent, la source primaire la plus récente l'emporte. Si ce n'est toujours pas clair, la réponse est « inconnu ».

## Modifications des critères

Les critères déterminent chaque score ; les modifications de `criteria/` demandent donc plus de soin :

- Ouvrez d'abord un ticket « Criteria change » ou une Discussion.
- La pull request reste ouverte au moins 7 jours pour les commentaires publics.
- Elle doit être approuvée par deux mainteneurs.
- Les identifiants de critères ne sont jamais renommés une fois publiés. Pour retirer un critère, supprimez-le dans une pull request qui explique pourquoi.

## Choix

- Chaque catégorie peut avoir jusqu'à deux choix.
- Un choix doit avoir un `pick_reason` qui explique le choix en termes simples.
- Chaque catégorie a au plus deux choix, ordonnés avec `pick: 1` et `pick: 2`.
- Les choix sont éditoriaux. Ils sont affichés séparément et ne modifient jamais les scores.
- Chacun peut contester un choix dans la catégorie de Discussions « Picks ». Les contestations reçoivent une réponse publique.

## Conflits d'intérêts

Privacy Ratings est maintenu par l'équipe de Forward Email. Les entrées liées aux mainteneurs sont des « entrées affiliées ». Actuellement, il s'agit de Forward Email.

Règles pour les entrées affiliées :

- Chaque entrée affiliée porte une `disclosure` (mention de transparence) affichée en haut de sa page.
- Une pull request qui augmente le score d'une entrée affiliée, ou en fait un choix, doit lier des preuves pour chaque réponse modifiée et rester ouverte au moins 7 jours avant la fusion.
- Une pull request qui abaisse le score d'une entrée affiliée avec des preuves valables est fusionnée comme n'importe quelle autre.
- Les mainteneurs doivent ajouter une mention de transparence à toute entrée avec laquelle eux-mêmes, ou leur employeur, ont un lien financier ou personnel.

## Argent

- Aucun lien d'affiliation. La validation rejette les URL contenant des paramètres de parrainage ou de suivi.
- Aucun placement payant, aucune entrée sponsorisée ni aucun avis rémunéré.
- Les éditeurs peuvent soumettre des corrections comme tout le monde, avec des preuves, et doivent indiquer qu'ils sont l'éditeur.

## Modération

Les tickets, pull requests et Discussions suivent le [code de conduite](CODE_OF_CONDUCT.md). Les mainteneurs peuvent verrouiller ou masquer les commentaires injurieux, hors sujet ou promotionnels.

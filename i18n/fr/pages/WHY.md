<!-- source: df34a6a5c6c4 -->
# Pourquoi Privacy Ratings existe

Les guides sur la vie privée aident des millions de personnes à choisir de meilleures applications et de meilleurs services. Beaucoup font un excellent travail. Mais la plupart partagent les mêmes faiblesses :

- **Des règles floues.** Un service est listé ou écarté, et la raison se trouve dans un fil de forum, une discussion privée, ou n'est pas publiée du tout.
- **Tout ou rien.** Une liste dit « recommandé » ou ne dit rien. Elle ne montre pas à quel point un produit s'en est approché, ni ce qui changerait le résultat.
- **Des affirmations sans vérification.** Les descriptions disent « chiffré » ou « sans journaux » sans renvoyer à quoi que ce soit qu'un lecteur puisse vérifier.
- **Aucun test.** Les services hébergés sont rarement vérifiés pour leur sécurité de base, comme les paramètres TLS, les en-têtes de sécurité ou l'authentification des e-mails.
- **Des plateformes séparées.** Les suggestions et les débats ont lieu sur un forum ou un serveur de discussion qui nécessite son propre compte et sa propre modération, à l'écart du contenu lui-même.
- **Des changements lents.** Quand un produit change, les listes restent souvent obsolètes, car leur mise à jour dépend de quelques personnes.

Privacy Ratings est conçu pour corriger chacun de ces points.

## Des listes « awesome » à une ressource maintenue

Beaucoup de ces guides ont commencé comme des listes sur GitHub. Le format de liste « awesome », lancé par [Sindre Sorhus](https://github.com/sindresorhus/awesome), a permis à chacun de publier facilement une liste organisée, et des milliers de listes awesome-quelque-chose ont suivi, beaucoup étant des forks les unes des autres. Des listes comme [Awesome Privacy](https://github.com/lissy93/awesome-privacy) font un travail précieux, et de nombreuses entrées de ce site y ont d'abord été listées.

Le format a une faiblesse : la plupart des listes dépendent d'un ou deux bénévoles. Quand un mainteneur passe à autre chose, la liste s'endort, est archivée ou se divise en forks qui deviennent chacun obsolètes. Les lecteurs ne peuvent pas savoir quelle copie est à jour, et rien dans une liste n'est testé ni noté.

**Privacy Ratings est soutenu et géré par une entreprise, [Forward Email](https://forwardemail.net).** Il ne dépend pas de bénévoles susceptibles de partir ou d'archiver le dépôt. Les données sont structurées au lieu de tenir dans un seul README, ce qui permet de les valider, de les noter et de les tester automatiquement chaque jour. Et comme tout est open source et sous licence CC BY-SA, la communauté peut toujours les copier, les vérifier et les améliorer.

## Ce qui change

**Chaque règle est publique.** Chaque catégorie a une courte liste de questions pondérées de 1 à 3. Les questions, la signification de chaque réponse et la façon de la vérifier se trouvent toutes dans le dossier [`criteria/`](criteria/). Voir [les critères](https://privacyratings.com/criteria/).

**Chaque réponse a des preuves.** Un « oui » ou un « partiel » doit renvoyer à une source que chacun peut vérifier : documentation, code source, fichier de licence ou rapport d'audit. Tout ce qui n'a pas de preuve compte comme « inconnu » et vaut zéro. Une entrée ne reçoit une note en lettre que lorsqu'une part suffisante de ses réponses est appuyée par des preuves.

**Des scores, pas seulement des listes.** Chaque entrée reçoit un score de 0 à 100, pour que les lecteurs voient comment les services se comparent et exactement où chacun est en défaut.

**Des tests de sécurité automatisés.** Les services hébergés sont testés régulièrement avec Qualys SSL Labs, Mozilla HTTP Observatory et Internet.nl (y compris le test e-mail d'Internet.nl pour les fournisseurs d'e-mail). Les résultats sont enregistrés dans le dépôt et liés depuis chaque page. Voir [SCANS.md](SCANS.md).

**La juridiction en toute transparence.** Chaque page indique où l'entreprise est établie, si ce pays fait partie des Five, Nine ou Fourteen Eyes, si le RGPD s'applique et si le CLOUD Act américain l'atteint. La juridiction est indiquée mais pas notée, car ce qu'un fournisseur peut remettre dépend surtout de ce qu'il conserve et de qui détient les clés. Voir [les juridictions](https://privacyratings.com/jurisdictions/) et [le CLOUD Act](https://privacyratings.com/cloud-act/).

**Tout se passe sur GitHub.** Les suggestions et corrections sont des tickets GitHub. Les modifications sont des pull requests. Les débats ont lieu dans GitHub Discussions. Il n'y a ni forum séparé, ni serveur de discussion, ni système de comptes. Chaque modification de chaque évaluation a un historique public.

**Des données ouvertes.** Les évaluations sont de simples fichiers Markdown et YAML, et le jeu de données complet est publié en JSON. Le contenu est sous licence CC BY-SA 4.0, pour que chacun puisse le réutiliser.

**Les choix sont présentés comme des choix.** Les mainteneurs retiennent un ou deux choix par catégorie et expliquent chacun d'eux. Les choix sont affichés séparément et ne modifient jamais les scores, pour qu'un lecteur puisse toujours distinguer le jugement éditorial des résultats mesurés.

## Qui le maintient

Privacy Ratings est soutenu, financé et maintenu par [Forward Email](https://forwardemail.net), un service d'e-mail axé sur la confidentialité qui est également évalué ici. Cela garantit la maintenance du projet sur le long terme, mais c'est aussi un conflit d'intérêts, qui est donc géré en toute transparence :

- Forward Email est noté selon les mêmes critères que tous les autres fournisseurs d'e-mail.
- Son entrée porte une mention de transparence, tout comme toute entrée ayant un autre lien avec les mainteneurs.
- Les modifications qui augmentent le score d'une entrée affiliée doivent lier des preuves et rester ouvertes à l'examen public avant la fusion. Voir [GOVERNANCE.md](GOVERNANCE.md).
- Il n'y a ni liens d'affiliation, ni placements payants, ni parrainages. La validation rejette les liens contenant des paramètres de parrainage.

Si une évaluation semble erronée, ouvrez un ticket ou une pull request avec des preuves. C'est tout le processus.

## Remerciements

De nombreuses entrées ont d'abord été reprises d'[Awesome Privacy](https://github.com/lissy93/awesome-privacy), publié sous CC0. Les données sur l'hébergement de serveurs de messagerie proviennent d'[Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).

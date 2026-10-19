<!-- source: 95e0ae8a3554 -->
# Politique de confidentialité

Privacy Ratings ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience et ne charge rien depuis d'autres sites. Cette page décrit tout ce qui se passe réellement quand vous visitez le site ou utilisez l'outil en ligne de commande.

## Hébergement

Ce site est servi par [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection). GitHub enregistre l'adresse IP de chaque visiteur pour des raisons de sécurité, comme l'indique la [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Privacy Ratings n'exploite aucun serveur et n'a pas accès à ces journaux.

## Ce que le site enregistre dans votre navigateur

- `theme`: le thème de couleurs, si vous en avez choisi un.
- `lang`: la langue que vous avez choisie, ou celle qui correspondait à votre navigateur lors de votre première visite.
- `mastodon`: le serveur Mastodon saisi dans le menu de partage, si vous l'avez utilisé.
- Un service worker garde une copie des pages que vous avez ouvertes, pour qu'elles fonctionnent hors ligne.

Tout reste sur votre appareil. Effacer les données du site dans votre navigateur les supprime.

## Requêtes vers d'autres sites

Tous les scripts, feuilles de style, polices, images et vidéos se chargent depuis privacyratings.com, et une Content Security Policy bloque tout le reste. Les liens vers d'autres sites, y compris les liens de partage, ne chargent rien tant que vous ne les ouvrez pas.

## Recherche

Le champ de recherche télécharge l'index de recherche depuis ce site et le filtre dans votre navigateur. Sur la page de recherche, vos mots apparaissent dans l'adresse de la page, comme pour tout autre lien.

## Outil en ligne de commande

L'outil en ligne de commande `privacyratings` n'envoie aucune donnée d'analyse ni de télémétrie. Il télécharge les évaluations depuis ce site et interroge l'API GitHub une fois par jour pour savoir si une nouvelle version existe. Si une version plus récente existe, il se met à jour depuis GitHub ou avec npm. Définissez `PRIVACYRATINGS_NO_UPDATE=1` ou utilisez `--no-update` pour désactiver les mises à jour.

## Contributions

Les issues, pull requests et discussions ont lieu sur GitHub et sont publiques. La GitHub General Privacy Statement couvre votre compte GitHub.

## Contact

Posez vos questions sur cette politique dans une [issue GitHub](https://github.com/privacyratings/privacyratings.com/issues). Signalez les problèmes de sécurité comme indiqué dans [SECURITY.md](https://github.com/privacyratings/privacyratings.com/blob/main/SECURITY.md).

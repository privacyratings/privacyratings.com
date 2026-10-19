<!-- source: 95e0ae8a3554 -->
# Política de privacidade

O Privacy Ratings não usa cookies, não roda nenhuma análise e não carrega nada de outros sites. Esta página lista tudo o que de fato acontece quando você visita o site ou usa a ferramenta de linha de comando.

## Hospedagem

O [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection) serve este site. O GitHub registra o endereço IP de cada visitante por motivos de segurança, conforme a [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). O Privacy Ratings não tem servidor próprio e não tem acesso a esses registros.

## O que o site guarda no seu navegador

- `theme`: o tema de cores, se você escolheu um.
- `lang`: o idioma que você escolheu, ou o que combinava com seu navegador na primeira visita.
- `mastodon`: o servidor do Mastodon que você digitou no menu de compartilhamento, se usou.
- Um service worker guarda cópias das páginas que você abriu, para que funcionem off-line.

Tudo fica no seu dispositivo. Limpar os dados do site no navegador apaga essas informações.

## Solicitações a outros sites

Todos os scripts, folhas de estilo, fontes, imagens e vídeos são carregados de privacyratings.com, e uma Content Security Policy bloqueia todo o resto. Links para outros sites, incluindo os de compartilhamento, não carregam nada até você abri-los.

## Pesquisa

A caixa de pesquisa baixa o índice de pesquisa deste site e o filtra no seu navegador. Na página de pesquisa, suas palavras aparecem no endereço da página, como em qualquer outro link.

## Ferramenta de linha de comando

A ferramenta de linha de comando `privacyratings` não envia análises nem telemetria. Ela baixa as avaliações deste site e consulta a API do GitHub uma vez por dia para ver se há uma nova versão. Se houver uma versão mais recente, ela se atualiza pelo GitHub ou pelo npm. Defina `PRIVACYRATINGS_NO_UPDATE=1` ou use `--no-update` para desativar as atualizações.

## Contribuições

Issues, pull requests e discussões acontecem no GitHub e são públicos. A GitHub General Privacy Statement cobre sua conta do GitHub.

## Contato

Envie perguntas sobre esta política em uma [issue no GitHub](https://github.com/privacyratings/privacyratings.com/issues). Relate problemas de segurança conforme o [SECURITY.md](https://github.com/privacyratings/privacyratings.com/blob/main/SECURITY.md).

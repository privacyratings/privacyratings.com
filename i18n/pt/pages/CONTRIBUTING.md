<!-- source: f2ab6af4acf3 -->
# Como contribuir

Tudo acontece no GitHub. Não há outro fórum, chat ou conta para criar.

| Para fazer isto | Use |
| --- | --- |
| Sugerir um app ou serviço | [Abra uma issue "Suggest"](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Informar uma resposta errada ou um link quebrado | [Abra uma issue "Correction"](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml) ou use "Informar uma correção" em qualquer página de avaliação |
| Propor ou alterar critérios | [Abra uma issue "Criteria change"](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Corrigir você mesmo | Use "Editar no GitHub" em qualquer página de avaliação ou abra um pull request |
| Fazer uma pergunta ou debater uma escolha | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Editar uma avaliação

Cada app ou serviço é um arquivo Markdown em `ratings/<category>/<name>.md`. O início do arquivo é YAML. Tudo abaixo dele são observações opcionais em Markdown exibidas na página.

```yaml
---
name: Example Mail
description: >-
  One or two plain sentences about what it is.
website: https://example.com
source: https://github.com/example/example      # optional
platforms: [web, android, ios]                  # optional
jurisdiction: CH                                # optional, country code from jurisdictions.yml
mainstream: true                                # optional, adds an "alternatives to" page
aliases: [Example Office, Example Docs]         # optional, other names people search for
also_in: [macos-hardening]                      # optional, also list it in another category's table
alternatives_page: true                         # optional, adds an "alternatives to" page without mainstream
domain: mail.example.com                        # services only, used for automated tests
mail_domain: example.com                        # email categories only
imap_host: imap.example.com                     # email providers only; false if not offered
pop3_host: pop3.example.com                     # optional, found from SRV records when missing
smtp_host: smtp.example.com                     # optional, found from SRV records when missing
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/example/example/blob/main/LICENSE
    note: Apps are open source. The server is not.
  no_ads:
    answer: yes
    evidence: https://example.com/pricing
---

Optional notes in Markdown.
```

Regras (verificadas automaticamente por `npm test`):

- `answer` é um de `yes`, `partial`, `no`, `unknown` ou `n/a`.
- `yes` e `partial` precisam de um link em `evidence`. `no` precisa de `note` ou `evidence`.
- As evidências devem ser uma fonte primária: documentação oficial, código-fonte, um arquivo de licença, um relatório de auditoria ou um teste reproduzível. Não valem resenhas, posts em fóruns ou páginas de marketing sem detalhes.
- Os links devem usar `https://` e não podem conter parâmetros de indicação ou de rastreamento.
- Os critérios automatizados (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) são preenchidos pelos testes. Não os defina manualmente.
- `no_trackers` também é verificado pelo [teste de rastreadores](SCANS.md#website-trackers). Se a página inicial carregar um rastreador de terceiros, a resposta passa a ser "no", independentemente do que o arquivo diga.
- Omita qualquer critério que ainda não tenha evidências. Ele conta como `unknown`.
- `jurisdiction` é onde a empresa tem sede legal (não onde estão seus servidores). Adicione um país a [`jurisdictions.yml`](jurisdictions.yml) se ele estiver faltando. Cada observação ali precisa de uma fonte.
- Somente os mantenedores adicionam `pick`, `pick_reason` e `disclosure`. Use `pick: 1` e `pick: 2` para ordenar duas escolhas. Veja [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` guarda o nome que um item tinha no Awesome Privacy depois de ser renomeado, para que a importação mensal não o adicione novamente. Para deixar um item do Awesome Privacy de fora definitivamente, adicione-o a [`import-skip.yml`](import-skip.yml) com um motivo.

Os critérios de cada categoria, e o que cada resposta significa, estão em [`criteria/`](criteria/) e na [página de critérios](https://privacyratings.com/criteria/).

## Adicionar um app ou serviço

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Isso cria um arquivo que lista todos os critérios como `unknown`. Preencha o que você puder comprovar, apague o resto e depois execute `npm test`.

## Estilo de escrita

- Linguagem simples e neutra. Descreva o que algo faz, não o quanto é ótimo.
- Frases curtas. As descrições ficam abaixo de 300 caracteres.
- Sem primeira pessoa, sem datas no texto, sem alegações de marketing.
- Chame as coisas do jeito que o fornecedor as chama.

## Executar o site localmente

Requer Node.js 18 ou mais recente.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Adicionar uma página

Coloque um arquivo Markdown com `title` e `description` em [`pages/`](pages/). Ele é publicado em `/<file-name>/` com uma cópia em Markdown, dados estruturados e uma entrada no sitemap.

## Adicionar uma categoria ou critério

1. Adicione a categoria a [`categories.yml`](categories.yml) no grupo correto.
2. Opcionalmente, adicione `criteria/<category-id>.yml` com critérios específicos da categoria. Copie o formato de um arquivo existente.
3. Crie `ratings/<category-id>/` e adicione itens.
4. Mudanças nos critérios seguem as regras de revisão em [GOVERNANCE.md](GOVERNANCE.md).

## Traduções

O site é publicado em 25 idiomas. O inglês é a fonte, e cada um dos outros idiomas fica em `i18n/<code>/`:

| Arquivo | Contém |
| --- | --- |
| `ui.json` | Texto da interface: títulos, botões e frases com `{placeholders}` |
| `data.json` | Nomes de categorias, critérios, guias e notas sobre países |
| `entries.json` | Descrições das avaliações, motivos das escolhas e divulgações |
| `pages/*.md` | Documentos inteiros, como este |

Cada arquivo JSON associa o texto em inglês à sua tradução. Quando o inglês muda, a tradução antiga deixa de corresponder, então o inglês aparece até que alguém traduza o novo texto. Nada desatualizado é exibido.

1. Execute `npm run build`. Ele grava as listas atuais em inglês em `i18n/source/`.
2. Execute `npm run i18n:check` para ver o que falta em cada idioma, ou `node scripts/i18n-check.js de ui` para os detalhes de um idioma e arquivo.
3. Adicione ou corrija traduções, mantendo cada `{placeholder}` exatamente como está.
4. Para um documento, copie o inglês de `i18n/source/pages/`, mantenha a primeira linha (`<!-- source: … -->`, que vincula a tradução àquela versão do inglês) e traduza o restante.

As notas e evidências de cada resposta permanecem em inglês. Comparações e a maioria das avaliações individuais estão disponíveis apenas em inglês; escolhas, categorias, guias, alternativas, listas de código aberto, jurisdições e documentos são traduzidos. O menu de idiomas e o redirecionamento automático usam os links `hreflang` de cada página.

## Checklist do pull request

- [ ] `npm test` passa.
- [ ] Cada resposta alterada tem link para evidências.
- [ ] Se você trabalha para um serviço que alterou, ou tem alguma ligação com ele, você informou isso no pull request.

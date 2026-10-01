<!-- source: df34a6a5c6c4 -->
# Por que o Privacy Ratings existe

Guias de privacidade ajudam milhões de pessoas a escolher apps e serviços melhores. Muitos fazem um trabalho excelente. Mas a maioria tem os mesmos pontos fracos:

- **Regras pouco claras.** Um serviço entra ou fica de fora da lista, e o motivo é um tópico de fórum, uma discussão privada ou simplesmente não é publicado.
- **Só aprovado ou reprovado.** Uma lista diz "recomendado" ou não diz nada. Ela não mostra quão perto algo chegou nem o que mudaria o resultado.
- **Alegações sem verificação.** As descrições dizem "criptografado" ou "sem registros" sem link para nada que o leitor possa verificar.
- **Sem testes.** Serviços hospedados raramente são verificados quanto à segurança básica, como configurações de TLS, cabeçalhos de segurança ou autenticação de e-mail.
- **Plataformas separadas.** Sugestões e debates acontecem em um fórum ou servidor de chat que exige conta e moderação próprias, separados do conteúdo em si.
- **Demoram a mudar.** Quando um produto muda, as listas muitas vezes ficam desatualizadas, porque atualizá-las depende de poucas pessoas.

O Privacy Ratings foi criado para resolver cada um desses problemas.

## De listas "awesome" a um recurso mantido

Muitos desses guias começaram como listas no GitHub. O formato de lista "awesome", iniciado por [Sindre Sorhus](https://github.com/sindresorhus/awesome), facilitou que qualquer pessoa publicasse uma lista curada, e milhares de listas awesome-alguma-coisa surgiram em seguida, muitas delas forks umas das outras. Listas como a [Awesome Privacy](https://github.com/lissy93/awesome-privacy) fazem um trabalho valioso, e muitos itens aqui foram listados primeiro lá.

O formato tem um ponto fraco: a maioria das listas depende de um ou dois voluntários. Quando um mantenedor segue em frente, a lista fica parada, é arquivada ou se divide em forks que vão ficando desatualizados. Os leitores não conseguem saber qual cópia é a atual, e nada em uma lista é testado ou pontuado.

**O Privacy Ratings é apoiado e operado por uma empresa, o [Forward Email](https://forwardemail.net).** Ele não depende de voluntários que podem sair ou arquivar o repositório. Os dados são estruturados, em vez de um único README, para que possam ser validados, pontuados e testados automaticamente todos os dias. E como tudo é de código aberto e licenciado sob CC BY-SA, a comunidade sempre pode copiar, verificar e melhorar o conteúdo.

## O que é diferente

**Todas as regras são públicas.** Cada categoria tem uma lista curta de perguntas com peso de 1 a 3. As perguntas, o significado de cada resposta e como verificá-la estão todos na pasta [`criteria/`](criteria/). Veja [os critérios](https://privacyratings.com/criteria/).

**Toda resposta tem evidências.** Um "sim" ou "parcial" precisa ter link para uma fonte que qualquer pessoa possa verificar: documentação, código-fonte, um arquivo de licença ou um relatório de auditoria. Tudo o que não tem evidências conta como "desconhecido" e vale zero. Um item só recebe uma nota em letra quando uma parte suficiente das suas respostas é apoiada por evidências.

**Pontuações, não só listas.** Cada item recebe uma pontuação de 0 a 100, para que os leitores possam ver como os serviços se comparam e exatamente onde cada um deixa a desejar.

**Testes de segurança automatizados.** Os serviços hospedados são testados periodicamente com Qualys SSL Labs, Mozilla HTTP Observatory e Internet.nl (incluindo o teste de e-mail do Internet.nl para provedores de e-mail). Os resultados são salvos no repositório e têm link em cada página. Veja [SCANS.md](SCANS.md).

**Jurisdição às claras.** Cada página mostra onde a empresa está sediada, se esse país faz parte dos Five, Nine ou Fourteen Eyes, se o RGPD se aplica e se o CLOUD Act dos EUA o alcança. A jurisdição é exibida, mas não pontuada, porque o que um provedor pode entregar depende principalmente do que ele guarda e de quem detém as chaves. Veja [jurisdições](https://privacyratings.com/jurisdictions/) e [o CLOUD Act](https://privacyratings.com/cloud-act/).

**Tudo acontece no GitHub.** Sugestões e correções são issues no GitHub. Mudanças são pull requests. Os debates acontecem no GitHub Discussions. Não há fórum, servidor de chat ou sistema de contas separado. Cada mudança em cada avaliação tem um histórico público.

**Dados abertos.** As avaliações são arquivos simples em Markdown e YAML, e o conjunto completo de dados é publicado em JSON. O conteúdo está licenciado sob CC BY-SA 4.0, para que qualquer pessoa possa reutilizá-lo.

**As escolhas são identificadas como escolhas.** Os mantenedores escolhem uma ou duas opções por categoria e explicam cada uma. As escolhas são exibidas separadamente e nunca alteram as pontuações, para que o leitor sempre consiga distinguir o julgamento editorial dos resultados medidos.

## Quem mantém

O Privacy Ratings é apoiado, financiado e mantido pelo [Forward Email](https://forwardemail.net), um serviço de e-mail focado em privacidade que também é avaliado aqui. Isso garante a manutenção do projeto no longo prazo, mas também é um conflito de interesse, por isso é tratado de forma aberta:

- O Forward Email é pontuado pelos mesmos critérios que todos os outros provedores de e-mail.
- Seu item traz uma divulgação, assim como qualquer item com outra ligação com os mantenedores.
- Mudanças que aumentem a pontuação de um item afiliado precisam ter link para evidências e ficar abertas para revisão pública antes de serem mescladas. Veja [GOVERNANCE.md](GOVERNANCE.md).
- Não há links de afiliados, posicionamentos pagos nem patrocínios. A validação rejeita links com parâmetros de indicação.

Se uma avaliação parecer errada, abra uma issue ou um pull request com evidências. Esse é todo o processo.

## Créditos

Muitos itens foram listados primeiro a partir do [Awesome Privacy](https://github.com/lissy93/awesome-privacy), publicado sob CC0. Os dados de hospedagem de servidores de e-mail vêm do [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).

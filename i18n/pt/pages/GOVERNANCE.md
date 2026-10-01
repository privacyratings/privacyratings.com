<!-- source: e696176d1bdb -->
# Governança

Como as decisões são tomadas, como as escolhas são feitas e como os conflitos de interesse são tratados.

## Mantenedores

Os mantenedores revisam e mesclam pull requests, fazem a triagem de issues e moderam as Discussions. Os mantenedores estão listados em [`.github/CODEOWNERS`](.github/CODEOWNERS). Qualquer pessoa pode se tornar mantenedora depois de um histórico de contribuições precisas e bem fundamentadas.

## Como as mudanças são aceitas

1. Todas as mudanças passam por um pull request. Ninguém, nem mesmo os mantenedores, envia mudanças de avaliações diretamente para `main`.
2. Todo pull request precisa passar em `npm test` (validação e build).
3. Pelo menos um mantenedor aprova o pull request.
4. As respostas precisam de evidências de uma fonte primária: documentação oficial, código-fonte, arquivos de licença, relatórios de auditoria publicados ou testes reproduzíveis. Resenhas, posts de blog e alegações de marketing sem detalhes não são evidências.
5. Quando as fontes divergem, prevalece a fonte primária mais recente. Se ainda não estiver claro, a resposta é "desconhecido".

## Mudanças nos critérios

Os critérios definem todas as pontuações, por isso mudanças em `criteria/` exigem mais cuidado:

- Abra primeiro uma issue do tipo "Criteria change" ou uma Discussion.
- O pull request fica aberto por pelo menos 7 dias para comentários públicos.
- Ele precisa da aprovação de dois mantenedores.
- Os ids dos critérios nunca são renomeados depois de publicados. Para aposentar um critério, remova-o em um pull request que explique o motivo.

## Escolhas

- Cada categoria pode ter até duas escolhas.
- Uma escolha precisa ter um `pick_reason` que explique a decisão em linguagem simples.
- Cada categoria tem no máximo duas escolhas, ordenadas com `pick: 1` e `pick: 2`.
- As escolhas são editoriais. Elas são exibidas separadamente e nunca alteram as pontuações.
- Qualquer pessoa pode contestar uma escolha na categoria "Picks" das Discussions. As contestações são respondidas publicamente.

## Conflitos de interesse

O Privacy Ratings é mantido pela equipe por trás do Forward Email. Itens ligados aos mantenedores são "itens afiliados". No momento, isso significa o Forward Email.

Regras para itens afiliados:

- Cada item afiliado traz uma `disclosure` (divulgação) exibida no topo da sua página.
- Um pull request que aumente a pontuação de um item afiliado, ou o torne uma escolha, precisa ter link para evidências de cada resposta alterada e ficar aberto por pelo menos 7 dias antes de ser mesclado.
- Um pull request que reduza a pontuação de um item afiliado com evidências válidas é mesclado como qualquer outro.
- Os mantenedores devem adicionar uma divulgação a qualquer item com o qual eles, ou seus empregadores, tenham uma ligação financeira ou pessoal.

## Dinheiro

- Sem links de afiliados. A validação rejeita URLs com parâmetros de indicação ou de rastreamento.
- Sem posicionamentos pagos, itens patrocinados ou resenhas pagas.
- Os fornecedores podem enviar correções como qualquer pessoa, com evidências, e devem informar que são o fornecedor.

## Moderação

Issues, pull requests e Discussions seguem o [Código de Conduta](CODE_OF_CONDUCT.md). Os mantenedores podem bloquear ou ocultar comentários abusivos, fora do tema ou promocionais.

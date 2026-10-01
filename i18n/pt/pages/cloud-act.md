<!-- source: 2f40b8f7e8ef -->
# O que é o CLOUD Act?

O **Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** é uma lei dos EUA que responde a uma pergunta: as autoridades americanas podem obter dados de uma empresa americana quando esses dados estão armazenados em outro país? A resposta é sim.

## O que ele faz

1. **A localização não importa.** Um provedor sujeito à jurisdição dos EUA deve entregar os dados em sua "posse, custódia ou controle" em resposta a um processo legal válido nos EUA, onde quer que os dados estejam armazenados no mundo. [Fonte: Departamento de Justiça dos EUA](https://www.justice.gov/criminal/cloud-act-resources)
2. **Acordos com outros países.** Os EUA podem assinar acordos de acesso a dados que permitem que governos estrangeiros de confiança solicitem dados diretamente a provedores dos EUA em casos de crimes graves, sem passar pelo processo mais lento dos tratados de assistência jurídica mútua (MLAT). [Fonte: Departamento de Justiça dos EUA](https://www.justice.gov/criminal/cloud-act-resources)
3. **Uma forma de contestar.** Os provedores podem pedir a um tribunal que cancele ou altere uma solicitação quando ela conflita com as leis de outro país que tenha um acordo em vigor.

Há acordos em vigor com o **Reino Unido** e a **Austrália**. Foram anunciadas negociações com o **Canadá** e a **União Europeia**. [Fonte: Departamento de Justiça dos EUA](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## O que ele não faz

- Não cria novos poderes de vigilância nem elimina a necessidade de mandado. As autoridades dos EUA ainda precisam de um processo legal válido, e o conteúdo das comunicações geralmente exige um mandado de busca.
- Não obriga um provedor a descriptografar dados que ele não consegue descriptografar. Ele abrange os dados que o provedor tem. Dados criptografados com chaves que só o usuário possui continuam criptografados.
- Não se aplica apenas a data centers nos EUA. Escolher servidores na Europa não ajuda se a empresa que os opera estiver sujeita à jurisdição dos EUA.

## Quem ele afeta

Todas as empresas sujeitas à jurisdição dos EUA: Google, Microsoft, Apple, Amazon, Cloudflare e serviços americanos menores, incluindo o Forward Email. Veja [todos os serviços avaliados sediados nos Estados Unidos](/jurisdictions/united-states/).

Ele também pode alcançar **serviços não americanos que armazenam dados em provedores de nuvem dos EUA**, já que o próprio provedor de nuvem pode receber uma solicitação. Por isso, a pergunta útil não é apenas "onde fica a empresa?", mas também "quais dados existem e quem detém as chaves?"

## Por que criptografia e dados mínimos importam mais do que a localização

As leis mudam, e todo país tem uma forma de obrigar a entrega de dados. O que mais importa é o que um provedor **pode** entregar:

| Situação | O que uma solicitação pode alcançar |
| --- | --- |
| E-mails armazenados em texto simples | Tudo o que está na caixa de correio |
| E-mails criptografados em repouso com chaves do provedor | Tudo, porque o provedor pode descriptografá-los |
| E-mails criptografados com chaves derivadas da senha do usuário | Dados da conta e dados de conexão, não o conteúdo das mensagens |
| Nenhum registro mantido | Nada sobre a atividade |

Exemplos reais:

- **Proton (Suíça, fora de todos os acordos Eyes)** atendeu a 8.313 de 9.301 ordens judiciais suíças no seu relatório anual mais recente, fornecendo as informações de conta que possui. [Fonte: relatório de transparência do Proton](https://proton.me/legal/transparency)
- **Proton VPN (mesma empresa, mesmo país)** não atendeu a nenhuma, porque não mantém registros. [Fonte: relatório de transparência do Proton](https://proton.me/legal/transparency)
- **Tuta (Alemanha)** pode receber ordem de um juiz alemão para entregar caixas de correio ou monitorá-las em tempo real. Os e-mails com criptografia de ponta a ponta continuam criptografados. [Fonte: relatório de transparência do Tuta](https://tuta.com/blog/transparency-report)

A mesma empresa, no mesmo país, obtém resultados muito diferentes dependendo de quais dados existem. É por isso que o Privacy Ratings mostra a jurisdição em todas as páginas, mas pontua o que os provedores realmente fazem. Veja [como a jurisdição é tratada](/jurisdictions/).

## Como o CLOUD Act se aplica ao Forward Email

O Forward Email está sediado nos Estados Unidos e está sujeito ao CLOUD Act. Seu [whitepaper técnico](https://forwardemail.net/technical-whitepaper.pdf) descreve como seu design limita o que uma solicitação poderia alcançar:

- **Caixas de correio criptografadas.** Cada caixa de correio é um arquivo SQLite criptografado individualmente. O whitepaper afirma que o Forward Email não pode acessar o conteúdo das mensagens.
- **Sem registro em disco do conteúdo ou dos metadados dos e-mails.** O Forward Email não mantém registros de para quem os usuários escrevem.
- **Dados limitados.** O que poderia ser divulgado são informações básicas da conta (como o endereço de e-mail da conta, a data de cadastro e os dados de pagamento) e registros limitados de endereços IP que podem ser mantidos temporariamente para segurança e prevenção de abusos.
- **Somente processo legal válido.** As solicitações exigem uma intimação, ordem judicial ou mandado de busca. Solicitações de fora dos EUA precisam passar por um tribunal americano, um tratado de assistência jurídica mútua ou um acordo do CLOUD Act que atenda aos requisitos legais dos EUA.
- **Aviso e contestação.** Os usuários são avisados quando a lei permite, e solicitações excessivamente amplas são contestadas.

O Forward Email mantém o Privacy Ratings. Sua avaliação usa os mesmos critérios que a de todos os outros provedores. Veja [a avaliação do Forward Email](/email-providers/forward-email/) e [as regras de governança](/governance/).

## Leituras adicionais

- [Departamento de Justiça dos EUA: recursos sobre o CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: compartilhamento internacional de dados sob o CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: vigilância sob a Seção 702](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)

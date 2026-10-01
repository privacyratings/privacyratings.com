<!-- source: eecc9b0ced33 -->
# Testes automatizados

Os serviços hospedados (categorias com `type: service`) são testados automaticamente quando seu arquivo de avaliação tem um `domain`. Provedores de e-mail e serviços de encaminhamento com um `mail_domain` também passam por um teste de e-mail.

| Teste | O que verifica | Critério | Sim | Parcial | Não |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | Versões de TLS, cifras, certificados e falhas conhecidas de TLS | `tls` | A+ ou A | A- ou B | C ou inferior |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Cabeçalhos de segurança como CSP, HSTS e X-Frame-Options, e flags de cookies | `security_headers` | A+ ou A | A-, B+ ou B | B- ou inferior |
| [Teste de site do Internet.nl](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS e opções de segurança | `web_standards` | 90% ou mais | 70% a 89% | Abaixo de 70% |
| [Teste de e-mail do Internet.nl](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS e DANE para o domínio de e-mail | `mail_standards` | 90% ou mais | 70% a 89% | Abaixo de 70% |
| [Hardenize](https://www.hardenize.com) | Configuração de segurança de DNS, e-mail e web | Apenas link | | | |

## Padrões de e-mail

Provedores de e-mail e serviços de encaminhamento com um `mail_domain` também passam por estes testes, executados por [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Teste | O que verifica | Critério | Sim |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, política DMARC, modo MTA-STS (RFC 8461), TLS-RPT (RFC 8460), validação DNSSEC, DANE TLSA em todos os hosts MX (RFC 7672), além de BIMI e registros SRV da RFC 6186, apenas para informação | `transport_security` | Os seis aplicados |
| IMAP `CAPABILITY` | TLS implícito na 993 (RFC 8314), IMAP4rev1 ou IMAP4rev2, IDLE. Recorre a STARTTLS na 143 | `imap_standards` | TLS implícito, IMAP4rev1/rev2 e IDLE |
| POP3 `CAPA` | TLS implícito na 995, CAPA (RFC 2449), UIDL. Recorre a STLS na 110 | `pop3_standards` | TLS implícito, CAPA e UIDL |
| SMTP `EHLO` | Envio com TLS implícito na 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Recorre a STARTTLS na 587 | `smtp_standards` | TLS implícito e as quatro extensões |

Os nomes dos servidores vêm de `imap_host`, `pop3_host` e `smtp_host` no arquivo de avaliação, ou dos registros SRV da RFC 6186 do provedor. Defina um host como `false` quando o provedor não oferecer aquele protocolo. Os recursos são o que cada servidor anuncia antes do login, e as listas completas aparecem em cada página de avaliação.

## Rastreadores no site

Todo item com um site, incluindo apps, passa por um teste de rastreadores executado por [`scripts/trackers.js`](scripts/trackers.js). Ele carrega a página inicial sem executar JavaScript e compara cada host de script, frame, imagem e folha de estilo, além do código inline, com uma lista de serviços conhecidos de rastreamento e análise de uso.

| Encontrado | Efeito em `no_trackers` |
| --- | --- |
| Rastreadores de terceiros como Google Analytics, Google Tag Manager, Meta Pixel, Hotjar ou HubSpot | A resposta passa a ser "não", independentemente do que diz o arquivo de avaliação |
| Análise de uso sem cookies (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | Um "sim" passa a ser "parcial" |
| Fontes, incorporações, relatórios de erros, chat de suporte ou ferramentas de consentimento | Listados na página, sem pontuação |
| Nada | É usada a resposta do arquivo de avaliação |

Quando o site é uma página de hospedagem de código ou de loja de apps (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play e semelhantes), o teste é ignorado, porque essa página não é mantida pelo projeto.

O teste só vê rastreadores escritos na própria página. Rastreadores adicionados depois por scripts, e a telemetria dentro dos apps, ainda precisam de evidências no arquivo de avaliação, como uma política de privacidade ou um relatório do [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS e ARC não podem ser vistos de fora sem enviar e-mails, por isso são critérios respondidos com evidências em vez de testes.

Verificações automatizadas que ainda não foram executadas aparecem como "Ainda não testado" e ficam fora da pontuação, para que um provedor nunca perca pontos por um teste que não aconteceu.

No SSL Labs, é usada a nota mais fraca entre todos os endereços IP de um domínio.

O Hardenize não oferece mais uma API pública, então cada página tem link para seu relatório público em vez de pontuá-lo.

## Programação

O [workflow Scan](.github/workflows/scan.yml) roda todos os dias e testa os 40 itens com os resultados mais antigos (o Internet.nl segue limites próprios, descritos abaixo), para que todos os serviços sejam testados regularmente sem sobrecarregar as APIs gratuitas. Os resultados são salvos em [`scans/`](scans/) como JSON, enviados ao repositório e publicados com o site. Cada página mostra quando seus testes foram executados pela última vez.

Um teste que falha mantém o resultado anterior e registra o erro, para que uma indisponibilidade temporária não altere uma pontuação.

### Limites do Internet.nl

A API de lote do Internet.nl é usada dentro dos seus [termos de uso](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md):

- No máximo 2 solicitações em lote em qualquer período de 7 dias. O teste de site e o teste de e-mail são solicitações separadas, então uma rodada completa usa as duas.
- No máximo 5000 domínios por solicitação. Quando há mais domínios com o teste, os que não têm resultados ou têm os resultados mais antigos vão primeiro e os demais aguardam uma solicitação posterior.
- Não há solicitações de domínio único, então `--only` ignora o Internet.nl.

Cada solicitação é registrada em `scans/internetnl-requests.json`, que é enviado ao repositório com os resultados mesmo quando uma execução falha. Uma execução que encontra o limite semanal atingido ignora o Internet.nl e mantém os resultados existentes. Os lotes levam horas, então o status da solicitação é verificado a cada 5 minutos, e uma solicitação ainda em andamento quando a execução termina é coletada por uma execução posterior em vez de ser enviada novamente. O Internet.nl ignora `--limit`, e somente as execuções na branch padrão usam as credenciais do Internet.nl, então todas as execuções compartilham um único registro.

Este site reutiliza resultados de testes fornecidos pela ferramenta de teste [Internet.nl](https://internet.nl).

## Configuração

Todas as configurações são secrets opcionais do repositório (Settings › Secrets and variables › Actions):

| Secret | Finalidade |
| --- | --- |
| `SSLLABS_EMAIL` | E-mail registrado na [API v4 do SSL Labs](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Sem ele, é usada a API v3. O registro exige um endereço de e-mail de uma organização. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Conta para a [API em lote do Internet.nl](https://internet.nl/faqs/batch-and-dashboard/). Sem elas, as páginas têm link para os testes públicos do Internet.nl e os critérios do Internet.nl permanecem "desconhecido". |
| `INTERNETNL_API` | URL base da API em lote, para uma instância [auto-hospedada do Internet.nl](https://github.com/internetstandards/Internet.nl). O padrão é `https://batch.internet.nl/api/batch/v2`. |

O Mozilla HTTP Observatory não exige conta. Os dados de licença do GitHub usam o token integrado do workflow.

## Executar os testes localmente

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Qual domínio é testado

O campo `domain` deve ser o site principal ou o app web onde as pessoas fazem login, por exemplo `mail.example.com`, e não um subdomínio de marketing em outro host. Os fornecedores podem sugerir um domínio mais preciso em um pull request.

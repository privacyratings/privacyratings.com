<!-- source: 16559ce369ce -->
# 자동 테스트

호스팅 서비스(`type: service`인 카테고리)는 평가 파일에 `domain`이 있으면 자동으로 테스트됩니다. `mail_domain`이 있는 이메일 제공업체와 전달 서비스는 이메일 테스트도 받습니다.

| 테스트 | 점검 내용 | 기준 | 예 | 부분 | 아니요 |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | TLS 버전, 암호 스위트, 인증서, 알려진 TLS 결함 | `tls` | A+ 또는 A | A- 또는 B | C 이하 |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | CSP, HSTS, X-Frame-Options 같은 보안 헤더와 쿠키 플래그 | `security_headers` | A+ 또는 A | A-, B+ 또는 B | B- 이하 |
| [Internet.nl 웹사이트 테스트](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS 및 보안 옵션 | `web_standards` | 90% 이상 | 70%~89% | 70% 미만 |
| [Internet.nl 이메일 테스트](https://internet.nl/test-mail/) | 메일 도메인의 IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS, DANE | `mail_standards` | 90% 이상 | 70%~89% | 70% 미만 |
| [Hardenize](https://www.hardenize.com) | DNS, 이메일, 웹 보안 구성 | 링크만 제공 | | | |

## 이메일 표준

`mail_domain`이 있는 이메일 제공업체와 전달 서비스는 [`scripts/mail-tests.js`](scripts/mail-tests.js)가 실행하는 다음 테스트도 받습니다:

| 테스트 | 점검 내용 | 기준 | 예 |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, DMARC 정책, MTA-STS 모드(RFC 8461), TLS-RPT(RFC 8460), DNSSEC 검증, 모든 MX 호스트의 DANE TLSA(RFC 7672), 그리고 참고용 BIMI 및 RFC 6186 SRV 레코드 | `transport_security` | 여섯 가지 모두 강제 적용 |
| IMAP `CAPABILITY` | 993 포트의 암시적 TLS(RFC 8314), IMAP4rev1 또는 IMAP4rev2, IDLE. 143 포트의 STARTTLS로 대체 | `imap_standards` | 암시적 TLS, IMAP4rev1/rev2, IDLE |
| POP3 `CAPA` | 995 포트의 암시적 TLS, CAPA(RFC 2449), UIDL. 110 포트의 STLS로 대체 | `pop3_standards` | 암시적 TLS, CAPA, UIDL |
| SMTP `EHLO` | 465 포트의 암시적 TLS를 통한 제출, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. 587 포트의 STARTTLS로 대체 | `smtp_standards` | 암시적 TLS와 네 가지 확장 모두 |

서버 이름은 평가 파일의 `imap_host`, `pop3_host`, `smtp_host` 또는 제공업체의 RFC 6186 SRV 레코드에서 가져옵니다. 제공업체가 해당 프로토콜을 제공하지 않으면 호스트를 `false`로 설정하세요. 기능 목록은 각 서버가 로그인 전에 알리는 내용이며, 전체 목록은 각 평가 페이지에 표시됩니다.

## 웹사이트 추적기

앱을 포함해 웹사이트가 있는 모든 항목은 [`scripts/trackers.js`](scripts/trackers.js)가 실행하는 추적기 테스트를 받습니다. 이 테스트는 JavaScript를 실행하지 않고 홈페이지를 불러온 뒤, 모든 스크립트, 프레임, 이미지, 스타일시트 호스트와 인라인 코드를 알려진 추적 및 분석 서비스 목록과 비교합니다.

| 발견된 것 | `no_trackers`에 미치는 영향 |
| --- | --- |
| Google Analytics, Google Tag Manager, Meta Pixel, Hotjar, HubSpot 같은 제3자 추적기 | 평가 파일 내용과 관계없이 답변이 "no"가 됩니다 |
| 쿠키 없는 분석(Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | "yes"가 "partial"이 됩니다 |
| 글꼴, 임베드, 오류 보고, 지원 채팅 또는 동의 관리 도구 | 페이지에 표시되며, 점수에 반영되지 않습니다 |
| 없음 | 평가 파일의 답변이 사용됩니다 |

웹사이트가 코드 호스팅 또는 앱 스토어 페이지(GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play 등)인 경우, 그 페이지는 프로젝트가 운영하는 것이 아니므로 테스트를 건너뜁니다.

이 테스트는 페이지 자체에 작성된 추적기만 볼 수 있습니다. 나중에 스크립트로 추가되는 추적기와 앱 내부의 원격 분석은 개인정보 처리방침이나 [Exodus Privacy](https://reports.exodus-privacy.eu.org) 보고서 같은 근거가 평가 파일에 여전히 필요합니다.

SRS와 ARC는 메일을 보내지 않고는 외부에서 확인할 수 없으므로, 테스트 대신 근거로 답하는 기준입니다.

아직 실행되지 않은 자동 점검은 "아직 테스트되지 않음"으로 표시되고 점수에서 제외되므로, 실시되지 않은 테스트 때문에 제공업체가 감점되는 일은 없습니다.

SSL Labs의 경우 도메인의 모든 IP 주소 중 가장 낮은 등급이 사용됩니다.

Hardenize는 더 이상 공개 API를 제공하지 않으므로, 각 페이지는 점수를 매기는 대신 공개 보고서로 연결됩니다.

## 일정

[Scan 워크플로](.github/workflows/scan.yml)는 매일 실행되어 결과가 가장 오래된 항목 40개를 테스트합니다(Internet.nl은 아래에 설명된 자체 제한을 따릅니다). 따라서 무료 API에 과부하를 주지 않으면서 모든 서비스가 정기적으로 테스트됩니다. 결과는 [`scans/`](scans/)에 JSON으로 저장되고, 저장소에 커밋되며, 사이트와 함께 게시됩니다. 각 페이지에는 테스트가 마지막으로 실행된 시점이 표시됩니다.

테스트가 실패하면 이전 결과를 유지하고 오류를 기록하므로, 일시적인 장애로 점수가 바뀌지 않습니다.

### Internet.nl 제한

Internet.nl 배치 API는 [이용 약관](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md) 범위 내에서 사용됩니다.

- 7일 동안 배치 요청은 최대 2건입니다. 웹사이트 테스트와 이메일 테스트는 별도의 요청이므로, 전체 한 회차에 두 건을 모두 사용합니다.
- 요청당 도메인은 최대 5000개입니다. 테스트 대상 도메인이 이보다 많으면 결과가 없거나 가장 오래된 도메인이 먼저 처리되고, 나머지는 이후 요청을 기다립니다.
- 단일 도메인 요청은 하지 않으므로 `--only`는 Internet.nl을 건너뜁니다.

모든 요청은 `scans/internetnl-requests.json`에 기록되며, 이 파일은 실행이 실패하더라도 결과와 함께 커밋됩니다. 주간 한도에 도달한 것을 확인한 실행은 Internet.nl을 건너뛰고 기존 결과를 유지합니다. 배치는 몇 시간이 걸리므로 요청 상태를 5분마다 확인하며, 실행이 끝날 때 아직 진행 중인 요청은 다시 보내지 않고 이후 실행에서 결과를 가져옵니다. Internet.nl은 `--limit`을 무시하며, 기본 브랜치에서 실행될 때만 Internet.nl 자격 증명을 사용하므로 모든 실행이 하나의 기록을 공유합니다.

이 웹사이트는 [Internet.nl](https://internet.nl) 테스트 도구가 제공하는 테스트 결과를 재사용합니다.

## 구성

모든 설정은 선택적인 저장소 시크릿입니다(Settings › Secrets and variables › Actions):

| 시크릿 | 용도 |
| --- | --- |
| `SSLLABS_EMAIL` | [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md)에 등록된 이메일. 없으면 v3 API를 사용합니다. 등록에는 조직 이메일 주소가 필요합니다. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | [Internet.nl 배치 API](https://internet.nl/faqs/batch-and-dashboard/) 계정. 없으면 페이지가 공개 Internet.nl 테스트로 연결되고 Internet.nl 기준은 "unknown"으로 남습니다. |
| `INTERNETNL_API` | [자체 호스팅 Internet.nl](https://github.com/internetstandards/Internet.nl) 인스턴스용 배치 API 기본 URL. 기본값은 `https://batch.internet.nl/api/batch/v2`입니다. |

Mozilla HTTP Observatory는 계정이 필요 없습니다. GitHub 라이선스 데이터는 워크플로의 내장 토큰을 사용합니다.

## 로컬에서 테스트 실행하기

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## 테스트 대상 도메인

`domain` 필드는 사람들이 로그인하는 주 웹사이트나 웹 앱이어야 합니다. 예를 들어 다른 호스트에 있는 마케팅 하위 도메인이 아니라 `mail.example.com`입니다. 업체는 풀 리퀘스트로 더 정확한 도메인을 제안할 수 있습니다.

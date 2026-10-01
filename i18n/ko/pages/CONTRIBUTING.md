<!-- source: 38b6fc4b567c -->
# 기여하기

모든 일은 GitHub에서 이루어집니다. 가입해야 하는 별도의 포럼, 채팅, 계정은 없습니다.

| 하려는 일 | 사용할 것 |
| --- | --- |
| 앱이나 서비스 제안 | ["Suggest" 이슈 열기](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| 잘못된 답변이나 깨진 링크 신고 | ["Correction" 이슈 열기](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml) 또는 평가 페이지의 "수정 사항 신고" 사용 |
| 기준 제안 또는 변경 | ["Criteria change" 이슈 열기](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| 직접 수정 | 평가 페이지의 "GitHub에서 편집"을 사용하거나 풀 리퀘스트 열기 |
| 질문하거나 추천에 대해 토론 | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## 평가 편집하기

각 앱이나 서비스는 `ratings/<category>/<name>.md`에 있는 하나의 Markdown 파일입니다. 파일 맨 위는 YAML입니다. 그 아래 내용은 페이지에 표시되는 선택적인 Markdown 메모입니다.

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

규칙(`npm test`로 자동 확인):

- `answer`는 `yes`, `partial`, `no`, `unknown`, `n/a` 중 하나입니다.
- `yes`와 `partial`에는 `evidence` 링크가 필요합니다. `no`에는 `note` 또는 `evidence`가 필요합니다.
- 근거는 1차 자료여야 합니다: 공식 문서, 소스 코드, 라이선스 파일, 감사 보고서 또는 재현 가능한 테스트. 리뷰, 포럼 게시물, 구체적인 내용이 없는 마케팅 페이지는 해당하지 않습니다.
- 링크는 `https://`여야 하며 추천인이나 추적 매개변수를 포함해서는 안 됩니다.
- 자동 기준(`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`)은 테스트로 채워집니다. 직접 설정하지 마세요.
- `no_trackers`는 [추적기 테스트](SCANS.md#website-trackers)로도 확인됩니다. 홈페이지가 제3자 추적기를 불러오면, 파일 내용과 관계없이 답변이 "no"가 됩니다.
- 아직 근거가 없는 기준은 생략하세요. `unknown`으로 간주됩니다.
- `jurisdiction`은 서버 위치가 아니라 회사가 법적으로 소재한 곳입니다. 국가가 없으면 [`jurisdictions.yml`](jurisdictions.yml)에 추가하세요. 그곳의 모든 메모에는 출처가 필요합니다.
- `pick`, `pick_reason`, `disclosure`는 관리자만 추가합니다. 추천 두 개의 순서를 정하려면 `pick: 1`과 `pick: 2`를 사용합니다. [GOVERNANCE.md](GOVERNANCE.md)를 참고하세요.
- `imported_name`은 항목의 이름이 바뀐 뒤에도 Awesome Privacy에서 쓰던 이름을 유지하여, 매월 가져오기에서 다시 추가되지 않게 합니다. Awesome Privacy 항목을 영구적으로 제외하려면 이유와 함께 [`import-skip.yml`](import-skip.yml)에 추가하세요.

각 카테고리의 기준과 각 답변의 의미는 [`criteria/`](criteria/)와 [기준 페이지](https://privacyratings.com/criteria/)에 있습니다.

## 앱이나 서비스 추가하기

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

이 명령은 모든 기준을 `unknown`으로 나열한 파일을 만듭니다. 입증할 수 있는 것을 채우고, 나머지는 삭제한 뒤 `npm test`를 실행하세요.

## 작성 스타일

- 평이하고 중립적인 표현. 얼마나 훌륭한지가 아니라 무엇을 하는지 설명합니다.
- 짧은 문장. 설명은 300자 이내로 씁니다.
- 1인칭, 본문 속 날짜, 마케팅 주장은 쓰지 않습니다.
- 이름은 업체가 부르는 방식대로 씁니다.

## 로컬에서 사이트 실행하기

Node.js 18 이상이 필요합니다.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## 페이지 추가하기

`title`과 `description`이 있는 Markdown 파일을 [`pages/`](pages/)에 넣으세요. `/<file-name>/`에 Markdown 사본, 구조화된 데이터, 사이트맵 항목과 함께 게시됩니다.

## 카테고리나 기준 추가하기

1. [`categories.yml`](categories.yml)의 알맞은 그룹 아래에 카테고리를 추가합니다.
2. 필요하면 카테고리별 기준이 담긴 `criteria/<category-id>.yml`을 추가합니다. 형식은 기존 파일에서 복사하세요.
3. `ratings/<category-id>/`를 만들고 항목을 추가합니다.
4. 기준 변경은 [GOVERNANCE.md](GOVERNANCE.md)의 검토 규칙을 따릅니다.

## 번역

사이트는 25개 언어로 게시됩니다. 원본은 영어이며, 다른 모든 언어는 `i18n/<code>/`에 있습니다.

| 파일 | 내용 |
| --- | --- |
| `ui.json` | 인터페이스 텍스트: 제목, 버튼, `{placeholders}`가 들어간 문장 |
| `data.json` | 카테고리 이름, 기준, 가이드, 국가별 참고 사항 |
| `entries.json` | 평가 설명, 추천 이유, 공개 사항 |
| `pages/*.md` | 이 문서와 같은 전체 문서 |

각 JSON 파일은 영어 텍스트를 번역문에 대응시킵니다. 영어가 바뀌면 기존 번역은 더 이상 일치하지 않으므로, 누군가 새 텍스트를 번역할 때까지 영어가 표시됩니다. 오래된 내용은 절대 표시되지 않습니다.

1. `npm run build`를 실행합니다. 현재 영어 목록을 `i18n/source/`에 기록합니다.
2. `npm run i18n:check`를 실행해 각 언어에서 빠진 부분을 확인하거나, 한 언어와 파일의 세부 내용은 `node scripts/i18n-check.js de ui`로 확인합니다.
3. 번역을 추가하거나 수정합니다. 모든 `{placeholder}`는 그대로 유지하세요.
4. 문서의 경우 `i18n/source/pages/`에서 영어 원문을 복사하고, 첫 줄(`<!-- source: … -->`, 번역을 해당 버전의 영어와 연결함)은 그대로 둔 채 나머지를 번역합니다.

답변별 참고 사항과 근거는 영어로 유지됩니다. 비교와 대부분의 개별 평가는 영어로만 제공되며, 추천, 카테고리, 가이드, 대안, 오픈 소스 목록, 관할권, 문서는 번역됩니다. 언어 메뉴와 자동 리디렉션은 각 페이지의 `hreflang` 링크를 사용합니다.

## 풀 리퀘스트 체크리스트

- [ ] `npm test`를 통과합니다.
- [ ] 변경한 모든 답변이 근거와 연결되어 있습니다.
- [ ] 변경한 서비스에서 일하거나 그 서비스와 관련이 있다면, 풀 리퀘스트에 그 사실을 밝혔습니다.

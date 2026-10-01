<!-- source: 16559ce369ce -->
# 自動テスト

ホスト型サービス（`type: service` のカテゴリ）は、評価ファイルに `domain` がある場合に自動でテストされます。`mail_domain` を持つメールプロバイダーと転送サービスには、メールテストも実施されます。

| テスト | 確認内容 | 評価基準 | はい | 一部 | いいえ |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | TLS のバージョン、暗号スイート、証明書、既知の TLS の脆弱性 | `tls` | A+ または A | A- または B | C 以下 |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | CSP、HSTS、X-Frame-Options などのセキュリティヘッダーと Cookie のフラグ | `security_headers` | A+ または A | A-、B+、または B | B- 以下 |
| [Internet.nl ウェブサイトテスト](https://internet.nl/test-site/) | IPv6、DNSSEC、HTTPS、セキュリティオプション | `web_standards` | 90%以上 | 70%〜89% | 70%未満 |
| [Internet.nl メールテスト](https://internet.nl/test-mail/) | メールドメインの IPv6、DNSSEC、DMARC、DKIM、SPF、STARTTLS、DANE | `mail_standards` | 90%以上 | 70%〜89% | 70%未満 |
| [Hardenize](https://www.hardenize.com) | DNS、メール、ウェブのセキュリティ設定 | リンクのみ | | | |

## メールの標準規格

`mail_domain` を持つメールプロバイダーと転送サービスには、[`scripts/mail-tests.js`](scripts/mail-tests.js) で実行される以下のテストも実施されます。

| テスト | 確認内容 | 評価基準 | はい |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF、DMARC ポリシー、MTA-STS モード（RFC 8461）、TLS-RPT（RFC 8460）、DNSSEC 検証、すべての MX ホストの DANE TLSA（RFC 7672）、および参考情報として BIMI と RFC 6186 SRV レコード | `transport_security` | 6つすべてが適用されている |
| IMAP `CAPABILITY` | 993での暗黙的 TLS（RFC 8314）、IMAP4rev1 または IMAP4rev2、IDLE。143での STARTTLS にフォールバック | `imap_standards` | 暗黙的 TLS、IMAP4rev1/rev2、IDLE |
| POP3 `CAPA` | 995での暗黙的 TLS、CAPA（RFC 2449）、UIDL。110での STLS にフォールバック | `pop3_standards` | 暗黙的 TLS、CAPA、UIDL |
| SMTP `EHLO` | 465での暗黙的 TLS による送信、SMTPUTF8、8BITMIME、PIPELINING、AUTH。587での STARTTLS にフォールバック | `smtp_standards` | 暗黙的 TLS と4つの拡張すべて |

サーバー名は、評価ファイルの `imap_host`、`pop3_host`、`smtp_host`、またはプロバイダーの RFC 6186 SRV レコードから取得します。プロバイダーがそのプロトコルを提供していない場合は、ホストを `false` に設定してください。機能は各サーバーがログイン前に通知している内容で、完全な一覧は各評価ページに表示されます。

## ウェブサイトのトラッカー

アプリを含め、ウェブサイトを持つすべての項目には、[`scripts/trackers.js`](scripts/trackers.js) によるトラッカーテストが実行されます。JavaScript を実行せずにホームページを読み込み、すべてのスクリプト、フレーム、画像、スタイルシートのホストとインラインコードを、既知のトラッキング・アクセス解析サービスのリストと照合します。

| 検出されたもの | `no_trackers` への影響 |
| --- | --- |
| Google Analytics、Google Tag Manager、Meta Pixel、Hotjar、HubSpot などのサードパーティのトラッカー | 評価ファイルの内容にかかわらず、回答は「いいえ」になる |
| Cookie を使わないアクセス解析（Plausible、Fathom、Simple Analytics、Matomo Cloud、Cloudflare Web Analytics） | 「はい」が「一部」になる |
| フォント、埋め込み、エラー報告、サポートチャット、同意管理ツール | ページに表示されるが、採点対象外 |
| 何もない | 評価ファイルの回答が使われる |

ウェブサイトがコードホスティングやアプリストアのページ（GitHub、GitLab、Codeberg、SourceForge、F-Droid、Google Play など）の場合、そのページはプロジェクトが運営しているものではないため、テストはスキップされます。

このテストで検出できるのは、ページ自体に書き込まれたトラッカーだけです。後からスクリプトによって追加されるトラッカーや、アプリ内のテレメトリーについては、プライバシーポリシーや [Exodus Privacy](https://reports.exodus-privacy.eu.org) のレポートなど、評価ファイルに根拠が必要です。

SRS と ARC はメールを送信しなければ外部から確認できないため、テストではなく根拠で回答する評価基準になっています。

まだ実行されていない自動チェックは「未テスト」と表示され、スコアから除外されます。そのため、まだ実施されていないテストのせいでプロバイダーが減点されることはありません。

SSL Labs では、ドメインのすべての IP アドレスの中で最も低いグレードが使われます。

Hardenize は公開 API を提供しなくなったため、各ページでは採点せずに公開レポートにリンクしています。

## スケジュール

[Scan ワークフロー](.github/workflows/scan.yml)は毎日実行され、結果が最も古い40件の項目をテストします（Internet.nl は独自の制限に従います。後述）。これにより、無料の API に負荷をかけすぎずに、すべてのサービスが定期的にテストされます。結果は JSON として [`scans/`](scans/) に保存され、リポジトリにコミットされ、サイトとともに公開されます。各ページには、テストが最後に実行された日時が表示されます。

テストが失敗した場合は前回の結果が維持され、エラーが記録されるため、一時的な障害でスコアが変わることはありません。

### Internet.nl の制限

Internet.nl のバッチ API は、その[利用規約](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md)の範囲内で使用します。

- バッチリクエストは任意の7日間で最大2件です。ウェブサイトテストとメールテストは別々のリクエストのため、1回の完全な実行で両方を使います。
- 1件のリクエストあたり最大5000ドメインです。テスト対象のドメインがそれより多い場合は、結果がないドメインや結果が最も古いドメインが優先され、残りは後のリクエストを待ちます。
- 単一ドメインのリクエストは行わないため、`--only` では Internet.nl はスキップされます。

すべてのリクエストは `scans/internetnl-requests.json` に記録され、このファイルは実行が失敗した場合でも結果とともにコミットされます。週ごとの上限に達していることを検出した実行は、Internet.nl をスキップし、既存の結果を維持します。バッチには数時間かかるため、リクエストの状態は5分ごとに確認され、実行終了時にまだ処理中のリクエストは、再送信されるのではなく後の実行で回収されます。Internet.nl は `--limit` を無視し、Internet.nl の認証情報を使うのはデフォルトブランチ上の実行だけなので、すべての実行が1つの記録を共有します。

このウェブサイトは、[Internet.nl](https://internet.nl) テストツールが提供するテスト結果を再利用しています。

## 設定

すべての設定は任意のリポジトリシークレットです（Settings › Secrets and variables › Actions）：

| シークレット | 用途 |
| --- | --- |
| `SSLLABS_EMAIL` | [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md) に登録したメールアドレス。ない場合は v3 API が使われます。登録には組織のメールアドレスが必要です。 |
| `INTERNETNL_USERNAME`、`INTERNETNL_PASSWORD` | [Internet.nl バッチ API](https://internet.nl/faqs/batch-and-dashboard/) のアカウント。ない場合、ページは公開の Internet.nl テストにリンクし、Internet.nl の評価基準は「不明」のままになります。 |
| `INTERNETNL_API` | [セルフホスト型 Internet.nl](https://github.com/internetstandards/Internet.nl) インスタンス用のバッチ API のベース URL。既定値は `https://batch.internet.nl/api/batch/v2` です。 |

Mozilla HTTP Observatory にはアカウントは不要です。GitHub のライセンスデータには、ワークフローの組み込みトークンが使われます。

## テストをローカルで実行する

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## テストされるドメイン

`domain` フィールドには、人々がサインインするメインのウェブサイトまたはウェブアプリを指定してください。たとえば、別のホストにあるマーケティング用のサブドメインではなく `mail.example.com` です。ベンダーは、より正確なドメインをプルリクエストで提案できます。

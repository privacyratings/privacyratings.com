<!-- source: f2ab6af4acf3 -->
# 貢献する方法

すべては GitHub で行われます。他のフォーラム、チャット、登録が必要なアカウントはありません。

| やりたいこと | 使うもの |
| --- | --- |
| アプリやサービスを提案する | [「Suggest」の Issue を作成する](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| 誤った回答やリンク切れを報告する | [「Correction」の Issue を作成する](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml)か、各評価ページの「修正を報告」を使う |
| 評価基準を提案・変更する | [「Criteria change」の Issue を作成する](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| 自分で修正する | 各評価ページの「GitHub で編集」を使うか、プルリクエストを作成する |
| 質問する、またはおすすめについて議論する | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## 評価の編集

各アプリやサービスは、`ratings/<category>/<name>.md` にある1つの Markdown ファイルです。ファイルの先頭は YAML です。その下はページに表示される任意の Markdown の注記です。

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

ルール（`npm test` で自動チェックされます）：

- `answer` は `yes`、`partial`、`no`、`unknown`、`n/a` のいずれかです。
- `yes` と `partial` には `evidence` のリンクが必要です。`no` には `note` または `evidence` が必要です。
- 根拠は一次情報源である必要があります：公式ドキュメント、ソースコード、ライセンスファイル、監査報告書、または再現可能なテスト。レビュー、フォーラムの投稿、詳細のないマーケティングページは不可です。
- リンクは `https://` で始まり、紹介パラメーターやトラッキングパラメーターを含んではいけません。
- 自動の評価基準（`tls`、`security_headers`、`web_standards`、`mail_standards`、`imap_standards`、`pop3_standards`、`smtp_standards`、`transport_security`）はテストによって入力されます。手動で設定しないでください。
- `no_trackers` は[トラッカーテスト](SCANS.md#website-trackers)でもチェックされます。ホームページがサードパーティのトラッカーを読み込んでいる場合、ファイルの内容にかかわらず回答は「いいえ」になります。
- まだ根拠のない評価基準は省略してください。`unknown` として扱われます。
- `jurisdiction` は企業が法的に拠点を置く国です（サーバーの所在地ではありません）。国がない場合は [`jurisdictions.yml`](jurisdictions.yml) に追加してください。そこにあるすべての注記には出典が必要です。
- `pick`、`pick_reason`、`disclosure` を追加できるのはメンテナーだけです。2つのおすすめの順序は `pick: 1` と `pick: 2` で指定します。[GOVERNANCE.md](GOVERNANCE.md) をご覧ください。
- `imported_name` は、項目の名前が変更された後も Awesome Privacy での名前を保持し、毎月のインポートで再び追加されないようにします。Awesome Privacy の項目を恒久的に除外するには、理由を添えて [`import-skip.yml`](import-skip.yml) に追加してください。

各カテゴリの評価基準と各回答の意味は、[`criteria/`](criteria/) と[評価基準のページ](https://privacyratings.com/criteria/)にあります。

## アプリやサービスの追加

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

これにより、すべての評価基準が `unknown` として記載されたファイルが作成されます。証明できるものを記入し、残りを削除してから、`npm test` を実行してください。

## 文章のスタイル

- わかりやすく中立的な言葉。どれほど優れているかではなく、何をするものかを説明します。
- 短い文。説明は300文字未満にします。
- 一人称、文中の日付、マーケティング上の主張は使いません。
- ベンダーと同じ名称を使います。

## サイトをローカルで実行する

Node.js 18 以降が必要です。

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## ページの追加

`title` と `description` を持つ Markdown ファイルを [`pages/`](pages/) に置いてください。`/<file-name>/` で公開され、Markdown のコピー、構造化データ、サイトマップのエントリーが作成されます。

## カテゴリや評価基準の追加

1. [`categories.yml`](categories.yml) の適切なグループにカテゴリを追加します。
2. 必要に応じて、カテゴリ固有の評価基準を含む `criteria/<category-id>.yml` を追加します。形式は既存のファイルからコピーしてください。
3. `ratings/<category-id>/` を作成し、項目を追加します。
4. 評価基準の変更は、[GOVERNANCE.md](GOVERNANCE.md) のレビュールールに従います。

## 翻訳

このサイトは25の言語で公開されています。英語が原文で、ほかの各言語は `i18n/<code>/` にあります。

| ファイル | 内容 |
| --- | --- |
| `ui.json` | インターフェースのテキスト：見出し、ボタン、`{placeholders}` を含む文 |
| `data.json` | カテゴリ名、評価基準、ガイド、国に関する注記 |
| `entries.json` | 評価の説明、おすすめの理由、開示事項 |
| `pages/*.md` | このページのような文書全体 |

各 JSON ファイルは、英語のテキストをその翻訳に対応付けます。英語が変更されると古い翻訳は一致しなくなるため、誰かが新しいテキストを翻訳するまで英語が表示されます。古くなった内容が表示されることはありません。

1. `npm run build` を実行します。現在の英語のリストが `i18n/source/` に書き出されます。
2. `npm run i18n:check` を実行すると、各言語で不足しているものを確認できます。1つの言語とファイルの詳細は `node scripts/i18n-check.js de ui` で確認できます。
3. 翻訳を追加または修正します。すべての `{placeholder}` はそのままの形で残してください。
4. 文書の場合は、`i18n/source/pages/` から英語をコピーし、1行目（翻訳を英語のそのバージョンに結び付ける `<!-- source: … -->`）を残して、残りを翻訳します。

回答ごとの注記と根拠は英語のままです。比較と大半の個別の評価は英語のみで、おすすめ、カテゴリ、ガイド、代替、オープンソースのリスト、管轄、文書は翻訳されます。言語メニューと自動リダイレクトは、各ページの `hreflang` リンクを使用します。

## プルリクエストのチェックリスト

- [ ] `npm test` に合格している。
- [ ] 変更したすべての回答が根拠にリンクしている。
- [ ] 変更したサービスで働いている、または関係がある場合は、プルリクエストでその旨を記載している。

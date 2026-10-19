<!-- source: 95e0ae8a3554 -->
# プライバシーポリシー

Privacy RatingsはCookieを設定せず、アクセス解析を使わず、ほかのサイトから何も読み込みません。このページでは、サイトにアクセスしたときやコマンドラインツールを使ったときに実際に起きることをすべて説明します。

## ホスティング

このサイトは[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection)で配信しています。[GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)にあるとおり、GitHubはセキュリティのためにすべての訪問者のIPアドレスを記録します。Privacy Ratingsは独自のサーバーを運用しておらず、そのログを見ることはできません。

## サイトがブラウザに保存するもの

- `theme`: 選んだカラーテーマ（選んだ場合のみ）。
- `lang`: 選んだ言語、または初回アクセス時にブラウザの設定と一致した言語。
- `mastodon`: 共有メニューで入力したMastodonサーバー（使った場合のみ）。
- Service Workerが開いたページのコピーを保存し、オフラインでも表示できるようにします。

これらはすべて端末内にとどまります。ブラウザでサイトデータを消去すると削除されます。

## ほかのサイトへのリクエスト

スクリプト、スタイルシート、フォント、画像、動画はすべてprivacyratings.comから読み込み、それ以外はContent Security Policyでブロックします。共有リンクを含め、ほかのサイトへのリンクは開くまで何も読み込みません。

## 検索

検索ボックスはこのサイトから検索インデックスをダウンロードし、ブラウザ内で絞り込みます。検索ページでは、ほかのリンクと同じく、検索語がページのアドレスに含まれます。

## コマンドラインツール

コマンドラインツール`privacyratings`は、アクセス解析やテレメトリを送信しません。評価データはこのサイトからダウンロードし、1日に1回GitHub APIで新しいリリースを確認します。新しいバージョンがあれば、GitHubまたはnpmから自身を更新します。更新を止めるには`PRIVACYRATINGS_NO_UPDATE=1`を設定するか、`--no-update`を指定してください。

## コントリビューション

Issue、プルリクエスト、ディスカッションはGitHub上で公開されています。GitHubアカウントにはGitHub General Privacy Statementが適用されます。

## お問い合わせ

このポリシーについての質問は[GitHubのIssue](https://github.com/privacyratings/privacyratings.com/issues)でどうぞ。セキュリティ上の問題は[SECURITY.md](https://github.com/privacyratings/privacyratings.com/blob/main/SECURITY.md)の手順で報告してください。

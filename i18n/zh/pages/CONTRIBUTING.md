<!-- source: 38b6fc4b567c -->
# 参与贡献

一切都在 GitHub 上进行。没有其他需要注册的论坛、聊天工具或账户。

| 要做的事 | 使用 |
| --- | --- |
| 建议新增应用或服务 | [提交“Suggest”issue](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| 报告错误的回答或失效的链接 | [提交“Correction”issue](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml)，或在任意评级页面上使用“报告更正” |
| 提议或修改标准 | [提交“Criteria change”issue](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| 自己动手修复 | 在任意评级页面上使用“在 GitHub 上编辑”，或提交拉取请求 |
| 提问或讨论推荐 | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## 编辑评级

每个应用或服务是 `ratings/<category>/<name>.md` 中的一个 Markdown 文件。文件顶部是 YAML。其下方的内容是可选的 Markdown 说明，会显示在页面上。

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

规则（由 `npm test` 自动检查）：

- `answer` 为 `yes`、`partial`、`no`、`unknown` 或 `n/a` 之一。
- `yes` 和 `partial` 需要 `evidence` 链接。`no` 需要 `note` 或 `evidence`。
- 证据必须是一手来源：官方文档、源代码、许可证文件、审计报告或可复现的测试。评测、论坛帖子或缺乏细节的营销页面都不算。
- 链接必须是 `https://`，且不得包含推荐或跟踪参数。
- 自动化标准（`tls`、`security_headers`、`web_standards`、`mail_standards`、`imap_standards`、`pop3_standards`、`smtp_standards`、`transport_security`）由测试填写。请勿手动设置。
- `no_trackers` 也会由[跟踪器测试](SCANS.md#website-trackers)检查。如果首页加载了第三方跟踪器，无论文件如何填写，回答都会变为“否”。
- 尚无证据的标准请留空不写。它会被算作 `unknown`。
- `jurisdiction` 是公司的法定所在地（而不是其服务器所在地）。如果缺少某个国家或地区，请将其添加到 [`jurisdictions.yml`](jurisdictions.yml)。其中的每条说明都需要注明来源。
- 只有维护者可以添加 `pick`、`pick_reason` 和 `disclosure`。使用 `pick: 1` 和 `pick: 2` 为两个推荐排序。请参阅 [GOVERNANCE.md](GOVERNANCE.md)。
- `imported_name` 用于在条目改名后保留其在 Awesome Privacy 中的名称，以免每月导入时再次添加。如要永久排除某个 Awesome Privacy 条目，请将其连同理由添加到 [`import-skip.yml`](import-skip.yml)。

每个类别的标准以及每个回答的含义，都在 [`criteria/`](criteria/) 和[标准页面](https://privacyratings.com/criteria/)中。

## 添加应用或服务

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

这会创建一个文件，其中所有标准都列为 `unknown`。填写您能证明的内容，删除其余部分，然后运行 `npm test`。

## 写作风格

- 使用平实、中立的语言。描述它做什么，而不是它有多好。
- 句子简短。描述不超过 300 个字符。
- 不用第一人称，正文中不写日期，不做营销宣传。
- 按厂商的叫法称呼产品。

## 在本地运行网站

需要 Node.js 18 或更高版本。

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## 添加页面

将带有 `title` 和 `description` 的 Markdown 文件放入 [`pages/`](pages/)。它会发布在 `/<file-name>/`，并附带 Markdown 副本、结构化数据和网站地图条目。

## 添加类别或标准

1. 在 [`categories.yml`](categories.yml) 中将类别添加到合适的分组下。
2. 可选：添加 `criteria/<category-id>.yml`，包含该类别特有的标准。格式可参照现有文件。
3. 创建 `ratings/<category-id>/` 并添加条目。
4. 标准的修改遵循 [GOVERNANCE.md](GOVERNANCE.md) 中的审核规则。

## 翻译

本网站以 25 种语言发布。英语是源语言，其他每种语言都位于 `i18n/<code>/` 中：

| 文件 | 内容 |
| --- | --- |
| `ui.json` | 界面文本：标题、按钮以及带有 `{placeholders}` 的句子 |
| `data.json` | 类别名称、标准、指南和国家说明 |
| `entries.json` | 评级描述、推荐理由和披露信息 |
| `pages/*.md` | 完整文档，例如本文档 |

每个 JSON 文件将英语文本映射到其译文。英语文本更改后，旧译文将不再匹配，因此会显示英语，直到有人翻译新文本。过时的内容永远不会显示。

1. 运行 `npm run build`。它会将当前的英语列表写入 `i18n/source/`。
2. 运行 `npm run i18n:check` 查看每种语言缺少的内容，或运行 `node scripts/i18n-check.js de ui` 查看某一种语言和文件的详细信息。
3. 添加或修正译文，并保持每个 `{placeholder}` 完全不变。
4. 对于文档，从 `i18n/source/pages/` 复制英语原文，保留其第一行（`<!-- source: … -->`，它将译文与该版本的英语原文关联），然后翻译其余部分。

每个答案的说明和证据保留英语。比较页面和大多数单项评级仅提供英语；编辑推荐、类别、指南、替代方案、开源列表、司法管辖区和文档会被翻译。语言菜单和自动重定向使用每个页面上的 `hreflang` 链接。

## 拉取请求检查清单

- [ ] `npm test` 通过。
- [ ] 每个修改的回答都附有证据链接。
- [ ] 如果您受雇于所修改的服务或与其有关联，已在拉取请求中说明。

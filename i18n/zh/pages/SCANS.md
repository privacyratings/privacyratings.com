<!-- source: 16559ce369ce -->
# 自动测试

当托管服务（`type: service` 的类别）的评级文件中含有 `domain` 时，会自动接受测试。含有 `mail_domain` 的电子邮件服务商和转发服务还会接受电子邮件测试。

| 测试 | 检查内容 | 标准 | 是 | 部分 | 否 |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | TLS 版本、加密套件、证书和已知的 TLS 漏洞 | `tls` | A+ 或 A | A- 或 B | C 或更低 |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | CSP、HSTS 和 X-Frame-Options 等安全标头，以及 Cookie 标志 | `security_headers` | A+ 或 A | A-、B+ 或 B | B- 或更低 |
| [Internet.nl 网站测试](https://internet.nl/test-site/) | IPv6、DNSSEC、HTTPS 和安全选项 | `web_standards` | 90% 或更高 | 70% 到 89% | 低于 70% |
| [Internet.nl 电子邮件测试](https://internet.nl/test-mail/) | 邮件域名的 IPv6、DNSSEC、DMARC、DKIM、SPF、STARTTLS 和 DANE | `mail_standards` | 90% 或更高 | 70% 到 89% | 低于 70% |
| [Hardenize](https://www.hardenize.com) | DNS、电子邮件和网页安全配置 | 仅提供链接 | | | |

## 电子邮件标准

含有 `mail_domain` 的电子邮件服务商和转发服务还会接受以下测试，由 [`scripts/mail-tests.js`](scripts/mail-tests.js) 运行：

| 测试 | 检查内容 | 标准 | 是 |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF、DMARC 策略、MTA-STS 模式（RFC 8461）、TLS-RPT（RFC 8460）、DNSSEC 验证、每个 MX 主机上的 DANE TLSA（RFC 7672），另外还有仅供参考的 BIMI 和 RFC 6186 SRV 记录 | `transport_security` | 六项全部强制执行 |
| IMAP `CAPABILITY` | 993 端口隐式 TLS（RFC 8314）、IMAP4rev1 或 IMAP4rev2、IDLE。回退到 143 端口的 STARTTLS | `imap_standards` | 隐式 TLS、IMAP4rev1/rev2 和 IDLE |
| POP3 `CAPA` | 995 端口隐式 TLS、CAPA（RFC 2449）、UIDL。回退到 110 端口的 STLS | `pop3_standards` | 隐式 TLS、CAPA 和 UIDL |
| SMTP `EHLO` | 465 端口隐式 TLS 提交、SMTPUTF8、8BITMIME、PIPELINING、AUTH。回退到 587 端口的 STARTTLS | `smtp_standards` | 隐式 TLS 和全部四个扩展 |

服务器名称来自评级文件中的 `imap_host`、`pop3_host` 和 `smtp_host`，或来自服务商的 RFC 6186 SRV 记录。如果服务商不提供某个协议，请将对应主机设为 `false`。功能是指各服务器在登录前公布的能力，完整列表显示在各评级页面上。

## 网站跟踪器

每个有网站的条目（包括应用）都会接受由 [`scripts/trackers.js`](scripts/trackers.js) 运行的跟踪器测试。它在不运行 JavaScript 的情况下加载首页，将每个脚本、框架、图片和样式表的主机以及内联代码，与已知跟踪和统计分析服务的列表进行比对。

| 发现 | 对 `no_trackers` 的影响 |
| --- | --- |
| Google Analytics、Google Tag Manager、Meta Pixel、Hotjar 或 HubSpot 等第三方跟踪器 | 无论评级文件如何填写，回答都变为“否” |
| 无 Cookie 的统计分析（Plausible、Fathom、Simple Analytics、Matomo Cloud、Cloudflare Web Analytics） | “是”变为“部分” |
| 字体、嵌入内容、错误报告、客服聊天或同意管理工具 | 在页面上列出，不计分 |
| 未发现 | 使用评级文件中的回答 |

当网站是代码托管平台或应用商店页面（GitHub、GitLab、Codeberg、SourceForge、F-Droid、Google Play 等）时，会跳过测试，因为该页面并非由项目运营。

该测试只能发现写在页面本身中的跟踪器。之后由脚本添加的跟踪器以及应用内的遥测，仍需要在评级文件中提供证据，例如隐私政策或 [Exodus Privacy](https://reports.exodus-privacy.eu.org) 报告。

如果不发送邮件，就无法从外部看到 SRS 和 ARC，因此它们是以证据回答的标准，而不是测试。

尚未运行的自动检查显示为“尚未测试”，不计入分数，因此服务商永远不会因为尚未进行的测试而被扣分。

对于 SSL Labs，采用域名所有 IP 地址中最低的等级。

Hardenize 已不再提供公开 API，因此各页面只链接到其公开报告，而不据此评分。

## 时间安排

[Scan 工作流](.github/workflows/scan.yml)每天运行，测试结果最旧的 40 个条目（Internet.nl 遵循其自身的限制，见下文），这样每项服务都能定期接受测试，又不会让免费 API 负载过重。结果以 JSON 格式保存到 [`scans/`](scans/)，提交到仓库并随网站发布。每个页面都会显示其测试的最近运行时间。

测试失败时会保留之前的结果并记录错误，因此临时故障不会改变分数。

### Internet.nl 限制

Internet.nl 批量 API 的使用遵守其[使用条款](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md)：

- 任意 7 天内最多 2 个批量请求。网站测试和电子邮件测试是两个独立的请求，因此完整的一轮会用掉这两个请求。
- 每个请求最多 5000 个域名。当需要此测试的域名更多时，缺少结果或结果最旧的域名优先，其余的等待之后的请求。
- 不发送单个域名的请求，因此 `--only` 会跳过 Internet.nl。

每个请求都记录在 `scans/internetnl-requests.json` 中，即使运行失败，该文件也会与结果一起提交。发现已达到每周限制的运行会跳过 Internet.nl 并保留现有结果。批量处理需要数小时，因此每 5 分钟检查一次请求状态；运行结束时仍在进行的请求由之后的运行获取结果，而不是重新发送。Internet.nl 忽略 `--limit`，并且只有默认分支上的运行才使用 Internet.nl 凭据，因此所有运行共享同一份记录。

本网站重复使用由 [Internet.nl](https://internet.nl) 测试工具提供的测试结果。

## 配置

所有设置都是可选的仓库机密（Settings › Secrets and variables › Actions）：

| 机密 | 用途 |
| --- | --- |
| `SSLLABS_EMAIL` | 在 [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md) 注册的电子邮件地址。未设置时使用 v3 API。注册需要机构电子邮件地址。 |
| `INTERNETNL_USERNAME`、`INTERNETNL_PASSWORD` | [Internet.nl 批量 API](https://internet.nl/faqs/batch-and-dashboard/) 的账户。未设置时，页面链接到公开的 Internet.nl 测试，Internet.nl 相关标准保持“未知”。 |
| `INTERNETNL_API` | 批量 API 的基础 URL，用于[自托管的 Internet.nl](https://github.com/internetstandards/Internet.nl) 实例。默认为 `https://batch.internet.nl/api/batch/v2`。 |

Mozilla HTTP Observatory 无需账户。GitHub 许可证数据使用工作流内置的令牌。

## 在本地运行测试

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## 测试哪个域名

`domain` 字段应为人们登录的主网站或 Web 应用，例如 `mail.example.com`，而不是位于其他主机上的营销子域名。厂商可以在拉取请求中建议更准确的域名。

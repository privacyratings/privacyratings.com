<!-- source: 2f40b8f7e8ef -->
# 什么是 CLOUD Act？

**《澄清境外数据合法使用法》（Clarifying Lawful Overseas Use of Data Act，简称 CLOUD Act）** 是一部美国法律，它回答了一个问题：当美国公司的数据存储在其他国家时，美国当局能否获取这些数据？答案是可以。

## 它的作用

1. **位置无关紧要。** 受美国管辖的服务商，在收到有效的美国法律程序时，必须交出其“占有、保管或控制”的数据，无论数据存储在世界何处。[来源：美国司法部](https://www.justice.gov/criminal/cloud-act-resources)
2. **与其他国家的协议。** 美国可以签订数据访问协议，让受信任的外国政府就严重犯罪直接向美国服务商调取数据，而无需经过较慢的司法协助条约（MLAT）程序。[来源：美国司法部](https://www.justice.gov/criminal/cloud-act-resources)
3. **提出异议的途径。** 当请求与另一个已签订协议的国家的法律相冲突时，服务商可以请求法院撤销或修改该请求。

与**英国**和**澳大利亚**的协议已生效。与**加拿大**和**欧盟**的谈判已经宣布。[来源：美国司法部](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## 它不做什么

- 它不会创设新的监控权力，也不会取消对令状的要求。美国当局仍然需要有效的法律程序，获取通信内容通常需要搜查令。
- 它不会强制服务商解密其无法解密的数据。它涵盖的是服务商持有的数据。使用只有用户持有的密钥加密的数据仍保持加密状态。
- 它并非只适用于美国的数据中心。如果运营服务器的公司受美国管辖，选择欧洲的服务器位置也无济于事。

## 它影响谁

所有受美国管辖的公司：Google、Microsoft、Apple、Amazon、Cloudflare，以及规模较小的美国服务，包括 Forward Email。请参阅[总部位于美国的所有已评级服务](/jurisdictions/united-states/)。

它还可能影响**将数据存储在美国云服务商处的非美国服务**，因为云服务商本身就可能收到请求。因此，真正有用的问题不仅是“公司在哪里？”，还有“存在哪些数据，由谁持有密钥？”

## 为什么加密和数据最小化比位置更重要

法律会变化，每个国家都有强制获取数据的手段。最重要的是服务商**能够**交出什么：

| 情形 | 请求能获取的内容 |
| --- | --- |
| 以明文存储的邮件 | 邮箱中的一切 |
| 静态存储时使用服务商持有的密钥加密的邮件 | 一切，因为服务商可以解密 |
| 使用由用户密码派生的密钥加密的邮件 | 账户信息和连接数据，而非邮件内容 |
| 不保留日志 | 没有任何活动信息 |

真实案例：

- **Proton（瑞士，不属于任何情报联盟）** 在其最新的年度报告中，遵从了 9,301 份瑞士法律命令中的 8,313 份，提供了其持有的账户信息。[来源：Proton 透明度报告](https://proton.me/legal/transparency)
- **Proton VPN（同一家公司，同一个国家）** 一份也没有遵从，因为它不保留日志。[来源：Proton 透明度报告](https://proton.me/legal/transparency)
- **Tuta（德国）** 可能被德国法官命令交出邮箱或对其进行实时监控。端到端加密的邮件仍保持加密状态。[来源：Tuta 透明度报告](https://tuta.com/blog/transparency-report)

同一国家的同一家公司，结果却因存在哪些数据而大不相同。这就是 Privacy Ratings 在每个页面上显示司法管辖区、却对服务商实际做法评分的原因。请参阅[司法管辖区的处理方式](/jurisdictions/)。

## CLOUD Act 如何适用于 Forward Email

Forward Email 总部位于美国，受 CLOUD Act 约束。其[技术白皮书](https://forwardemail.net/technical-whitepaper.pdf)描述了其设计如何限制请求所能获取的内容：

- **加密邮箱。** 每个邮箱都是一个单独加密的 SQLite 文件。白皮书称 Forward Email 无法访问邮件内容。
- **不将电子邮件内容或元数据记录到磁盘。** Forward Email 不保留用户与谁通信的记录。
- **有限的数据。** 可能被披露的是基本账户信息（如账户电子邮件地址、注册日期和付款信息），以及出于安全和防止滥用目的可能临时保留的有限 IP 地址日志。
- **仅限有效的法律程序。** 请求需要传票、法院命令或搜查令。来自美国境外的请求必须通过美国法院、司法协助条约或符合美国法律要求的 CLOUD Act 协议提出。
- **通知和异议。** 在法律允许时通知用户，并对范围过宽的请求提出异议。

Forward Email 维护着 Privacy Ratings。它的评级与其他所有服务商使用相同的标准。请参阅 [Forward Email 的评级](/email-providers/forward-email/)和[治理规则](/governance/)。

## 延伸阅读

- [美国司法部：CLOUD Act 资源](https://www.justice.gov/criminal/cloud-act-resources)
- [美国国会研究服务处：CLOUD Act 下的跨境数据共享](https://www.congress.gov/crs-product/R45173)
- [EFF：第 702 条监控](https://www.eff.org/702-spying)
- [EFF：国家安全信函](https://www.eff.org/issues/national-security-letters)

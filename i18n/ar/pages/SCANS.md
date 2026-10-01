<!-- source: 16559ce369ce -->
# الاختبارات الآلية

تُختبر الخدمات المستضافة (الفئات التي فيها `type: service`) تلقائيًا عندما يحتوي ملف تقييمها على `domain`. وتخضع خدمات البريد الإلكتروني وإعادة التوجيه التي لديها `mail_domain` لاختبار بريد إلكتروني أيضًا.

| الاختبار | ما يفحصه | المعيار | نعم | جزئي | لا |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | إصدارات TLS، وخوارزميات التشفير، والشهادات، وثغرات TLS المعروفة | `tls` | A+ أو A | A- أو B | C أو أقل |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | ترويسات الأمان مثل CSP وHSTS وX-Frame-Options، وخصائص ملفات تعريف الارتباط | `security_headers` | A+ أو A | A- أو B+ أو B | B- أو أقل |
| [اختبار المواقع من Internet.nl](https://internet.nl/test-site/) | IPv6 وDNSSEC وHTTPS وخيارات الأمان | `web_standards` | 90% أو أكثر | من 70% إلى 89% | أقل من 70% |
| [اختبار البريد الإلكتروني من Internet.nl](https://internet.nl/test-mail/) | IPv6 وDNSSEC وDMARC وDKIM وSPF وSTARTTLS وDANE لنطاق البريد | `mail_standards` | 90% أو أكثر | من 70% إلى 89% | أقل من 70% |
| [Hardenize](https://www.hardenize.com) | إعدادات أمان DNS والبريد الإلكتروني والويب | رابط فقط | | | |

## معايير البريد الإلكتروني

تخضع خدمات البريد الإلكتروني وإعادة التوجيه التي لديها `mail_domain` لهذه الاختبارات أيضًا، ويشغّلها [`scripts/mail-tests.js`](scripts/mail-tests.js):

| الاختبار | ما يفحصه | المعيار | نعم |
| --- | --- | --- | --- |
| DNS عبر HTTPS | SPF، وسياسة DMARC، ووضع MTA-STS (RFC 8461)، وTLS-RPT (RFC 8460)، والتحقق من DNSSEC، وDANE TLSA على كل مضيف MX (RFC 7672)، إضافة إلى BIMI وسجلات SRV وفق RFC 6186 للعلم | `transport_security` | الستة كلها مطبّقة |
| IMAP `CAPABILITY` | TLS ضمني على 993 (RFC 8314)، وIMAP4rev1 أو IMAP4rev2، وIDLE. ويلجأ إلى STARTTLS على 143 كبديل | `imap_standards` | TLS ضمني وIMAP4rev1/rev2 وIDLE |
| POP3 `CAPA` | TLS ضمني على 995، وCAPA (RFC 2449)، وUIDL. ويلجأ إلى STLS على 110 كبديل | `pop3_standards` | TLS ضمني وCAPA وUIDL |
| SMTP `EHLO` | الإرسال عبر TLS ضمني على 465، وSMTPUTF8، و8BITMIME، وPIPELINING، وAUTH. ويلجأ إلى STARTTLS على 587 كبديل | `smtp_standards` | TLS ضمني والامتدادات الأربعة كلها |

تأتي أسماء الخوادم من `imap_host` و`pop3_host` و`smtp_host` في ملف التقييم، أو من سجلات SRV الخاصة بالمزوّد وفق RFC 6186. اضبط المضيف على `false` عندما لا يوفر المزوّد ذلك البروتوكول. والقدرات هي ما يعلنه كل خادم قبل تسجيل الدخول، وتُعرض القوائم الكاملة في كل صفحة تقييم.

## أدوات التتبع في المواقع

كل عنصر له موقع إلكتروني، بما في ذلك التطبيقات، يخضع لاختبار أدوات تتبع يشغّله [`scripts/trackers.js`](scripts/trackers.js). ويحمّل الاختبار الصفحة الرئيسية دون تشغيل JavaScript ويقارن مضيف كل نص برمجي وإطار وصورة وورقة أنماط، إضافة إلى الشيفرة المضمّنة، بقائمة من خدمات التتبع والتحليلات المعروفة.

| ما يُعثر عليه | الأثر على `no_trackers` |
| --- | --- |
| أدوات تتبع تابعة لجهات خارجية مثل Google Analytics أو Google Tag Manager أو Meta Pixel أو Hotjar أو HubSpot | تصبح الإجابة "لا"، أيًّا كان ما يقوله ملف التقييم |
| تحليلات بلا ملفات تعريف ارتباط (Plausible وFathom وSimple Analytics وMatomo Cloud وCloudflare Web Analytics) | تصبح "نعم" "جزئي" |
| الخطوط، أو المحتوى المضمّن، أو الإبلاغ عن الأخطاء، أو دردشة الدعم، أو أدوات الموافقة | تُسرد في الصفحة، ولا تُحتسب |
| لا شيء | تُستخدم الإجابة الواردة في ملف التقييم |

عندما يكون الموقع صفحة على منصة استضافة شيفرة أو متجر تطبيقات (GitHub وGitLab وCodeberg وSourceForge وF-Droid وGoogle Play وما شابهها)، يُتخطى الاختبار، لأن تلك الصفحة لا يديرها المشروع.

لا يرى الاختبار إلا أدوات التتبع المكتوبة في الصفحة نفسها. أما أدوات التتبع التي تضيفها النصوص البرمجية لاحقًا، والقياس عن بُعد داخل التطبيقات، فما زالت تحتاج إلى أدلة في ملف التقييم، مثل سياسة خصوصية أو تقرير من [Exodus Privacy](https://reports.exodus-privacy.eu.org).

لا يمكن رؤية SRS وARC من الخارج دون إرسال بريد، لذا فهي معايير يُجاب عنها بالأدلة بدلًا من الاختبارات.

تظهر الفحوص الآلية التي لم تُشغَّل بعد بعبارة "لم يُختبر بعد" وتُستبعد من النتيجة، فلا يُخصم من المزوّد أبدًا بسبب اختبار لم يُجرَ.

في SSL Labs، يُستخدم أضعف تقدير بين جميع عناوين IP الخاصة بالنطاق.

لم تعد Hardenize توفر API عامة، لذا ترتبط كل صفحة بتقريرها العام بدلًا من احتسابه.

## الجدول الزمني

يعمل [سير عمل Scan](.github/workflows/scan.yml) كل يوم ويختبر 40 عنصرًا ذات أقدم النتائج (يتبع Internet.nl حدوده الخاصة، انظر أدناه)، فتُختبر كل خدمة بانتظام دون إثقال واجهات API المجانية. وتُحفظ النتائج في [`scans/`](scans/) بصيغة JSON، وتُودَع في المستودع وتُنشر مع الموقع. وتعرض كل صفحة متى أُجريت اختباراتها آخر مرة.

يحتفظ الاختبار الفاشل بالنتيجة السابقة ويسجّل الخطأ، فلا يغيّر انقطاع مؤقت النتيجة.

### حدود Internet.nl

تُستخدم واجهة Internet.nl البرمجية للدفعات ضمن [شروط الاستخدام](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md) الخاصة بها:

- طلبا دفعة كحد أقصى في أي 7 أيام. اختبار الموقع واختبار البريد الإلكتروني طلبان منفصلان، لذا تستهلك الجولة الكاملة الواحدة كليهما.
- 5000 نطاق كحد أقصى في كل طلب. عندما يخضع للاختبار عدد أكبر من النطاقات، تُقدَّم النطاقات التي لا نتائج لها أو ذات أقدم النتائج، وتنتظر البقية طلبًا لاحقًا.
- لا طلبات لنطاق واحد، لذا يتخطى `--only` اختبار Internet.nl.

يُسجَّل كل طلب في `scans/internetnl-requests.json`، ويُودَع هذا الملف مع النتائج حتى عند فشل التشغيل. والتشغيل الذي يجد أن الحد الأسبوعي قد بُلغ يتخطى Internet.nl ويحتفظ بالنتائج الحالية. تستغرق الدفعات ساعات، لذا تُفحص حالة الطلب كل 5 دقائق، والطلب الذي لا يزال قيد التنفيذ عند انتهاء التشغيل يجمعه تشغيل لاحق بدلًا من إرساله مرة أخرى. يتجاهل Internet.nl الخيار `--limit`، ولا تستخدم بيانات اعتماد Internet.nl إلا عمليات التشغيل على الفرع الافتراضي، لذا تشترك كل عمليات التشغيل في سجل واحد.

يعيد هذا الموقع استخدام نتائج الاختبارات التي توفرها أداة الاختبار [Internet.nl](https://internet.nl).

## الإعدادات

كل الإعدادات أسرار مستودع اختيارية (Settings › Secrets and variables › Actions):

| السر | الغرض |
| --- | --- |
| `SSLLABS_EMAIL` | البريد الإلكتروني المسجّل في [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). ودونه تُستخدم واجهة v3. ويحتاج التسجيل إلى عنوان بريد إلكتروني تابع لمؤسسة. |
| `INTERNETNL_USERNAME`، `INTERNETNL_PASSWORD` | حساب في [Internet.nl batch API](https://internet.nl/faqs/batch-and-dashboard/). ودونهما ترتبط الصفحات باختبارات Internet.nl العامة وتبقى معايير Internet.nl "غير معروف". |
| `INTERNETNL_API` | عنوان URL الأساسي لـ Batch API، لنسخة [Internet.nl مستضافة ذاتيًا](https://github.com/internetstandards/Internet.nl). والقيمة الافتراضية `https://batch.internet.nl/api/batch/v2`. |

لا يحتاج Mozilla HTTP Observatory إلى حساب. وتستخدم بيانات التراخيص من GitHub الرمز المدمج في سير العمل.

## تشغيل الاختبارات محليًا

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## أي نطاق يُختبر

يجب أن يكون الحقل `domain` هو الموقع الرئيسي أو تطبيق الويب الذي يسجّل فيه الناس الدخول، مثل `mail.example.com` بدلًا من نطاق فرعي تسويقي على مضيف مختلف. ويمكن للشركات اقتراح نطاق أدق في طلب سحب.

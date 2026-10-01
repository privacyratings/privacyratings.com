<!-- source: f2ab6af4acf3 -->
# المساهمة

تجري المساهمات على GitHub، دون منتدى أو دردشة أو حساب آخر للتسجيل فيه.

| لفعل هذا | استخدم |
| --- | --- |
| اقتراح تطبيق أو خدمة | [افتح مشكلة من نوع "Suggest"](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| الإبلاغ عن إجابة خاطئة أو رابط معطّل | [افتح مشكلة من نوع "Correction"](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml)، أو استخدم "الإبلاغ عن تصحيح" في أي صفحة تقييم |
| اقتراح معايير أو تغييرها | [افتح مشكلة من نوع "Criteria change"](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| الإصلاح بنفسك | استخدم "التعديل على GitHub" في أي صفحة تقييم، أو افتح طلب سحب |
| طرح سؤال أو مناقشة اختيار | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## تعديل تقييم

كل تطبيق أو خدمة ملف Markdown واحد في `ratings/<category>/<name>.md`. وأعلى الملف بصيغة YAML. وأي شيء أسفله ملاحظات Markdown اختيارية تُعرض في الصفحة.

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

يفحص `npm test` هذه القواعد:

- تكون قيمة `answer` واحدة من `yes` أو `partial` أو `no` أو `unknown` أو `n/a`.
- تحتاج `yes` و`partial` إلى رابط `evidence`. وتحتاج `no` إلى `note` أو `evidence`.
- يجب أن يكون الدليل مصدرًا أوليًا: توثيقًا رسميًا، أو شيفرة مصدرية، أو ملف ترخيص، أو تقرير تدقيق، أو اختبارًا قابلًا للتكرار. ولا تُحتسب المراجعات ومنشورات المنتديات والصفحات التسويقية الخالية من التفاصيل.
- يجب أن تبدأ الروابط بـ `https://` وألا تحتوي على معاملات إحالة أو تتبع.
- تملأ الاختبارات الآلية معاييرها (`tls` و`security_headers` و`web_standards` و`mail_standards` و`imap_standards` و`pop3_standards` و`smtp_standards` و`transport_security`). لا تضبطها يدويًا.
- يفحص [اختبار أدوات التتبع](SCANS.md#website-trackers) أيضًا `no_trackers`. فإذا حمّلت الصفحة الرئيسية أداة تتبع تابعة لجهة خارجية، تصبح الإجابة "لا" أيًّا كان ما يقوله الملف.
- أغفل أي معيار ليس له دليل بعد. فهو يُحتسب `unknown`.
- `jurisdiction` هي المكان الذي يقع فيه المقر القانوني للشركة (لا مكان خوادمها). أضف الدولة إلى [`jurisdictions.yml`](jurisdictions.yml) إذا كانت غير موجودة. وكل ملاحظة هناك تحتاج إلى مصدر.
- لا يضيف `pick` و`pick_reason` و`disclosure` إلا القائمون على المشروع. استخدم `pick: 1` و`pick: 2` لترتيب اختيارين. راجع [GOVERNANCE.md](GOVERNANCE.md).
- يحتفظ `imported_name` بالاسم الذي كان للعنصر في Awesome Privacy بعد إعادة تسميته، حتى لا يضيفه الاستيراد الشهري مرة أخرى. ولاستبعاد عنصر من Awesome Privacy نهائيًا، أضفه إلى [`import-skip.yml`](import-skip.yml) مع ذكر السبب.

معايير كل فئة، ومعنى كل إجابة، موجودة في [`criteria/`](criteria/) وفي [صفحة المعايير](https://privacyratings.com/criteria/).

## إضافة تطبيق أو خدمة

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

يُنشئ هذا ملفًا يسرد كل معيار بقيمة `unknown`. املأ ما تستطيع إثباته، واحذف الباقي، ثم شغّل `npm test`.

## أسلوب الكتابة

- لغة بسيطة ومحايدة. صف ما يفعله الشيء دون مدحه.
- جمل قصيرة. وتبقى الأوصاف أقل من 300 حرف.
- لا صيغة المتكلم، ولا تواريخ في النص، ولا ادعاءات تسويقية.
- سمِّ الأشياء كما تسميها الشركة.

## تشغيل الموقع محليًا

يتطلب Node.js 18 أو أحدث.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## إضافة صفحة

ضع ملف Markdown يحتوي على `title` و`description` في [`pages/`](pages/). وتنشره عملية البناء في `/<file-name>/` مع نسخة Markdown وبيانات منظّمة وإدخال في خريطة الموقع.

## إضافة فئة أو معيار

1. أضف الفئة إلى [`categories.yml`](categories.yml) ضمن المجموعة المناسبة.
2. اختياريًا، أضف `criteria/<category-id>.yml` بمعايير خاصة بالفئة. انسخ التنسيق من ملف موجود.
3. أنشئ `ratings/<category-id>/` وأضف العناصر.
4. تتبع تغييرات المعايير قواعد المراجعة في [GOVERNANCE.md](GOVERNANCE.md).

## الترجمات

يُنشر الموقع بـ 25 لغة. الإنجليزية هي المصدر، وكل لغة أخرى موجودة في `i18n/<code>/`:

| الملف | المحتوى |
| --- | --- |
| `ui.json` | نصوص الواجهة: العناوين والأزرار والجمل التي تحتوي على `{placeholders}` |
| `data.json` | أسماء الفئات والمعايير والأدلة وملاحظات الدول |
| `entries.json` | أوصاف التقييمات وأسباب الاختيار والإفصاحات |
| `pages/*.md` | مستندات كاملة مثل هذا المستند |

يربط كل ملف JSON النص الإنجليزي بترجمته. عندما يتغير النص الإنجليزي، لا تعود الترجمة القديمة مطابقة له، فيعرض الموقع النص الإنجليزي إلى أن يترجم أحدٌ النص الجديد، ولا يعرض أبدًا ترجمة قديمة.

1. شغّل `npm run build`. يكتب هذا الأمر القوائم الإنجليزية الحالية في `i18n/source/`.
2. شغّل `npm run i18n:check` لمعرفة ما ينقص في كل لغة، أو `node scripts/i18n-check.js de ui` لعرض تفاصيل لغة واحدة وملف واحد.
3. أضف الترجمات أو صحّحها، مع إبقاء كل `{placeholder}` كما هو تمامًا.
4. بالنسبة إلى المستند، انسخ النص الإنجليزي من `i18n/source/pages/`، وأبقِ سطره الأول (`<!-- source: … -->`، الذي يربط الترجمة بتلك النسخة من النص الإنجليزي)، وترجم الباقي.

تبقى الملاحظات والأدلة الخاصة بكل إجابة باللغة الإنجليزية. المقارنات ومعظم التقييمات الفردية متاحة بالإنجليزية فقط؛ أما الاختيارات والفئات والأدلة والبدائل وقوائم البرمجيات مفتوحة المصدر والولايات القضائية والمستندات فتُترجم. تستخدم قائمة اللغات وإعادة التوجيه التلقائية روابط `hreflang` في كل صفحة.

## قائمة التحقق لطلب السحب

- [ ] يجتاز `npm test`.
- [ ] كل إجابة متغيرة ترتبط بدليل.
- [ ] إذا كنت تعمل لدى خدمة عدّلتها أو كانت لك صلة بها، فقد ذكرت ذلك في طلب السحب.

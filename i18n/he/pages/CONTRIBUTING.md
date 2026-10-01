<!-- source: 38b6fc4b567c -->
# השתתפות

הכול קורה ב־GitHub. אין פורום, צ׳אט או חשבון אחר שצריך להירשם אליו.

| כדי לעשות את זה | השתמשו ב־ |
| --- | --- |
| להציע אפליקציה או שירות | [פתחו Issue מסוג "Suggest"](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| לדווח על תשובה שגויה או קישור שבור | [פתחו Issue מסוג "Correction"](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), או השתמשו ב"דיווח על תיקון" בכל דף דירוג |
| להציע או לשנות קריטריונים | [פתחו Issue מסוג "Criteria change"](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| לתקן בעצמכם | השתמשו ב"עריכה ב־GitHub" בכל דף דירוג, או פתחו בקשת משיכה |
| לשאול שאלה או לדון בבחירה | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## עריכת דירוג

כל אפליקציה או שירות הם קובץ Markdown אחד ב־`ratings/<category>/<name>.md`. החלק העליון של הקובץ הוא YAML. כל מה שמתחתיו הוא הערות Markdown אופציונליות שמוצגות בדף.

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

כללים (נבדקים אוטומטית על ידי `npm test`):

- `answer` הוא אחד מהערכים `yes`,‏ `partial`,‏ `no`,‏ `unknown` או `n/a`.
- `yes` ו־`partial` דורשים קישור `evidence`. ‏`no` דורש `note` או `evidence`.
- הראיות חייבות להיות ממקור ראשוני: תיעוד רשמי, קוד מקור, קובץ רישיון, דוח ביקורת או בדיקה שניתן לשחזר. לא סקירות, פוסטים בפורומים או דפי שיווק ללא פירוט.
- קישורים חייבים להתחיל ב־`https://` ואסור שיכילו פרמטרים של הפניה או מעקב.
- קריטריונים אוטומטיים (`tls`,‏ `security_headers`,‏ `web_standards`,‏ `mail_standards`,‏ `imap_standards`,‏ `pop3_standards`,‏ `smtp_standards`,‏ `transport_security`) ממולאים על ידי הבדיקות. אין להגדיר אותם ידנית.
- `no_trackers` נבדק גם על ידי [בדיקת רכיבי המעקב](SCANS.md#website-trackers). אם דף הבית טוען רכיב מעקב של צד שלישי, התשובה הופכת ל"לא" בלי קשר למה שכתוב בקובץ.
- השמיטו כל קריטריון שעדיין אין לו ראיות. הוא נחשב `unknown`.
- `jurisdiction` הוא המקום שבו החברה רשומה מבחינה משפטית (לא המקום שבו נמצאים השרתים שלה). אם מדינה חסרה, הוסיפו אותה ל־[`jurisdictions.yml`](jurisdictions.yml). כל הערה שם צריכה מקור.
- רק מתחזקים מוסיפים `pick`,‏ `pick_reason` ו־`disclosure`. השתמשו ב־`pick: 1` וב־`pick: 2` כדי לסדר שתי בחירות. ראו [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` שומר את השם שהיה לרשומה ב־Awesome Privacy אחרי ששמה שונה, כדי שהייבוא החודשי לא יוסיף אותה שוב. כדי להשמיט רשומה של Awesome Privacy לצמיתות, הוסיפו אותה ל־[`import-skip.yml`](import-skip.yml) עם סיבה.

הקריטריונים לכל קטגוריה, ומה המשמעות של כל תשובה, נמצאים ב־[`criteria/`](criteria/) וב־[דף הקריטריונים](https://privacyratings.com/criteria/).

## הוספת אפליקציה או שירות

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

הפקודה יוצרת קובץ שמפרט כל קריטריון כ־`unknown`. מלאו את מה שאתם יכולים להוכיח, מחקו את השאר, ואז הריצו `npm test`.

## סגנון כתיבה

- שפה פשוטה וניטרלית. תארו מה משהו עושה, לא כמה הוא נהדר.
- משפטים קצרים. תיאורים נשארים מתחת ל־300 תווים.
- ללא גוף ראשון, ללא תאריכים בטקסט, ללא טענות שיווקיות.
- קראו לדברים בשם שהספק משתמש בו.

## הרצת האתר באופן מקומי

דורש Node.js 18 ומעלה.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## הוספת דף

שימו קובץ Markdown עם `title` ו־`description` ב־[`pages/`](pages/). הוא מתפרסם בכתובת `/<file-name>/` עם עותק Markdown, נתונים מובנים ורשומה במפת האתר.

## הוספת קטגוריה או קריטריון

1. הוסיפו את הקטגוריה ל־[`categories.yml`](categories.yml) תחת הקבוצה המתאימה.
2. אפשר להוסיף `criteria/<category-id>.yml` עם קריטריונים ייחודיים לקטגוריה. העתיקו את הפורמט מקובץ קיים.
3. צרו את `ratings/<category-id>/` והוסיפו רשומות.
4. שינויי קריטריונים פועלים לפי כללי הסקירה ב־[GOVERNANCE.md](GOVERNANCE.md).

## תרגומים

האתר מתפרסם ב־25 שפות. אנגלית היא שפת המקור, וכל שפה אחרת נמצאת ב־`i18n/<code>/`:

| קובץ | תוכן |
| --- | --- |
| `ui.json` | טקסט הממשק: כותרות, כפתורים ומשפטים עם `{placeholders}` |
| `data.json` | שמות קטגוריות, קריטריונים, מדריכים והערות על מדינות |
| `entries.json` | תיאורי דירוגים, נימוקי בחירה וגילויים |
| `pages/*.md` | מסמכים שלמים כמו זה |

כל קובץ JSON ממפה את הטקסט האנגלי לתרגום שלו. כשהטקסט האנגלי משתנה, התרגום הישן כבר לא תואם, ולכן מוצג הטקסט האנגלי עד שמישהו מתרגם את הטקסט החדש. תוכן לא מעודכן אף פעם לא מוצג.

1. הריצו `npm run build`. הפקודה כותבת את הרשימות האנגליות העדכניות ל־`i18n/source/`.
2. הריצו `npm run i18n:check` כדי לראות מה חסר בכל שפה, או `node scripts/i18n-check.js de ui` לפרטים על שפה וקובץ מסוימים.
3. הוסיפו או תקנו תרגומים, ושמרו כל `{placeholder}` בדיוק כפי שהוא.
4. עבור מסמך, העתיקו את הטקסט האנגלי מ־`i18n/source/pages/`, שמרו את השורה הראשונה שלו (`<!-- source: … -->`, שמקשרת את התרגום לגרסה זו של הטקסט האנגלי), ותרגמו את השאר.

הערות וראיות לכל תשובה נשארות באנגלית. השוואות ורוב הדירוגים הבודדים זמינים באנגלית בלבד; הבחירות, הקטגוריות, המדריכים, החלופות, רשימות הקוד הפתוח, תחומי השיפוט והמסמכים מתורגמים. תפריט השפות וההפניה האוטומטית משתמשים בקישורי `hreflang` שבכל דף.

## רשימת בדיקה לבקשת משיכה

- [ ] `npm test` עובר.
- [ ] כל תשובה שהשתנתה מקושרת לראיות.
- [ ] אם אתם עובדים בשירות ששיניתם או קשורים אליו, ציינתם זאת בבקשת המשיכה.

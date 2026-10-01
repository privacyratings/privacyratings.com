<!-- source: 16559ce369ce -->
# בדיקות אוטומטיות

שירותים מאוחסנים (קטגוריות עם `type: service`) נבדקים אוטומטית כשבקובץ הדירוג שלהם יש `domain`. ספקי דוא״ל ושירותי העברת דואר עם `mail_domain` עוברים גם בדיקת דוא״ל.

| בדיקה | מה היא בודקת | קריטריון | כן | חלקי | לא |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | גרסאות TLS, צפנים, תעודות ופגמי TLS ידועים | `tls` | A+ או A | A- או B | C ומטה |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | כותרות אבטחה כמו CSP,‏ HSTS ו־X-Frame-Options, ודגלי עוגיות | `security_headers` | A+ או A | A-,‏ B+ או B | B- ומטה |
| [בדיקת האתרים של Internet.nl](https://internet.nl/test-site/) | IPv6,‏ DNSSEC,‏ HTTPS ואפשרויות אבטחה | `web_standards` | 90% ומעלה | 70% עד 89% | מתחת ל־70% |
| [בדיקת הדוא״ל של Internet.nl](https://internet.nl/test-mail/) | IPv6,‏ DNSSEC,‏ DMARC,‏ DKIM,‏ SPF,‏ STARTTLS ו־DANE לדומיין הדואר | `mail_standards` | 90% ומעלה | 70% עד 89% | מתחת ל־70% |
| [Hardenize](https://www.hardenize.com) | תצורת אבטחה של DNS, דוא״ל ורשת | קישור בלבד | | | |

## תקני דוא״ל

ספקי דוא״ל ושירותי העברת דואר עם `mail_domain` עוברים גם את הבדיקות האלה, שמורצות על ידי [`scripts/mail-tests.js`](scripts/mail-tests.js):

| בדיקה | מה היא בודקת | קריטריון | כן |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, מדיניות DMARC, מצב MTA-STS ‏(RFC 8461),‏ TLS-RPT ‏(RFC 8460), אימות DNSSEC,‏ DANE TLSA בכל שרת MX ‏(RFC 7672), וגם BIMI ורשומות SRV לפי RFC 6186 לצורך מידע | `transport_security` | כל השישה נאכפים |
| IMAP `CAPABILITY` | TLS מרומז בפורט 993 ‏(RFC 8314),‏ IMAP4rev1 או IMAP4rev2,‏ IDLE. חוזר ל־STARTTLS בפורט 143 | `imap_standards` | TLS מרומז, IMAP4rev1/rev2 ו־IDLE |
| POP3 `CAPA` | TLS מרומז בפורט 995,‏ CAPA ‏(RFC 2449),‏ UIDL. חוזר ל־STLS בפורט 110 | `pop3_standards` | TLS מרומז, CAPA ו־UIDL |
| SMTP `EHLO` | שליחה דרך TLS מרומז בפורט 465,‏ SMTPUTF8,‏ 8BITMIME,‏ PIPELINING,‏ AUTH. חוזר ל־STARTTLS בפורט 587 | `smtp_standards` | TLS מרומז וכל ארבע ההרחבות |

שמות השרתים מגיעים מ־`imap_host`,‏ `pop3_host` ו־`smtp_host` בקובץ הדירוג, או מרשומות ה־SRV של הספק לפי RFC 6186. הגדירו שרת כ־`false` כשהספק לא מציע את הפרוטוקול הזה. יכולות הן מה שכל שרת מכריז עליו לפני ההתחברות, והרשימות המלאות מוצגות בכל דף דירוג.

## רכיבי מעקב באתר

כל רשומה עם אתר, כולל אפליקציות, עוברת בדיקת רכיבי מעקב שמורצת על ידי [`scripts/trackers.js`](scripts/trackers.js). הבדיקה טוענת את דף הבית בלי להריץ JavaScript ומשווה כל מארח של סקריפט, מסגרת, תמונה וגיליון סגנונות, וגם קוד מוטמע, לרשימה של שירותי מעקב וניתוח נתונים ידועים.

| מה נמצא | ההשפעה על `no_trackers` |
| --- | --- |
| רכיבי מעקב של צד שלישי כמו Google Analytics,‏ Google Tag Manager,‏ Meta Pixel,‏ Hotjar או HubSpot | התשובה הופכת ל"לא", בלי קשר למה שכתוב בקובץ הדירוג |
| כלי ניתוח ללא עוגיות (Plausible,‏ Fathom,‏ Simple Analytics,‏ Matomo Cloud,‏ Cloudflare Web Analytics) | "כן" הופך ל"חלקי" |
| גופנים, הטמעות, דיווח שגיאות, צ׳אט תמיכה או כלי הסכמה | מוצגים בדף, ללא ניקוד |
| שום דבר | נעשה שימוש בתשובה שבקובץ הדירוג |

כשהאתר הוא דף באחסון קוד או בחנות אפליקציות (GitHub,‏ GitLab,‏ Codeberg,‏ SourceForge,‏ F-Droid,‏ Google Play ודומיהם), הבדיקה מדולגת, כי הדף הזה לא מופעל על ידי הפרויקט.

הבדיקה רואה רק רכיבי מעקב שכתובים בדף עצמו. רכיבי מעקב שנוספים מאוחר יותר על ידי סקריפטים, וטלמטריה בתוך אפליקציות, עדיין דורשים ראיות בקובץ הדירוג, כמו מדיניות פרטיות או דוח של [Exodus Privacy](https://reports.exodus-privacy.eu.org).

אי אפשר לראות SRS ו־ARC מבחוץ בלי לשלוח דואר, ולכן הם קריטריונים שנענים עם ראיות במקום בבדיקות.

בדיקות אוטומטיות שעדיין לא הורצו מוצגות כ"טרם נבדק" ואינן נספרות בניקוד, כך שספק אף פעם לא מקבל ניקוד נמוך בגלל בדיקה שלא התבצעה.

ב־SSL Labs, נעשה שימוש בציון החלש ביותר מבין כל כתובות ה־IP של הדומיין.

Hardenize כבר לא מציע API ציבורי, ולכן כל דף מקשר לדוח הציבורי שלו במקום לנקד אותו.

## לוח זמנים

[תהליך העבודה Scan](.github/workflows/scan.yml) רץ כל יום ובודק את 40 הרשומות עם התוצאות הישנות ביותר (Internet.nl פועל לפי מגבלות משלו, ראו בהמשך), כך שכל שירות נבדק באופן קבוע בלי להעמיס על ממשקי ה־API החינמיים. התוצאות נשמרות ב־[`scans/`](scans/) כ־JSON, נשמרות במאגר ומתפרסמות עם האתר. כל דף מציג מתי הבדיקות שלו רצו לאחרונה.

בדיקה שנכשלה שומרת את התוצאה הקודמת ורושמת את השגיאה, כך שתקלה זמנית לא משנה את הניקוד.

### מגבלות Internet.nl

ממשק ה־API לאצוות של Internet.nl משמש במסגרת [תנאי השימוש](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md) שלו:

- לכל היותר 2 בקשות אצווה בכל 7 ימים. בדיקת האתר ובדיקת הדוא״ל הן בקשות נפרדות, כך שסבב מלא אחד מנצל את שתיהן.
- לכל היותר 5000 דומיינים לבקשה. כשיש יותר דומיינים עם הבדיקה, אלה שחסרות להם תוצאות או שתוצאותיהם הישנות ביותר קודמים, והשאר ממתינים לבקשה מאוחרת יותר.
- אין בקשות לדומיין יחיד, ולכן `--only` מדלג על Internet.nl.

כל בקשה נרשמת ב־`scans/internetnl-requests.json`, שנשמר במאגר יחד עם התוצאות גם כשהרצה נכשלת. הרצה שמגלה שהמגבלה השבועית הושגה מדלגת על Internet.nl ושומרת את התוצאות הקיימות. אצוות נמשכות שעות, ולכן מצב הבקשה נבדק כל 5 דקות, ובקשה שעדיין רצה כשההרצה מסתיימת נאספת בהרצה מאוחרת יותר במקום להישלח שוב. Internet.nl מתעלם מ־`--limit`, ורק הרצות בענף ברירת המחדל משתמשות בפרטי הגישה של Internet.nl, כך שכל ההרצות חולקות רישום אחד.

אתר זה עושה שימוש חוזר בתוצאות בדיקה שמספק כלי הבדיקה [Internet.nl](https://internet.nl).

## הגדרות

כל ההגדרות הן סודות מאגר אופציונליים (Settings › Secrets and variables › Actions):

| סוד | מטרה |
| --- | --- |
| `SSLLABS_EMAIL` | כתובת דוא״ל שרשומה ב־[SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). בלעדיה, נעשה שימוש ב־API v3. ההרשמה דורשת כתובת דוא״ל של ארגון. |
| `INTERNETNL_USERNAME`,‏ `INTERNETNL_PASSWORD` | חשבון ב־[Internet.nl batch API](https://internet.nl/faqs/batch-and-dashboard/). בלעדיהם, הדפים מקשרים לבדיקות הציבוריות של Internet.nl, והקריטריונים של Internet.nl נשארים "לא ידוע". |
| `INTERNETNL_API` | כתובת הבסיס של ה־Batch API, עבור [מופע Internet.nl באירוח עצמי](https://github.com/internetstandards/Internet.nl). ברירת המחדל היא `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory לא דורש חשבון. נתוני הרישיונות מ־GitHub משתמשים באסימון המובנה של תהליך העבודה.

## הרצת בדיקות באופן מקומי

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## איזה דומיין נבדק

השדה `domain` צריך להיות האתר הראשי או אפליקציית הרשת שבה אנשים מתחברים, למשל `mail.example.com` ולא תת־דומיין שיווקי במארח אחר. ספקים יכולים להציע דומיין מדויק יותר בבקשת משיכה.

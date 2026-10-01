<!-- source: f2ab6af4acf3 -->
# Участие

Всё происходит на GitHub. Нет никакого другого форума, чата или аккаунта, который нужно заводить.

| Чтобы сделать это | Используйте |
| --- | --- |
| Предложить приложение или сервис | [Откройте issue «Suggest»](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Сообщить о неверном ответе или неработающей ссылке | [Откройте issue «Correction»](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml) или воспользуйтесь кнопкой «Сообщить об ошибке» на странице любого рейтинга |
| Предложить или изменить критерии | [Откройте issue «Criteria change»](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Исправить самостоятельно | Воспользуйтесь кнопкой «Редактировать на GitHub» на странице любого рейтинга или откройте pull request |
| Задать вопрос или обсудить выбор | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Редактирование рейтинга

Каждое приложение или сервис — это один файл Markdown в `ratings/<category>/<name>.md`. Верхняя часть файла — YAML. Всё, что ниже, — необязательные примечания в Markdown, которые показываются на странице.

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

Правила (автоматически проверяются командой `npm test`):

- `answer` — одно из значений `yes`, `partial`, `no`, `unknown` или `n/a`.
- Для `yes` и `partial` нужна ссылка `evidence`. Для `no` нужно `note` или `evidence`.
- Подтверждение должно быть первоисточником: официальная документация, исходный код, файл лицензии, отчёт об аудите или воспроизводимый тест. Не обзоры, сообщения на форумах или маркетинговые страницы без подробностей.
- Ссылки должны начинаться с `https://` и не должны содержать реферальных параметров или параметров отслеживания.
- Автоматические критерии (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) заполняются тестами. Не задавайте их вручную.
- `no_trackers` также проверяется [тестом трекеров](SCANS.md#website-trackers). Если главная страница загружает сторонний трекер, ответ становится «нет», что бы ни было указано в файле.
- Не указывайте критерии, для которых пока нет подтверждений. Они считаются `unknown`.
- `jurisdiction` — это место, где компания юридически зарегистрирована (а не где находятся её серверы). Если страны нет в [`jurisdictions.yml`](jurisdictions.yml), добавьте её. Каждому примечанию там нужен источник.
- Только сопровождающие добавляют `pick`, `pick_reason` и `disclosure`. Используйте `pick: 1` и `pick: 2`, чтобы упорядочить два выбора. Смотрите [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` сохраняет имя, которое запись имела в Awesome Privacy, после её переименования, чтобы ежемесячный импорт не добавил её снова. Чтобы навсегда исключить запись Awesome Privacy, добавьте её в [`import-skip.yml`](import-skip.yml) с указанием причины.

Критерии для каждой категории и значение каждого ответа находятся в [`criteria/`](criteria/) и на [странице критериев](https://privacyratings.com/criteria/).

## Добавление приложения или сервиса

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Эта команда создаёт файл, в котором все критерии указаны как `unknown`. Заполните то, что можете подтвердить, удалите остальное, затем запустите `npm test`.

## Стиль текста

- Простой, нейтральный язык. Описывайте, что продукт делает, а не насколько он хорош.
- Короткие предложения. Описания — не длиннее 300 символов.
- Без первого лица, без дат в тексте, без маркетинговых заявлений.
- Называйте вещи так, как их называет производитель.

## Локальный запуск сайта

Требуется Node.js 18 или новее.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Добавление страницы

Поместите файл Markdown с полями `title` и `description` в [`pages/`](pages/). Он публикуется по адресу `/<file-name>/` вместе с копией в Markdown, структурированными данными и записью в карте сайта.

## Добавление категории или критерия

1. Добавьте категорию в [`categories.yml`](categories.yml) в нужную группу.
2. При необходимости добавьте `criteria/<category-id>.yml` с критериями, специфичными для категории. Скопируйте формат из существующего файла.
3. Создайте `ratings/<category-id>/` и добавьте записи.
4. Изменения критериев подчиняются правилам проверки из [GOVERNANCE.md](GOVERNANCE.md).

## Переводы

Сайт публикуется на 25 языках. Исходный язык — английский, а все остальные языки находятся в `i18n/<code>/`:

| Файл | Содержит |
| --- | --- |
| `ui.json` | Текст интерфейса: заголовки, кнопки и предложения с `{placeholders}` |
| `data.json` | Названия категорий, критерии, руководства и примечания по странам |
| `entries.json` | Описания рейтингов, причины выбора и раскрытие информации |
| `pages/*.md` | Целые документы, например этот |

Каждый файл JSON сопоставляет английский текст с его переводом. Когда английский текст меняется, старый перевод перестаёт ему соответствовать, поэтому показывается английский текст, пока кто-нибудь не переведёт новый. Устаревшее содержимое никогда не показывается.

1. Выполните `npm run build`. Команда записывает текущие английские списки в `i18n/source/`.
2. Выполните `npm run i18n:check`, чтобы увидеть, чего не хватает в каждом языке, или `node scripts/i18n-check.js de ui`, чтобы получить подробности по одному языку и файлу.
3. Добавьте или исправьте переводы, сохраняя каждый `{placeholder}` в точности как есть.
4. Для документа скопируйте английский текст из `i18n/source/pages/`, сохраните его первую строку (`<!-- source: … -->`, которая связывает перевод с этой версией английского текста) и переведите остальное.

Примечания и доказательства к отдельным ответам остаются на английском. Сравнения и большинство отдельных рейтингов доступны только на английском; выбор редакции, категории, руководства, альтернативы, списки open source, юрисдикции и документы переводятся. Меню языков и автоматическое перенаправление используют ссылки `hreflang` на каждой странице.

## Контрольный список для pull request

- [ ] `npm test` проходит.
- [ ] Каждый изменённый ответ ссылается на подтверждение.
- [ ] Если вы работаете на сервис, который изменили, или связаны с ним, вы указали это в pull request.

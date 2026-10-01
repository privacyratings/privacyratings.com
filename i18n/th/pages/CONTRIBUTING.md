<!-- source: f2ab6af4acf3 -->
# การร่วมพัฒนา

ทุกอย่างเกิดขึ้นบน GitHub ไม่มีฟอรัม แชต หรือบัญชีอื่นที่ต้องลงทะเบียน

| หากต้องการ | ใช้ |
| --- | --- |
| เสนอแอปหรือบริการ | [เปิด issue "Suggest"](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| แจ้งคำตอบที่ผิดหรือลิงก์เสีย | [เปิด issue "Correction"](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml) หรือใช้ "แจ้งการแก้ไข" ในหน้าผลการประเมินใดก็ได้ |
| เสนอหรือเปลี่ยนแปลงเกณฑ์ | [เปิด issue "Criteria change"](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| แก้ไขด้วยตนเอง | ใช้ "แก้ไขบน GitHub" ในหน้าผลการประเมินใดก็ได้ หรือเปิด pull request |
| ถามคำถามหรือถกเถียงเรื่องตัวเลือกแนะนำ | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## การแก้ไขผลการประเมิน

แอปหรือบริการแต่ละรายการเป็นไฟล์ Markdown หนึ่งไฟล์ใน `ratings/<category>/<name>.md` ส่วนบนของไฟล์เป็น YAML ส่วนที่อยู่ด้านล่างเป็นหมายเหตุ Markdown ที่ไม่บังคับซึ่งแสดงในหน้า

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

กฎ (ตรวจสอบโดยอัตโนมัติด้วย `npm test`):

- `answer` เป็นค่าใดค่าหนึ่งจาก `yes`, `partial`, `no`, `unknown` หรือ `n/a`
- `yes` และ `partial` ต้องมีลิงก์ `evidence` ส่วน `no` ต้องมี `note` หรือ `evidence`
- หลักฐานต้องเป็นแหล่งข้อมูลปฐมภูมิ: เอกสารทางการ ซอร์สโค้ด ไฟล์สัญญาอนุญาต รายงานการตรวจสอบ หรือการทดสอบที่ทำซ้ำได้ ไม่ใช่บทวิจารณ์ โพสต์ในฟอรัม หรือหน้าการตลาดที่ไม่มีรายละเอียด
- ลิงก์ต้องเป็น `https://` และต้องไม่มีพารามิเตอร์การแนะนำหรือการติดตาม
- เกณฑ์อัตโนมัติ (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) จะถูกกรอกโดยการทดสอบ ห้ามตั้งค่าเอง
- `no_trackers` ยังถูกตรวจสอบโดย[การทดสอบตัวติดตาม](SCANS.md#website-trackers) หากหน้าแรกโหลดตัวติดตามจากบุคคลที่สาม คำตอบจะกลายเป็น "no" ไม่ว่าไฟล์จะระบุว่าอย่างไร
- ละเว้นเกณฑ์ใดๆ ที่ยังไม่มีหลักฐาน ซึ่งจะนับเป็น `unknown`
- `jurisdiction` คือประเทศที่บริษัทตั้งอยู่ตามกฎหมาย (ไม่ใช่ที่ตั้งของเซิร์ฟเวอร์) เพิ่มประเทศลงใน [`jurisdictions.yml`](jurisdictions.yml) หากยังไม่มี ทุกหมายเหตุในไฟล์นั้นต้องมีแหล่งที่มา
- เฉพาะผู้ดูแลเท่านั้นที่เพิ่ม `pick`, `pick_reason` และ `disclosure` ใช้ `pick: 1` และ `pick: 2` เพื่อเรียงลำดับตัวเลือกแนะนำสองรายการ ดู [GOVERNANCE.md](GOVERNANCE.md)
- `imported_name` เก็บชื่อที่รายการเคยใช้ใน Awesome Privacy ไว้หลังจากเปลี่ยนชื่อ เพื่อไม่ให้การนำเข้ารายเดือนเพิ่มรายการนั้นซ้ำ หากต้องการไม่รวมรายการจาก Awesome Privacy อย่างถาวร ให้เพิ่มลงใน [`import-skip.yml`](import-skip.yml) พร้อมเหตุผล

เกณฑ์ของแต่ละหมวดหมู่และความหมายของแต่ละคำตอบอยู่ใน [`criteria/`](criteria/) และใน[หน้าเกณฑ์](https://privacyratings.com/criteria/)

## การเพิ่มแอปหรือบริการ

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

คำสั่งนี้จะสร้างไฟล์ที่แสดงทุกเกณฑ์เป็น `unknown` กรอกสิ่งที่คุณพิสูจน์ได้ ลบส่วนที่เหลือ แล้วรัน `npm test`

## รูปแบบการเขียน

- ภาษาที่เรียบง่ายและเป็นกลาง อธิบายว่าสิ่งนั้นทำอะไร ไม่ใช่ว่ายอดเยี่ยมเพียงใด
- ประโยคสั้น คำอธิบายต้องไม่เกิน 300 ตัวอักษร
- ไม่ใช้บุรุษที่หนึ่ง ไม่ระบุวันที่ในเนื้อความ ไม่มีคำกล่าวอ้างทางการตลาด
- เรียกชื่อสิ่งต่างๆ ตามที่ผู้ให้บริการเรียก

## การรันเว็บไซต์ในเครื่อง

ต้องใช้ Node.js 18 ขึ้นไป

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## การเพิ่มหน้า

วางไฟล์ Markdown ที่มี `title` และ `description` ไว้ใน [`pages/`](pages/) ไฟล์จะถูกเผยแพร่ที่ `/<file-name>/` พร้อมสำเนา Markdown ข้อมูลแบบมีโครงสร้าง และรายการในแผนผังเว็บไซต์

## การเพิ่มหมวดหมู่หรือเกณฑ์

1. เพิ่มหมวดหมู่ลงใน [`categories.yml`](categories.yml) ภายใต้กลุ่มที่เหมาะสม
2. หากต้องการ ให้เพิ่ม `criteria/<category-id>.yml` ที่มีเกณฑ์เฉพาะของหมวดหมู่ คัดลอกรูปแบบจากไฟล์ที่มีอยู่
3. สร้าง `ratings/<category-id>/` แล้วเพิ่มรายการ
4. การเปลี่ยนแปลงเกณฑ์ต้องเป็นไปตามกฎการตรวจทานใน [GOVERNANCE.md](GOVERNANCE.md)

## การแปล

เว็บไซต์เผยแพร่ใน 25 ภาษา ภาษาอังกฤษเป็นต้นฉบับ และภาษาอื่นแต่ละภาษาอยู่ใน `i18n/<code>/`:

| ไฟล์ | เก็บ |
| --- | --- |
| `ui.json` | ข้อความของอินเทอร์เฟซ: หัวข้อ ปุ่ม และประโยคที่มี `{placeholders}` |
| `data.json` | ชื่อหมวดหมู่ เกณฑ์ คู่มือ และหมายเหตุของแต่ละประเทศ |
| `entries.json` | คำอธิบายผลการประเมิน เหตุผลของตัวเลือกแนะนำ และการเปิดเผยข้อมูล |
| `pages/*.md` | เอกสารทั้งฉบับ เช่น เอกสารนี้ |

ไฟล์ JSON แต่ละไฟล์จับคู่ข้อความภาษาอังกฤษกับคำแปล เมื่อข้อความภาษาอังกฤษเปลี่ยน คำแปลเดิมจะไม่ตรงกันอีกต่อไป จึงแสดงข้อความภาษาอังกฤษจนกว่าจะมีผู้แปลข้อความใหม่ จะไม่มีการแสดงคำแปลที่ล้าสมัยเลย

1. รัน `npm run build` คำสั่งนี้จะเขียนรายการภาษาอังกฤษปัจจุบันลงใน `i18n/source/`
2. รัน `npm run i18n:check` เพื่อดูว่าแต่ละภาษายังขาดอะไร หรือ `node scripts/i18n-check.js de ui` เพื่อดูรายละเอียดของภาษาและไฟล์หนึ่ง
3. เพิ่มหรือแก้ไขคำแปล โดยคง `{placeholder}` ทุกตัวไว้ตามเดิมทุกประการ
4. สำหรับเอกสาร ให้คัดลอกข้อความภาษาอังกฤษจาก `i18n/source/pages/` คงบรรทัดแรกไว้ (`<!-- source: … -->` ซึ่งผูกคำแปลกับต้นฉบับภาษาอังกฤษเวอร์ชันนั้น) แล้วแปลส่วนที่เหลือ

หมายเหตุและหลักฐานของแต่ละคำตอบยังคงเป็นภาษาอังกฤษ การเปรียบเทียบและผลการประเมินรายการเดี่ยวส่วนใหญ่มีเฉพาะภาษาอังกฤษ ส่วนตัวเลือกแนะนำ หมวดหมู่ คู่มือ ทางเลือก รายการโอเพนซอร์ส เขตอำนาจศาล และเอกสารจะได้รับการแปล เมนูภาษาและการเปลี่ยนเส้นทางอัตโนมัติใช้ลิงก์ `hreflang` ในแต่ละหน้า

## รายการตรวจสอบ pull request

- [ ] `npm test` ผ่าน
- [ ] ทุกคำตอบที่เปลี่ยนแปลงมีลิงก์ไปยังหลักฐาน
- [ ] หากคุณทำงานให้หรือมีความเกี่ยวข้องกับบริการที่คุณเปลี่ยนแปลง คุณได้แจ้งไว้ใน pull request แล้ว

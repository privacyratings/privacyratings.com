<!-- source: f2ab6af4acf3 -->
# Katkıda bulunma

Her şey GitHub'da gerçekleşir. Kaydolmanız gereken başka bir forum, sohbet veya hesap yoktur.

| Yapmak istediğiniz | Kullanın |
| --- | --- |
| Bir uygulama veya hizmet önermek | [Bir "Suggest" issue'su açın](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Yanlış bir yanıtı veya bozuk bir bağlantıyı bildirmek | [Bir "Correction" issue'su açın](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml) veya herhangi bir değerlendirme sayfasında "Düzeltme bildirin" seçeneğini kullanın |
| Kriter önermek veya değiştirmek | [Bir "Criteria change" issue'su açın](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Kendiniz düzeltmek | Herhangi bir değerlendirme sayfasında "GitHub'da düzenle" seçeneğini kullanın veya bir pull request açın |
| Soru sormak veya bir seçimi tartışmak | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Bir değerlendirmeyi düzenleme

Her uygulama veya hizmet, `ratings/<category>/<name>.md` konumunda bir Markdown dosyasıdır. Dosyanın üst kısmı YAML'dir. Altındaki her şey, sayfada gösterilen isteğe bağlı Markdown notlarıdır.

```yaml
---
name: Example Mail
description: >-
  One or two plain sentences about what it is.
website: https://example.com
source: https://github.com/example/example      # isteğe bağlı
platforms: [web, android, ios]                  # isteğe bağlı
jurisdiction: CH                                # isteğe bağlı, jurisdictions.yml dosyasındaki ülke kodu
mainstream: true                                # isteğe bağlı, bir "alternatifleri" sayfası ekler
aliases: [Example Office, Example Docs]         # isteğe bağlı, insanların aradığı diğer adlar
also_in: [macos-hardening]                      # isteğe bağlı, başka bir kategorinin tablosunda da listeler
alternatives_page: true                         # isteğe bağlı, mainstream olmadan bir "alternatifleri" sayfası ekler
domain: mail.example.com                        # yalnızca hizmetler, otomatik testler için kullanılır
mail_domain: example.com                        # yalnızca e-posta kategorileri
imap_host: imap.example.com                     # yalnızca e-posta sağlayıcıları; sunulmuyorsa false
pop3_host: pop3.example.com                     # isteğe bağlı, yoksa SRV kayıtlarından bulunur
smtp_host: smtp.example.com                     # isteğe bağlı, yoksa SRV kayıtlarından bulunur
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/example/example/blob/main/LICENSE
    note: Apps are open source. The server is not.
  no_ads:
    answer: yes
    evidence: https://example.com/pricing
---

Markdown biçiminde isteğe bağlı notlar.
```

Kurallar (`npm test` tarafından otomatik olarak kontrol edilir):

- `answer` şunlardan biridir: `yes`, `partial`, `no`, `unknown` veya `n/a`.
- `yes` ve `partial` bir `evidence` bağlantısı gerektirir. `no` bir `note` veya `evidence` gerektirir.
- Kanıt birincil kaynak olmalıdır: resmî dokümantasyon, kaynak kodu, lisans dosyası, denetim raporu veya tekrarlanabilir bir test. İncelemeler, forum gönderileri veya ayrıntı içermeyen pazarlama sayfaları kanıt değildir.
- Bağlantılar `https://` olmalı ve yönlendirme (referral) veya izleme parametreleri içermemelidir.
- Otomatik kriterler (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) testler tarafından doldurulur. Bunları elle ayarlamayın.
- `no_trackers` ayrıca [izleyici testi](SCANS.md#website-trackers) tarafından da kontrol edilir. Ana sayfa üçüncü taraf bir izleyici yüklüyorsa, dosyada ne yazarsa yazsın yanıt "no" olur.
- Henüz kanıtı olmayan kriterleri dahil etmeyin. Bunlar `unknown` sayılır.
- `jurisdiction`, şirketin yasal olarak bulunduğu yerdir (sunucularının bulunduğu yer değil). Eksikse [`jurisdictions.yml`](jurisdictions.yml) dosyasına bir ülke ekleyin. Oradaki her not bir kaynak gerektirir.
- `pick`, `pick_reason` ve `disclosure` alanlarını yalnızca bakımcılar ekler. İki seçimi sıralamak için `pick: 1` ve `pick: 2` kullanın. Bkz. [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name`, bir kaydın yeniden adlandırıldıktan sonra Awesome Privacy'deki adını saklar; böylece aylık içe aktarma onu tekrar eklemez. Bir Awesome Privacy kaydını kalıcı olarak dışarıda bırakmak için onu bir gerekçeyle birlikte [`import-skip.yml`](import-skip.yml) dosyasına ekleyin.

Her kategorinin kriterleri ve her yanıtın ne anlama geldiği [`criteria/`](criteria/) klasöründe ve [kriterler sayfasında](https://privacyratings.com/criteria/) bulunur.

## Uygulama veya hizmet ekleme

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Bu komut, her kriteri `unknown` olarak listeleyen bir dosya oluşturur. Kanıtlayabildiklerinizi doldurun, geri kalanını silin ve ardından `npm test` komutunu çalıştırın.

## Yazım stili

- Sade, tarafsız bir dil. Bir şeyin ne kadar harika olduğunu değil, ne yaptığını anlatın.
- Kısa cümleler. Açıklamalar 300 karakterin altında kalır.
- Birinci şahıs yok, metin içinde tarih yok, pazarlama iddiaları yok.
- Şeyleri üreticinin adlandırdığı gibi adlandırın.

## Siteyi yerel olarak çalıştırma

Node.js 18 veya daha yenisi gerekir.

```sh
npm ci
npm test           # verileri doğrula ve siteyi derle
npm run serve      # http://localhost:8080 adresinde önizle
```

## Sayfa ekleme

[`pages/`](pages/) klasörüne `title` ve `description` içeren bir Markdown dosyası koyun. Dosya; bir Markdown kopyası, yapılandırılmış veriler ve bir site haritası girdisiyle birlikte `/<file-name>/` adresinde yayımlanır.

## Kategori veya kriter ekleme

1. Kategoriyi [`categories.yml`](categories.yml) dosyasında doğru grubun altına ekleyin.
2. İsteğe bağlı olarak, kategoriye özgü kriterlerle `criteria/<category-id>.yml` dosyasını ekleyin. Biçimi mevcut bir dosyadan kopyalayın.
3. `ratings/<category-id>/` klasörünü oluşturun ve kayıtları ekleyin.
4. Kriter değişiklikleri [GOVERNANCE.md](GOVERNANCE.md) içindeki inceleme kurallarına tabidir.

## Çeviriler

Site 25 dilde yayımlanır. Kaynak dil İngilizcedir ve diğer her dil `i18n/<code>/` içinde bulunur:

| Dosya | İçerik |
| --- | --- |
| `ui.json` | Arayüz metni: başlıklar, düğmeler ve `{placeholders}` içeren cümleler |
| `data.json` | Kategori adları, kriterler, rehberler ve ülke notları |
| `entries.json` | Değerlendirme açıklamaları, seçim gerekçeleri ve açıklamalar |
| `pages/*.md` | Bunun gibi belgelerin tamamı |

Her JSON dosyası İngilizce metni çevirisiyle eşler. İngilizce metin değiştiğinde eski çeviri artık eşleşmez; bu nedenle biri yeni metni çevirene kadar İngilizcesi gösterilir. Güncelliğini yitirmiş hiçbir şey gösterilmez.

1. `npm run build` komutunu çalıştırın. Bu komut güncel İngilizce listeleri `i18n/source/` klasörüne yazar.
2. Her dilde neyin eksik olduğunu görmek için `npm run i18n:check`, tek bir dil ve dosyanın ayrıntıları için `node scripts/i18n-check.js de ui` komutunu çalıştırın.
3. Her `{placeholder}` değerini olduğu gibi koruyarak çeviri ekleyin veya düzeltin.
4. Bir belge için İngilizce metni `i18n/source/pages/` klasöründen kopyalayın, ilk satırını (çeviriyi İngilizce metnin o sürümüne bağlayan `<!-- source: … -->`) koruyun ve geri kalanını çevirin.

Yanıt başına notlar ve kanıtlar İngilizce kalır. Karşılaştırmalar ve tekil değerlendirmelerin çoğu yalnızca İngilizcedir; editör seçimleri, kategoriler, rehberler, alternatifler, açık kaynak listeleri, yargı bölgeleri ve belgeler çevrilir. Dil menüsü ve otomatik yönlendirme her sayfadaki `hreflang` bağlantılarını kullanır.

## Pull request kontrol listesi

- [ ] `npm test` başarılı.
- [ ] Değiştirilen her yanıt bir kanıta bağlantı veriyor.
- [ ] Değiştirdiğiniz bir hizmet için çalışıyorsanız veya onunla bağlantınız varsa, bunu pull request'te belirttiniz.

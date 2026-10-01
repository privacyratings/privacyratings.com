<!-- source: 16559ce369ce -->
# Otomatik testler

Barındırılan hizmetler (`type: service` olan kategoriler), değerlendirme dosyalarında bir `domain` bulunduğunda otomatik olarak test edilir. `mail_domain` alanı olan e-posta sağlayıcıları ve yönlendirme hizmetleri ayrıca bir e-posta testinden de geçer.

| Test | Neyi kontrol eder | Kriter | Evet | Kısmen | Hayır |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | TLS sürümleri, şifre takımları, sertifikalar ve bilinen TLS açıkları | `tls` | A+ veya A | A- veya B | C veya daha düşük |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | CSP, HSTS ve X-Frame-Options gibi güvenlik başlıkları ve çerez bayrakları | `security_headers` | A+ veya A | A-, B+ veya B | B- veya daha düşük |
| [Internet.nl web sitesi testi](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS ve güvenlik seçenekleri | `web_standards` | %90 veya üzeri | %70 ile %89 arası | %70'in altı |
| [Internet.nl e-posta testi](https://internet.nl/test-mail/) | Posta alan adı için IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS ve DANE | `mail_standards` | %90 veya üzeri | %70 ile %89 arası | %70'in altı |
| [Hardenize](https://www.hardenize.com) | DNS, e-posta ve web güvenliği yapılandırması | Yalnızca bağlantı | | | |

## E-posta standartları

`mail_domain` alanı olan e-posta sağlayıcıları ve yönlendirme hizmetleri, [`scripts/mail-tests.js`](scripts/mail-tests.js) tarafından çalıştırılan şu testlerden de geçer:

| Test | Neyi kontrol eder | Kriter | Evet |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, DMARC politikası, MTA-STS modu (RFC 8461), TLS-RPT (RFC 8460), DNSSEC doğrulaması, her MX ana makinesinde DANE TLSA (RFC 7672); ayrıca bilgi amaçlı BIMI ve RFC 6186 SRV kayıtları | `transport_security` | Altısının tümü zorunlu |
| IMAP `CAPABILITY` | 993'te örtük TLS (RFC 8314), IMAP4rev1 veya IMAP4rev2, IDLE. Olmazsa 143'te STARTTLS denenir | `imap_standards` | Örtük TLS, IMAP4rev1/rev2 ve IDLE |
| POP3 `CAPA` | 995'te örtük TLS, CAPA (RFC 2449), UIDL. Olmazsa 110'da STLS denenir | `pop3_standards` | Örtük TLS, CAPA ve UIDL |
| SMTP `EHLO` | 465'te örtük TLS üzerinden gönderim, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Olmazsa 587'de STARTTLS denenir | `smtp_standards` | Örtük TLS ve dört uzantının tümü |

Sunucu adları, değerlendirme dosyasındaki `imap_host`, `pop3_host` ve `smtp_host` alanlarından veya sağlayıcının RFC 6186 SRV kayıtlarından alınır. Sağlayıcı bir protokolü sunmuyorsa ilgili ana makineyi `false` olarak ayarlayın. Yetenekler, her sunucunun oturum açmadan önce bildirdiği özelliklerdir ve tam listeler her değerlendirme sayfasında gösterilir.

## Web sitesi izleyicileri

Uygulamalar dahil, web sitesi olan her kayıt, [`scripts/trackers.js`](scripts/trackers.js) tarafından çalıştırılan bir izleyici testinden geçer. Test, ana sayfayı JavaScript çalıştırmadan yükler ve her betik, çerçeve, görsel ve stil sayfası ana makinesini ve satır içi kodu, bilinen izleme ve analitik hizmetlerinin bir listesiyle karşılaştırır.

| Bulunan | `no_trackers` üzerindeki etkisi |
| --- | --- |
| Google Analytics, Google Tag Manager, Meta Pixel, Hotjar veya HubSpot gibi üçüncü taraf izleyiciler | Değerlendirme dosyasında ne yazarsa yazsın yanıt "hayır" olur |
| Çerezsiz analitik (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | "Evet" yanıtı "kısmen" olur |
| Yazı tipleri, yerleştirmeler, hata raporlama, destek sohbeti veya onay araçları | Sayfada listelenir, puanlanmaz |
| Hiçbir şey | Değerlendirme dosyasındaki yanıt kullanılır |

Web sitesi bir kod barındırma veya uygulama mağazası sayfası olduğunda (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play ve benzerleri) test atlanır, çünkü o sayfa proje tarafından yönetilmez.

Test yalnızca sayfanın kendisine yazılmış izleyicileri görür. Betikler tarafından sonradan eklenen izleyiciler ve uygulamaların içindeki telemetri için değerlendirme dosyasında yine kanıt gerekir; örneğin bir gizlilik politikası veya bir [Exodus Privacy](https://reports.exodus-privacy.eu.org) raporu.

SRS ve ARC, e-posta göndermeden dışarıdan görülemez; bu nedenle testler yerine kanıtla yanıtlanan kriterlerdir.

Henüz çalışmamış otomatik kontroller "Henüz test edilmedi" olarak gösterilir ve puana dahil edilmez; böylece bir sağlayıcının puanı henüz yapılmamış bir test yüzünden asla düşürülmez.

SSL Labs için, bir alan adının tüm IP adresleri arasındaki en zayıf not kullanılır.

Hardenize artık herkese açık bir API sunmadığından, her sayfa onu puanlamak yerine herkese açık raporuna bağlantı verir.

## Zamanlama

[Scan iş akışı](.github/workflows/scan.yml) her gün çalışır ve en eski sonuçlara sahip 40 kaydı test eder (Internet.nl kendi sınırlarına uyar, aşağıya bakın); böylece ücretsiz API'ler aşırı yüklenmeden her hizmet düzenli olarak test edilir. Sonuçlar JSON olarak [`scans/`](scans/) klasörüne kaydedilir, depoya commit edilir ve siteyle birlikte yayımlanır. Her sayfa, testlerinin en son ne zaman çalıştığını gösterir.

Başarısız bir test önceki sonucu korur ve hatayı kaydeder; böylece geçici bir kesinti puanı değiştirmez.

### Internet.nl sınırları

Internet.nl toplu API'si [kullanım koşulları](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md) dahilinde kullanılır:

- Herhangi bir 7 günlük sürede en fazla 2 toplu istek. Web sitesi testi ve e-posta testi ayrı isteklerdir, bu yüzden tam bir tur ikisini de kullanır.
- İstek başına en fazla 5000 alan adı. Testi olan alan adı sayısı daha fazlaysa sonucu olmayanlar veya en eski sonuca sahip olanlar önce gelir, geri kalanlar sonraki bir isteği bekler.
- Tek alan adı için istek yapılmaz, bu yüzden `--only` Internet.nl'yi atlar.

Her istek `scans/internetnl-requests.json` dosyasına kaydedilir; bu dosya, bir çalıştırma başarısız olsa bile sonuçlarla birlikte commit edilir. Haftalık sınıra ulaşıldığını gören bir çalıştırma Internet.nl'yi atlar ve mevcut sonuçları korur. Toplu işlemler saatler sürdüğü için istek durumu her 5 dakikada bir kontrol edilir; çalıştırma sona erdiğinde hâlâ süren bir istek yeniden gönderilmez, sonraki bir çalıştırma tarafından alınır. Internet.nl `--limit` seçeneğini yok sayar ve Internet.nl kimlik bilgilerini yalnızca varsayılan daldaki çalıştırmalar kullanır; böylece tüm çalıştırmalar tek bir kaydı paylaşır.

Bu web sitesi, [Internet.nl](https://internet.nl) test aracının sağladığı test sonuçlarını yeniden kullanır.

## Yapılandırma

Tüm ayarlar isteğe bağlı depo gizli anahtarlarıdır (Settings › Secrets and variables › Actions):

| Gizli anahtar | Amaç |
| --- | --- |
| `SSLLABS_EMAIL` | [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md) için kayıtlı e-posta. Bu olmadan v3 API'si kullanılır. Kayıt için bir kurumsal e-posta adresi gerekir. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | [Internet.nl toplu API'si](https://internet.nl/faqs/batch-and-dashboard/) için hesap. Bunlar olmadan sayfalar herkese açık Internet.nl testlerine bağlantı verir ve Internet.nl kriterleri "bilinmiyor" olarak kalır. |
| `INTERNETNL_API` | [Kendi sunucunuzda barındırılan bir Internet.nl](https://github.com/internetstandards/Internet.nl) örneği için toplu API temel URL'si. Varsayılan değer `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory hesap gerektirmez. GitHub lisans verileri, iş akışının yerleşik token'ını kullanır.

## Testleri yerel olarak çalıştırma

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # yalnızca e-posta DNS kontrolleri
npm run test:unit                              # yerel sahte sunuculara karşı protokol denemeleri
npm run build
```

## Hangi alan adı test edilir

`domain` alanı, insanların oturum açtığı ana web sitesi veya web uygulaması olmalıdır; örneğin farklı bir ana makinedeki pazarlama alt alan adı yerine `mail.example.com`. Üreticiler bir pull request ile daha doğru bir alan adı önerebilir.

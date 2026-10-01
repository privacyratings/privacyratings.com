<!-- source: 2f40b8f7e8ef -->
# CLOUD Act nedir?

**Clarifying Lawful Overseas Use of Data Act (CLOUD Act)**, tek bir soruyu yanıtlayan bir ABD yasasıdır: ABD makamları, bir ABD şirketinden başka bir ülkede saklanan verileri alabilir mi? Yanıt evettir.

## Ne yapar

1. **Konum önemli değildir.** ABD yargı yetkisine tabi bir sağlayıcı, "zilyetliğinde, muhafazasında veya kontrolünde" bulunan verileri, veriler dünyanın neresinde saklanırsa saklansın, geçerli ABD yasal süreçlerine yanıt olarak teslim etmek zorundadır. [Kaynak: ABD Adalet Bakanlığı](https://www.justice.gov/criminal/cloud-act-resources)
2. **Diğer ülkelerle anlaşmalar.** ABD, güvenilen yabancı hükümetlerin ağır suçlar için daha yavaş işleyen karşılıklı adli yardım anlaşması (MLAT) sürecinden geçmeden verileri doğrudan ABD'li sağlayıcılardan talep etmesine olanak tanıyan veri erişim anlaşmaları imzalayabilir. [Kaynak: ABD Adalet Bakanlığı](https://www.justice.gov/criminal/cloud-act-resources)
3. **İtiraz yolu.** Sağlayıcılar, bir talep anlaşması bulunan başka bir ülkenin yasalarıyla çeliştiğinde mahkemeden talebin iptal edilmesini veya değiştirilmesini isteyebilir.

**Birleşik Krallık** ve **Avustralya** ile anlaşmalar yürürlüktedir. **Kanada** ve **Avrupa Birliği** ile müzakereler duyurulmuştur. [Kaynak: ABD Adalet Bakanlığı](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Ne yapmaz

- Yeni gözetim yetkileri yaratmaz veya arama kararı gerekliliğini ortadan kaldırmaz. ABD makamları yine de geçerli bir yasal süreç gerektirir ve iletişim içeriği için genellikle bir arama kararı gerekir.
- Bir sağlayıcıyı, şifresini çözemediği verilerin şifresini çözmeye zorlamaz. Sağlayıcının elindeki verileri kapsar. Yalnızca kullanıcının elinde olan anahtarlarla şifrelenmiş veriler şifreli kalır.
- Yalnızca ABD'deki veri merkezleri için geçerli değildir. Sunucuyu işleten şirket ABD yargı yetkisine tabiyse, Avrupa'da bir sunucu konumu seçmek işe yaramaz.

## Kimi etkiler

ABD yargı yetkisine tabi her şirketi: Google, Microsoft, Apple, Amazon, Cloudflare ve Forward Email dahil daha küçük ABD hizmetlerini. Bkz. [Amerika Birleşik Devletleri merkezli tüm değerlendirilen hizmetler](/jurisdictions/united-states/).

Bulut sağlayıcısının kendisi de bir talep alabileceğinden, **verilerini ABD'li bulut sağlayıcılarında saklayan ABD dışı hizmetlere** de ulaşabilir. Bu yüzden asıl yararlı soru yalnızca "şirket nerede?" değil, aynı zamanda "hangi veriler var ve anahtarlar kimde?" sorusudur.

## Şifreleme ve asgari veri neden konumdan daha önemlidir

Yasalar değişir ve her ülkenin veri talep etmek için bir yolu vardır. En önemli olan, bir sağlayıcının neleri teslim **edebileceğidir**:

| Durum | Bir talebin ulaşabileceği |
| --- | --- |
| Düz metin olarak saklanan e-posta | Posta kutusundaki her şey |
| Sağlayıcının elindeki anahtarlarla bekleme sırasında şifrelenen e-posta | Her şey, çünkü sağlayıcı şifreyi çözebilir |
| Kullanıcının parolasından türetilen anahtarlarla şifrelenen e-posta | Mesaj içerikleri değil, hesap bilgileri ve bağlantı verileri |
| Hiç kayıt tutulmaması | Etkinlik hakkında hiçbir şey |

Gerçek örnekler:

- **Proton (İsviçre, tüm Eyes düzenlemelerinin dışında)** en son yıllık raporunda 9.301 İsviçre yasal kararının 8.313'üne uyarak elindeki hesap bilgilerini sağladı. [Kaynak: Proton şeffaflık raporu](https://proton.me/legal/transparency)
- **Proton VPN (aynı şirket, aynı ülke)** hiçbirine uymadı, çünkü kayıt tutmuyor. [Kaynak: Proton şeffaflık raporu](https://proton.me/legal/transparency)
- **Tuta (Almanya)**, bir Alman hâkim tarafından posta kutularını teslim etmeye veya gerçek zamanlı olarak izlemeye zorlanabilir. Uçtan uca şifreli e-postalar şifreli kalır. [Kaynak: Tuta şeffaflık raporu](https://tuta.com/blog/transparency-report)

Aynı ülkedeki aynı şirket, hangi verilerin var olduğuna bağlı olarak çok farklı sonuçlar alır. Privacy Ratings'in yargı yetkisini her sayfada gösterip sağlayıcıların gerçekte ne yaptığını puanlamasının nedeni budur. Bkz. [yargı yetkisinin nasıl ele alındığı](/jurisdictions/).

## CLOUD Act Forward Email'e nasıl uygulanır

Forward Email, Amerika Birleşik Devletleri merkezlidir ve CLOUD Act'e tabidir. [Teknik raporu](https://forwardemail.net/technical-whitepaper.pdf), tasarımının bir talebin ulaşabileceği verileri nasıl sınırladığını açıklar:

- **Şifreli posta kutuları.** Her posta kutusu ayrı ayrı şifrelenmiş bir SQLite dosyasıdır. Teknik rapor, Forward Email'in mesaj içeriklerine erişemediğini belirtir.
- **E-posta içeriği veya meta verileri diske kaydedilmez.** Forward Email, kullanıcıların kime yazdığına dair kayıt tutmaz.
- **Sınırlı veri.** Açıklanabilecek olanlar temel hesap bilgileri (hesabın e-posta adresi, kayıt tarihi ve ödeme bilgileri gibi) ve güvenlik ile kötüye kullanımın önlenmesi için geçici olarak tutulabilen sınırlı IP adresi kayıtlarıdır.
- **Yalnızca geçerli yasal süreç.** Talepler bir celp, mahkeme kararı veya arama kararı gerektirir. ABD dışından gelen talepler bir ABD mahkemesi, karşılıklı adli yardım anlaşması veya ABD yasal gerekliliklerini karşılayan bir CLOUD Act anlaşması aracılığıyla gelmelidir.
- **Bildirim ve itiraz.** Yasanın izin verdiği durumlarda kullanıcılar bilgilendirilir ve aşırı geniş taleplere itiraz edilir.

Privacy Ratings'in bakımını Forward Email yapar. Değerlendirmesi, diğer tüm sağlayıcılarla aynı kriterleri kullanır. Bkz. [Forward Email değerlendirmesi](/email-providers/forward-email/) ve [yönetişim kuralları](/governance/).

## Daha fazla bilgi

- [ABD Adalet Bakanlığı: CLOUD Act kaynakları](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: CLOUD Act kapsamında sınır ötesi veri paylaşımı](https://www.congress.gov/crs-product/R45173)
- [EFF: Section 702 gözetimi](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)

<!-- source: df34a6a5c6c4 -->
# Privacy Ratings neden var

Gizlilik rehberleri milyonlarca insanın daha iyi uygulamalar ve hizmetler seçmesine yardımcı olur. Birçoğu mükemmel iş çıkarır. Ancak çoğunun zayıf yönleri ortaktır:

- **Belirsiz kurallar.** Bir hizmet listeye alınır veya dışarıda bırakılır; gerekçe bir forum konusu, özel bir tartışmadır ya da hiç yayımlanmaz.
- **Yalnızca geçti veya kaldı.** Bir liste "önerilir" der ya da hiçbir şey demez. Bir şeyin ne kadar yaklaştığını veya sonucu neyin değiştireceğini göstermez.
- **Kontrol edilmeyen iddialar.** Açıklamalar, okuyucunun doğrulayabileceği hiçbir şeye bağlantı vermeden "şifreli" veya "kayıt tutmaz" der.
- **Test yok.** Barındırılan hizmetler; TLS ayarları, güvenlik başlıkları veya e-posta kimlik doğrulaması gibi temel güvenlik açısından nadiren kontrol edilir.
- **Ayrı platformlar.** Öneriler ve tartışmalar, asıl içerikten ayrı olarak, kendi hesabı ve moderasyonu olan bir forumda veya sohbet sunucusunda yapılır.
- **Yavaş değişim.** Bir ürün değiştiğinde listeler çoğu zaman güncelliğini yitirir, çünkü güncellenmeleri birkaç kişiye bağlıdır.

Privacy Ratings bunların her birini düzeltmek için geliştirilmiştir.

## Awesome listelerinden bakımı yapılan bir kaynağa

Bu rehberlerin birçoğu GitHub listeleri olarak başladı. [Sindre Sorhus](https://github.com/sindresorhus/awesome) tarafından başlatılan "awesome" liste biçimi, herkesin derlenmiş bir liste yayımlamasını kolaylaştırdı ve ardından çoğu birbirinin çatalı olan binlerce awesome-bir şey listesi ortaya çıktı. [Awesome Privacy](https://github.com/lissy93/awesome-privacy) gibi listeler değerli işler yapar ve buradaki birçok kayıt ilk olarak orada listelenmiştir.

Bu biçimin bir zayıflığı vardır: çoğu liste bir veya iki gönüllüye bağlıdır. Bir bakımcı ayrıldığında liste sessizleşir, arşivlenir ya da her biri zamanla güncelliğini yitiren çatallara bölünür. Okuyucular hangi kopyanın güncel olduğunu anlayamaz ve bir listedeki hiçbir şey test edilmez veya puanlanmaz.

**Privacy Ratings bir şirket, [Forward Email](https://forwardemail.net) tarafından desteklenir ve yürütülür.** Ayrılabilecek veya depoyu arşivleyebilecek gönüllülere bağlı değildir. Veriler tek bir README yerine yapılandırılmıştır; böylece her gün otomatik olarak doğrulanabilir, puanlanabilir ve test edilebilir. Ayrıca her şey açık kaynaklı ve CC BY-SA lisanslı olduğundan topluluk onu her zaman kopyalayabilir, kontrol edebilir ve iyileştirebilir.

## Farkı ne

**Her kural herkese açıktır.** Her kategoride 1'den 3'e kadar ağırlığa sahip kısa bir soru listesi vardır. Sorular, her yanıtın anlamı ve nasıl doğrulanacağı [`criteria/`](criteria/) klasöründe yer alır. Bkz. [kriterler](https://privacyratings.com/criteria/).

**Her yanıtın kanıtı vardır.** Bir "evet" veya "kısmen" yanıtı, herkesin kontrol edebileceği bir kaynağa bağlantı vermelidir: dokümantasyon, kaynak kodu, lisans dosyası veya denetim raporu. Kanıtı olmayan her şey "bilinmiyor" sayılır ve sıfır puan alır. Bir kayıt, ancak yanıtlarının yeterli bir kısmı kanıtla desteklendiğinde harf notu alır.

**Yalnızca listeler değil, puanlar.** Her kayıt 0 ile 100 arasında bir puan alır; böylece okuyucular hizmetlerin birbiriyle nasıl karşılaştırıldığını ve her birinin tam olarak nerede eksik kaldığını görebilir.

**Otomatik güvenlik testleri.** Barındırılan hizmetler Qualys SSL Labs, Mozilla HTTP Observatory ve Internet.nl ile (e-posta sağlayıcıları için Internet.nl e-posta testi dahil) belirli bir zamanlamayla test edilir. Sonuçlar depoya kaydedilir ve her sayfadan bağlantı verilir. Bkz. [SCANS.md](SCANS.md).

**Açıkça gösterilen yargı yetkisi.** Her sayfa şirketin merkezinin nerede olduğunu, o ülkenin Five, Nine veya Fourteen Eyes içinde olup olmadığını, GDPR'nin geçerli olup olmadığını ve ABD CLOUD Act'in ona ulaşıp ulaşmadığını gösterir. Yargı yetkisi gösterilir ancak puanlanmaz, çünkü bir sağlayıcının neleri teslim edebileceği çoğunlukla neyi sakladığına ve anahtarların kimde olduğuna bağlıdır. Bkz. [yargı bölgeleri](https://privacyratings.com/jurisdictions/) ve [CLOUD Act](https://privacyratings.com/cloud-act/).

**Her şey GitHub'da gerçekleşir.** Öneriler ve düzeltmeler GitHub issue'larıdır. Değişiklikler pull request'lerdir. Tartışmalar GitHub Discussions'da yapılır. Ayrı bir forum, sohbet sunucusu veya hesap sistemi yoktur. Her değerlendirmedeki her değişikliğin herkese açık bir geçmişi vardır.

**Açık veri.** Değerlendirmeler düz Markdown ve YAML dosyalarıdır ve tüm veri seti JSON olarak yayımlanır. İçerik CC BY-SA 4.0 ile lisanslanmıştır; böylece herkes onu yeniden kullanabilir.

**Editörün seçimleri açıkça belirtilir.** Bakımcılar her kategori için bir veya iki seçim yapar ve her birini açıklar. Seçimler ayrı olarak gösterilir ve puanları asla değiştirmez; böylece okuyucu editöryel değerlendirmeyi ölçülen sonuçlardan her zaman ayırt edebilir.

## Bakımını kim yapıyor

Privacy Ratings, burada da değerlendirilen gizlilik odaklı bir e-posta hizmeti olan [Forward Email](https://forwardemail.net) tarafından desteklenir, finanse edilir ve sürdürülür. Bu, projenin uzun vadede sürdürülmesini sağlar; ancak aynı zamanda bir çıkar çatışmasıdır, bu yüzden açıkça ele alınır:

- Forward Email, diğer tüm e-posta sağlayıcılarıyla aynı kriterlere göre puanlanır.
- Kaydı bir açıklama taşır; bakımcılarla başka bir bağlantısı olan her kayıt da öyle.
- Bağlantılı bir kaydın puanını yükselten değişiklikler kanıta bağlantı vermeli ve birleştirilmeden önce kamuoyu incelemesi için açık kalmalıdır. Bkz. [GOVERNANCE.md](GOVERNANCE.md).
- Satış ortaklığı bağlantısı, ücretli yerleştirme veya sponsorluk yoktur. Doğrulama, yönlendirme parametreleri içeren bağlantıları reddeder.

Bir değerlendirme yanlış görünüyorsa, kanıtla birlikte bir issue veya pull request açın. Sürecin tamamı bundan ibarettir.

## Katkıda bulunanlar

Birçok kayıt ilk olarak CC0 kapsamında yayımlanan [Awesome Privacy](https://github.com/lissy93/awesome-privacy) listesinden alınmıştır. Posta sunucusu barındırma verileri [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers) listesinden gelir.

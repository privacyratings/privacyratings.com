<!-- source: e696176d1bdb -->
# Yönetişim

Kararların nasıl alındığı, editörün seçimlerinin nasıl yapıldığı ve çıkar çatışmalarının nasıl ele alındığı.

## Bakımcılar

Bakımcılar pull request'leri inceler ve birleştirir, issue'ları önceliklendirir ve Discussions'ı yönetir. Bakımcılar [`.github/CODEOWNERS`](.github/CODEOWNERS) dosyasında listelenir. Doğru ve iyi kaynaklandırılmış katkılardan oluşan bir geçmişe sahip olan herkes bakımcı olabilir.

## Değişiklikler nasıl kabul edilir

1. Tüm değişiklikler bir pull request üzerinden yapılır. Bakımcılar dahil hiç kimse değerlendirme değişikliklerini doğrudan `main` dalına göndermez.
2. Her pull request `npm test` kontrolünü (doğrulama ve derleme) geçmelidir.
3. En az bir bakımcı pull request'i onaylar.
4. Yanıtlar birincil bir kaynaktan kanıt gerektirir: resmî dokümantasyon, kaynak kodu, lisans dosyaları, yayımlanmış denetim raporları veya tekrarlanabilir testler. İncelemeler, blog yazıları ve ayrıntı içermeyen pazarlama iddiaları kanıt değildir.
5. Kaynaklar çeliştiğinde en güncel birincil kaynak esas alınır. Durum hâlâ belirsizse yanıt "bilinmiyor" olur.

## Kriter değişiklikleri

Kriterler her puanı belirler; bu nedenle `criteria/` üzerindeki değişiklikler daha fazla özen gerektirir:

- Önce bir "Criteria change" issue'su veya bir Discussion açın.
- Pull request, kamuoyu yorumları için en az 7 gün açık kalır.
- İki bakımcının onayı gerekir.
- Kriter kimlikleri yayımlandıktan sonra asla yeniden adlandırılmaz. Bir kriter, nedenini açıklayan bir pull request ile kaldırılarak kullanımdan çıkarılır.

## Editörün seçimleri

- Her kategoride en fazla iki seçim olabilir.
- Her seçimin, tercihi sade bir dille açıklayan bir `pick_reason` alanı olmalıdır.
- Her kategoride en fazla iki seçim bulunur ve bunlar `pick: 1` ve `pick: 2` ile sıralanır.
- Seçimler editöryeldir. Ayrı olarak gösterilir ve puanları asla değiştirmez.
- Herkes "Picks" Discussions kategorisinde bir seçime itiraz edebilir. İtirazlar herkese açık olarak yanıtlanır.

## Çıkar çatışmaları

Privacy Ratings, Forward Email'in arkasındaki ekip tarafından sürdürülmektedir. Bakımcılarla bağlantılı kayıtlar "bağlantılı kayıtlar" olarak adlandırılır. Şu anda bu, Forward Email anlamına gelir.

Bağlantılı kayıtlar için kurallar:

- Her bağlantılı kayıt, sayfasının üst kısmında gösterilen bir `disclosure` (açıklama) taşır.
- Bağlantılı bir kaydın puanını yükselten veya onu editörün seçimi yapan bir pull request, değiştirilen her yanıt için kanıta bağlantı vermeli ve birleştirilmeden önce en az 7 gün açık kalmalıdır.
- Bağlantılı bir kaydın puanını geçerli kanıtlarla düşüren bir pull request, diğerleri gibi birleştirilir.
- Bakımcılar, kendilerinin veya işverenlerinin mali ya da kişisel bağlantısı olan her kayda bir açıklama eklemelidir.

## Para

- Satış ortaklığı bağlantısı yoktur. Doğrulama, yönlendirme veya izleme parametreleri içeren URL'leri reddeder.
- Ücretli yerleştirme, sponsorlu kayıt veya ücretli inceleme yoktur.
- Üreticiler de herkes gibi kanıtlarla düzeltme gönderebilir ve üretici olduklarını belirtmek zorundadır.

## Moderasyon

Issue'lar, pull request'ler ve Discussions, [Davranış Kuralları](CODE_OF_CONDUCT.md)'na tabidir. Bakımcılar taciz edici, konu dışı veya tanıtım amaçlı yorumları kilitleyebilir veya gizleyebilir.

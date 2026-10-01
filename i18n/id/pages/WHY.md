<!-- source: 206790af40f5 -->
# Mengapa Privacy Ratings ada

Panduan privasi membantu jutaan orang memilih aplikasi dan layanan yang lebih baik. Banyak di antaranya melakukan pekerjaan yang sangat baik. Namun, sebagian besar memiliki kelemahan yang sama:

- **Aturan yang tidak jelas.** Sebuah layanan dicantumkan atau tidak, dan alasannya ada di utas forum, diskusi privat, atau sama sekali tidak dipublikasikan.
- **Hanya lulus atau gagal.** Sebuah daftar menyatakan "direkomendasikan" atau tidak menyatakan apa pun. Daftar itu tidak menunjukkan seberapa dekat sesuatu dengan kriteria, atau apa yang akan mengubah hasilnya.
- **Klaim tanpa pemeriksaan.** Deskripsi menyebut "terenkripsi" atau "tanpa log" tanpa menautkan ke apa pun yang dapat diverifikasi pembaca.
- **Tanpa pengujian.** Layanan yang di-host jarang diperiksa keamanan dasarnya, seperti pengaturan TLS, header keamanan, atau autentikasi email.
- **Platform terpisah.** Usulan dan perdebatan berlangsung di forum atau server obrolan yang memerlukan akun dan moderasinya sendiri, terpisah dari konten yang sebenarnya.
- **Lambat berubah.** Ketika sebuah produk berubah, daftar sering kali tetap usang karena pembaruannya bergantung pada segelintir orang.

Privacy Ratings dibangun untuk memperbaiki masing-masing masalah ini.

## Dari daftar awesome menjadi sumber daya yang terpelihara

Banyak panduan ini berawal sebagai daftar di GitHub. Format daftar "awesome", yang dimulai oleh [Sindre Sorhus](https://github.com/sindresorhus/awesome), memudahkan siapa saja untuk memublikasikan daftar kurasi, dan ribuan daftar awesome-sesuatu menyusul, banyak di antaranya merupakan fork satu sama lain. Daftar seperti [Awesome Privacy](https://github.com/lissy93/awesome-privacy) melakukan pekerjaan yang berharga, dan banyak entri di sini pertama kali dicantumkan di sana.

Format ini memiliki kelemahan: sebagian besar daftar bergantung pada satu atau dua sukarelawan. Ketika seorang pengelola berhenti, daftar menjadi sepi, diarsipkan, atau terpecah menjadi fork yang masing-masing perlahan menjadi usang. Pembaca tidak dapat mengetahui salinan mana yang terkini, dan tidak ada apa pun dalam daftar yang diuji atau diberi skor.

**Privacy Ratings didukung dan dijalankan oleh sebuah bisnis, [Forward Email](https://forwardemail.net).** Proyek ini tidak bergantung pada sukarelawan yang mungkin pergi atau mengarsipkan repositori. Datanya terstruktur, bukan satu README, sehingga dapat divalidasi, diberi skor, dan diuji secara otomatis setiap hari. Dan karena semuanya bersumber terbuka dan berlisensi CC BY-SA, komunitas selalu dapat menyalin, memeriksa, dan memperbaikinya.

## Apa yang berbeda

**Setiap aturan bersifat publik.** Setiap kategori memiliki daftar pendek pertanyaan dengan bobot 1 sampai 3. Pertanyaan, arti setiap jawaban, dan cara memverifikasinya semuanya ada di folder [`criteria/`](criteria/). Lihat [kriterianya](https://privacyratings.com/criteria/).

**Setiap jawaban memiliki bukti.** Jawaban "ya" atau "sebagian" harus menautkan ke sumber yang dapat diperiksa siapa saja: dokumentasi, kode sumber, berkas lisensi, atau laporan audit. Apa pun tanpa bukti dihitung sebagai "tidak diketahui" dan mendapat skor nol. Sebuah entri hanya mendapat nilai huruf jika cukup banyak jawabannya didukung oleh bukti.

**Skor, bukan sekadar daftar.** Setiap entri mendapat skor dari 0 sampai 100, sehingga pembaca dapat melihat perbandingan antarlayanan dan di mana tepatnya masing-masing layanan masih kurang.

**Uji keamanan otomatis.** Layanan yang di-host diuji secara terjadwal dengan Qualys SSL Labs, Mozilla HTTP Observatory, dan Internet.nl (termasuk uji email Internet.nl untuk penyedia email). Hasilnya disimpan di repositori dan ditautkan dari setiap halaman. Lihat [SCANS.md](SCANS.md).

**Yurisdiksi secara terbuka.** Setiap halaman menampilkan tempat perusahaan berbasis, apakah negara tersebut termasuk Five, Nine, atau Fourteen Eyes, apakah GDPR berlaku, dan apakah CLOUD Act AS menjangkaunya. Yurisdiksi ditampilkan tetapi tidak diberi skor, karena apa yang dapat diserahkan penyedia sebagian besar bergantung pada apa yang disimpannya dan siapa yang memegang kuncinya. Lihat [yurisdiksi](https://privacyratings.com/jurisdictions/) dan [CLOUD Act](https://privacyratings.com/cloud-act/).

**Semuanya berlangsung di GitHub.** Usulan dan koreksi berupa issue GitHub. Perubahan berupa pull request. Perdebatan berlangsung di GitHub Discussions. Tidak ada forum, server obrolan, atau sistem akun terpisah. Setiap perubahan pada setiap penilaian memiliki riwayat publik.

**Data terbuka.** Penilaian berupa berkas Markdown dan YAML biasa, dan seluruh kumpulan data dipublikasikan sebagai JSON. Konten berlisensi CC BY-SA 4.0, sehingga siapa saja dapat menggunakannya kembali.

**Pilihan ditandai sebagai pilihan.** Pengelola memilih satu atau dua pilihan per kategori dan menjelaskan masing-masing. Pilihan ditampilkan secara terpisah dan tidak pernah mengubah skor, sehingga pembaca selalu dapat membedakan penilaian editorial dari hasil yang diukur.

## Siapa yang mengelolanya

Privacy Ratings didukung, didanai, dan dikelola oleh [Forward Email](https://forwardemail.net), layanan email yang berfokus pada privasi dan juga dinilai di sini. Hal ini menjaga proyek tetap terkelola untuk jangka panjang, tetapi juga merupakan konflik kepentingan, sehingga ditangani secara terbuka:

- Forward Email diberi skor dengan kriteria yang sama seperti setiap penyedia email lainnya.
- Entrinya memuat pengungkapan, demikian pula setiap entri yang memiliki hubungan lain dengan pengelola.
- Perubahan yang menaikkan skor entri terafiliasi harus menautkan bukti dan tetap terbuka untuk tinjauan publik sebelum digabungkan. Lihat [GOVERNANCE.md](GOVERNANCE.md).
- Tidak ada tautan afiliasi, penempatan berbayar, atau sponsor. Validasi menolak tautan dengan parameter rujukan.

Jika sebuah penilaian tampak salah, buka issue atau pull request dengan bukti. Itulah keseluruhan prosesnya.

## Kredit

Banyak entri pertama kali dicantumkan dari [Awesome Privacy](https://github.com/lissy93/awesome-privacy), yang dirilis di bawah CC0. Data hosting server email berasal dari [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).

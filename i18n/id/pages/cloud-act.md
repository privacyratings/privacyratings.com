<!-- source: 2f40b8f7e8ef -->
# Apa itu CLOUD Act?

**Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** adalah undang-undang AS yang menjawab satu pertanyaan: dapatkah otoritas AS memperoleh data dari perusahaan AS jika data tersebut disimpan di negara lain? Jawabannya adalah ya.

## Apa yang dilakukannya

1. **Lokasi tidak berpengaruh.** Penyedia yang tunduk pada yurisdiksi AS harus menyerahkan data yang berada dalam "kepemilikan, penguasaan, atau kendalinya" sebagai tanggapan atas proses hukum AS yang sah, di mana pun data tersebut disimpan di dunia. [Sumber: Departemen Kehakiman AS](https://www.justice.gov/criminal/cloud-act-resources)
2. **Perjanjian dengan negara lain.** AS dapat menandatangani perjanjian akses data yang memungkinkan pemerintah asing tepercaya meminta data langsung dari penyedia AS untuk kejahatan serius, tanpa melalui proses perjanjian bantuan hukum timbal balik (MLAT) yang lebih lambat. [Sumber: Departemen Kehakiman AS](https://www.justice.gov/criminal/cloud-act-resources)
3. **Cara untuk menolak.** Penyedia dapat meminta pengadilan membatalkan atau mengubah sebuah permintaan jika bertentangan dengan hukum negara lain yang memiliki perjanjian.

Perjanjian telah berlaku dengan **Britania Raya** dan **Australia**. Negosiasi telah diumumkan dengan **Kanada** dan **Uni Eropa**. [Sumber: Departemen Kehakiman AS](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Apa yang tidak dilakukannya

- Undang-undang ini tidak menciptakan kewenangan pengawasan baru atau menghapus kebutuhan akan surat perintah. Otoritas AS tetap memerlukan proses hukum yang sah, dan isi komunikasi umumnya memerlukan surat perintah penggeledahan.
- Undang-undang ini tidak memaksa penyedia mendekripsi data yang tidak dapat didekripsinya. Cakupannya adalah data yang dimiliki penyedia. Data yang dienkripsi dengan kunci yang hanya dipegang pengguna tetap terenkripsi.
- Undang-undang ini tidak hanya berlaku untuk pusat data di AS. Memilih lokasi server di Eropa tidak membantu jika perusahaan yang menjalankannya tunduk pada yurisdiksi AS.

## Siapa yang terdampak

Setiap perusahaan yang tunduk pada yurisdiksi AS: Google, Microsoft, Apple, Amazon, Cloudflare, dan layanan AS yang lebih kecil, termasuk Forward Email. Lihat [semua layanan yang dinilai yang berbasis di Amerika Serikat](/jurisdictions/united-states/).

Undang-undang ini juga dapat menjangkau **layanan non-AS yang menyimpan data di penyedia cloud AS**, karena penyedia cloud itu sendiri dapat menerima permintaan. Itulah sebabnya pertanyaan yang berguna bukan hanya "di mana perusahaannya?" tetapi juga "data apa yang ada, dan siapa yang memegang kuncinya?"

## Mengapa enkripsi dan data minimal lebih penting daripada lokasi

Undang-undang berubah, dan setiap negara memiliki cara untuk memaksa penyerahan data. Yang paling penting adalah apa yang **dapat** diserahkan penyedia:

| Situasi | Yang dapat dijangkau oleh permintaan |
| --- | --- |
| Email disimpan dalam teks biasa | Semua isi kotak surat |
| Email dienkripsi saat disimpan dengan kunci yang dipegang penyedia | Semuanya, karena penyedia dapat mendekripsinya |
| Email dienkripsi dengan kunci yang diturunkan dari kata sandi pengguna | Detail akun dan data koneksi, bukan isi pesan |
| Tidak ada log yang disimpan | Tidak ada apa pun tentang aktivitas |

Contoh nyata:

- **Proton (Swiss, di luar semua pengaturan Eyes)** mematuhi 8.313 dari 9.301 perintah hukum Swiss dalam laporan tahunan terbarunya, dengan memberikan informasi akun yang dimilikinya. [Sumber: laporan transparansi Proton](https://proton.me/legal/transparency)
- **Proton VPN (perusahaan yang sama, negara yang sama)** tidak mematuhi satu pun, karena tidak menyimpan log. [Sumber: laporan transparansi Proton](https://proton.me/legal/transparency)
- **Tuta (Jerman)** dapat diperintahkan oleh hakim Jerman untuk menyerahkan kotak surat atau memantaunya secara real time. Email terenkripsi end-to-end tetap terenkripsi. [Sumber: laporan transparansi Tuta](https://tuta.com/blog/transparency-report)

Perusahaan yang sama di negara yang sama mendapat hasil yang sangat berbeda tergantung pada data apa yang ada. Itulah sebabnya Privacy Ratings menampilkan yurisdiksi di setiap halaman tetapi memberi skor pada apa yang benar-benar dilakukan penyedia. Lihat [cara yurisdiksi ditangani](/jurisdictions/).

## Bagaimana CLOUD Act berlaku bagi Forward Email

Forward Email berbasis di Amerika Serikat dan tunduk pada CLOUD Act. [Whitepaper teknisnya](https://forwardemail.net/technical-whitepaper.pdf) menjelaskan bagaimana desainnya membatasi apa yang dapat dijangkau oleh sebuah permintaan:

- **Kotak surat terenkripsi.** Setiap kotak surat adalah berkas SQLite yang dienkripsi secara individual. Whitepaper tersebut menyatakan bahwa Forward Email tidak dapat mengakses isi pesan.
- **Tidak ada pencatatan isi atau metadata email ke disk.** Forward Email tidak menyimpan catatan tentang kepada siapa pengguna menulis.
- **Data terbatas.** Yang dapat diungkapkan adalah informasi akun dasar (seperti alamat email akun, tanggal pendaftaran, dan detail pembayaran) serta log alamat IP terbatas yang mungkin disimpan sementara untuk keamanan dan pencegahan penyalahgunaan.
- **Hanya proses hukum yang sah.** Permintaan memerlukan subpoena, perintah pengadilan, atau surat perintah penggeledahan. Permintaan dari luar AS harus melalui pengadilan AS, perjanjian bantuan hukum timbal balik, atau perjanjian CLOUD Act yang memenuhi persyaratan hukum AS.
- **Pemberitahuan dan gugatan.** Pengguna diberi tahu jika hukum mengizinkan, dan permintaan yang terlalu luas digugat.

Forward Email mengelola Privacy Ratings. Penilaiannya menggunakan kriteria yang sama seperti setiap penyedia lainnya. Lihat [penilaian Forward Email](/email-providers/forward-email/) dan [aturan tata kelola](/governance/).

## Bacaan lebih lanjut

- [Departemen Kehakiman AS: sumber daya CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: Berbagi data lintas batas berdasarkan CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: Pengawasan Section 702](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)

<!-- source: f2ab6af4acf3 -->
# Berkontribusi

Semuanya berlangsung di GitHub. Tidak ada forum, obrolan, atau akun lain yang perlu didaftarkan.

| Untuk melakukan ini | Gunakan |
| --- | --- |
| Mengusulkan aplikasi atau layanan | [Buka issue "Suggest"](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Melaporkan jawaban yang salah atau tautan yang rusak | [Buka issue "Correction"](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), atau gunakan "Laporkan koreksi" di halaman penilaian mana pun |
| Mengusulkan atau mengubah kriteria | [Buka issue "Criteria change"](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Memperbaikinya sendiri | Gunakan "Sunting di GitHub" di halaman penilaian mana pun, atau buka pull request |
| Mengajukan pertanyaan atau memperdebatkan sebuah pilihan | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Menyunting penilaian

Setiap aplikasi atau layanan adalah satu berkas Markdown di `ratings/<category>/<name>.md`. Bagian atas berkas berupa YAML. Apa pun di bawahnya adalah catatan Markdown opsional yang ditampilkan di halaman.

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

Aturan (diperiksa secara otomatis oleh `npm test`):

- `answer` adalah salah satu dari `yes`, `partial`, `no`, `unknown`, atau `n/a`.
- `yes` dan `partial` memerlukan tautan `evidence`. `no` memerlukan `note` atau `evidence`.
- Bukti harus berupa sumber primer: dokumentasi resmi, kode sumber, berkas lisensi, laporan audit, atau pengujian yang dapat direproduksi. Bukan ulasan, posting forum, atau halaman pemasaran tanpa detail.
- Tautan harus berupa `https://` dan tidak boleh berisi parameter rujukan atau pelacakan.
- Kriteria otomatis (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) diisi oleh pengujian. Jangan mengaturnya secara manual.
- `no_trackers` juga diperiksa oleh [uji pelacak](SCANS.md#website-trackers). Jika beranda memuat pelacak pihak ketiga, jawabannya menjadi "no", apa pun isi berkasnya.
- Hilangkan kriterium apa pun yang belum memiliki bukti. Kriterium tersebut dihitung sebagai `unknown`.
- `jurisdiction` adalah tempat perusahaan berbasis secara hukum (bukan tempat servernya berada). Tambahkan negara ke [`jurisdictions.yml`](jurisdictions.yml) jika belum ada. Setiap catatan di sana memerlukan sumber.
- Hanya pengelola yang menambahkan `pick`, `pick_reason`, dan `disclosure`. Gunakan `pick: 1` dan `pick: 2` untuk mengurutkan dua pilihan. Lihat [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` menyimpan nama yang dimiliki sebuah entri di Awesome Privacy setelah namanya diganti, sehingga impor bulanan tidak menambahkannya lagi. Untuk mengecualikan entri Awesome Privacy secara permanen, tambahkan ke [`import-skip.yml`](import-skip.yml) beserta alasannya.

Kriteria untuk setiap kategori, dan arti setiap jawaban, ada di [`criteria/`](criteria/) dan di [halaman kriteria](https://privacyratings.com/criteria/).

## Menambahkan aplikasi atau layanan

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Perintah ini membuat berkas yang mencantumkan setiap kriterium sebagai `unknown`. Isi apa yang dapat Anda buktikan, hapus sisanya, lalu jalankan `npm test`.

## Gaya penulisan

- Bahasa yang sederhana dan netral. Jelaskan apa yang dilakukan sesuatu, bukan betapa hebatnya.
- Kalimat pendek. Deskripsi tidak lebih dari 300 karakter.
- Tanpa sudut pandang orang pertama, tanpa tanggal dalam teks, tanpa klaim pemasaran.
- Sebut nama sesuatu seperti yang digunakan vendor.

## Menjalankan situs secara lokal

Memerlukan Node.js 18 atau yang lebih baru.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Menambahkan halaman

Letakkan berkas Markdown dengan `title` dan `description` di [`pages/`](pages/). Berkas tersebut dipublikasikan di `/<file-name>/` beserta salinan Markdown, data terstruktur, dan entri peta situs.

## Menambahkan kategori atau kriterium

1. Tambahkan kategori ke [`categories.yml`](categories.yml) di bawah grup yang tepat.
2. Secara opsional, tambahkan `criteria/<category-id>.yml` dengan kriteria khusus kategori. Salin formatnya dari berkas yang sudah ada.
3. Buat `ratings/<category-id>/` dan tambahkan entri.
4. Perubahan kriteria mengikuti aturan peninjauan di [GOVERNANCE.md](GOVERNANCE.md).

## Terjemahan

Situs ini diterbitkan dalam 25 bahasa. Bahasa Inggris adalah sumbernya, dan setiap bahasa lain berada di `i18n/<code>/`:

| Berkas | Isi |
| --- | --- |
| `ui.json` | Teks antarmuka: judul, tombol, dan kalimat dengan `{placeholders}` |
| `data.json` | Nama kategori, kriteria, panduan, dan catatan negara |
| `entries.json` | Deskripsi penilaian, alasan pilihan, dan pengungkapan |
| `pages/*.md` | Dokumen utuh seperti dokumen ini |

Setiap berkas JSON memetakan teks bahasa Inggris ke terjemahannya. Saat teks bahasa Inggris berubah, terjemahan lama tidak lagi cocok, sehingga teks bahasa Inggris ditampilkan sampai seseorang menerjemahkan teks baru. Konten yang usang tidak pernah ditampilkan.

1. Jalankan `npm run build`. Perintah ini menulis daftar bahasa Inggris terbaru ke `i18n/source/`.
2. Jalankan `npm run i18n:check` untuk melihat apa yang belum ada di setiap bahasa, atau `node scripts/i18n-check.js de ui` untuk detail satu bahasa dan satu berkas.
3. Tambahkan atau perbaiki terjemahan, dan pertahankan setiap `{placeholder}` persis seperti aslinya.
4. Untuk dokumen, salin teks bahasa Inggris dari `i18n/source/pages/`, pertahankan baris pertamanya (`<!-- source: … -->`, yang mengaitkan terjemahan dengan versi teks bahasa Inggris tersebut), lalu terjemahkan sisanya.

Catatan dan bukti per jawaban tetap dalam bahasa Inggris. Perbandingan dan sebagian besar penilaian tunggal hanya tersedia dalam bahasa Inggris; pilihan, kategori, panduan, alternatif, daftar sumber terbuka, yurisdiksi, dan dokumen diterjemahkan. Menu bahasa dan pengalihan otomatis menggunakan tautan `hreflang` di setiap halaman.

## Daftar periksa pull request

- [ ] `npm test` lulus.
- [ ] Setiap jawaban yang diubah menautkan ke bukti.
- [ ] Jika Anda bekerja untuk, atau terhubung dengan, layanan yang Anda ubah, Anda telah menyatakannya dalam pull request.

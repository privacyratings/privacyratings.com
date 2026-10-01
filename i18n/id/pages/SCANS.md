<!-- source: 16559ce369ce -->
# Uji otomatis

Layanan yang di-host (kategori dengan `type: service`) diuji secara otomatis jika berkas penilaiannya memiliki `domain`. Penyedia email dan layanan penerusan dengan `mail_domain` juga mendapat uji email.

| Uji | Yang diperiksa | Kriterium | Ya | Sebagian | Tidak |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | Versi TLS, cipher, sertifikat, dan kelemahan TLS yang diketahui | `tls` | A+ atau A | A- atau B | C atau lebih rendah |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Header keamanan seperti CSP, HSTS, dan X-Frame-Options, serta flag cookie | `security_headers` | A+ atau A | A-, B+, atau B | B- atau lebih rendah |
| [Uji situs web Internet.nl](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS, dan opsi keamanan | `web_standards` | 90% atau lebih | 70% sampai 89% | Di bawah 70% |
| [Uji email Internet.nl](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS, dan DANE untuk domain email | `mail_standards` | 90% atau lebih | 70% sampai 89% | Di bawah 70% |
| [Hardenize](https://www.hardenize.com) | Konfigurasi keamanan DNS, email, dan web | Hanya ditautkan | | | |

## Standar email

Penyedia email dan layanan penerusan dengan `mail_domain` juga mendapat pengujian berikut, yang dijalankan oleh [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Uji | Yang diperiksa | Kriterium | Ya |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, kebijakan DMARC, mode MTA-STS (RFC 8461), TLS-RPT (RFC 8460), validasi DNSSEC, DANE TLSA pada setiap host MX (RFC 7672), serta BIMI dan record SRV RFC 6186 sebagai informasi | `transport_security` | Keenamnya diberlakukan |
| IMAP `CAPABILITY` | TLS implisit pada 993 (RFC 8314), IMAP4rev1 atau IMAP4rev2, IDLE. Beralih ke STARTTLS pada 143 jika perlu | `imap_standards` | TLS implisit, IMAP4rev1/rev2, dan IDLE |
| POP3 `CAPA` | TLS implisit pada 995, CAPA (RFC 2449), UIDL. Beralih ke STLS pada 110 jika perlu | `pop3_standards` | TLS implisit, CAPA, dan UIDL |
| SMTP `EHLO` | Pengiriman melalui TLS implisit pada 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Beralih ke STARTTLS pada 587 jika perlu | `smtp_standards` | TLS implisit dan keempat ekstensi |

Nama server diambil dari `imap_host`, `pop3_host`, dan `smtp_host` di berkas penilaian, atau dari record SRV RFC 6186 milik penyedia. Atur host ke `false` jika penyedia tidak menawarkan protokol tersebut. Kapabilitas adalah apa yang diumumkan setiap server sebelum login, dan daftar lengkapnya ditampilkan di setiap halaman penilaian.

## Pelacak situs web

Setiap entri yang memiliki situs web, termasuk aplikasi, mendapat uji pelacak yang dijalankan oleh [`scripts/trackers.js`](scripts/trackers.js). Uji ini memuat beranda tanpa menjalankan JavaScript dan membandingkan setiap host skrip, frame, gambar, dan stylesheet, serta kode inline, dengan daftar layanan pelacakan dan analitik yang diketahui.

| Ditemukan | Pengaruh pada `no_trackers` |
| --- | --- |
| Pelacak pihak ketiga seperti Google Analytics, Google Tag Manager, Meta Pixel, Hotjar, atau HubSpot | Jawaban menjadi "tidak", apa pun isi berkas penilaian |
| Analitik tanpa cookie (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | "Ya" menjadi "sebagian" |
| Font, sematan, pelaporan galat, obrolan dukungan, atau alat persetujuan | Dicantumkan di halaman, tidak diberi skor |
| Tidak ada | Jawaban di berkas penilaian yang digunakan |

Jika situs webnya adalah halaman di layanan hosting kode atau toko aplikasi (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play, dan sejenisnya), uji dilewati, karena halaman tersebut tidak dijalankan oleh proyek.

Uji ini hanya melihat pelacak yang tertulis di dalam halaman itu sendiri. Pelacak yang ditambahkan kemudian oleh skrip, dan telemetri di dalam aplikasi, tetap memerlukan bukti di berkas penilaian, seperti kebijakan privasi atau laporan [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS dan ARC tidak dapat dilihat dari luar tanpa mengirim email, sehingga keduanya merupakan kriteria yang dijawab dengan bukti, bukan dengan pengujian.

Pemeriksaan otomatis yang belum dijalankan ditampilkan sebagai "Belum diuji" dan tidak dihitung dalam skor, sehingga penyedia tidak pernah dikurangi nilainya karena uji yang belum dilakukan.

Untuk SSL Labs, nilai terlemah di antara semua alamat IP sebuah domain yang digunakan.

Hardenize tidak lagi menawarkan API publik, sehingga setiap halaman menautkan ke laporan publiknya alih-alih memberinya skor.

## Jadwal

[Workflow Scan](.github/workflows/scan.yml) berjalan setiap hari dan menguji 40 entri dengan hasil tertua (Internet.nl mengikuti batasnya sendiri, lihat di bawah), sehingga setiap layanan diuji secara rutin tanpa membebani API gratis secara berlebihan. Hasilnya disimpan ke [`scans/`](scans/) sebagai JSON, di-commit ke repositori, dan dipublikasikan bersama situs. Setiap halaman menampilkan kapan pengujiannya terakhir dijalankan.

Uji yang gagal mempertahankan hasil sebelumnya dan mencatat galatnya, sehingga gangguan sementara tidak mengubah skor.

### Batas Internet.nl

API batch Internet.nl digunakan sesuai dengan [ketentuan penggunaannya](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md):

- Paling banyak 2 permintaan batch dalam setiap 7 hari. Uji situs web dan uji email adalah permintaan terpisah, sehingga satu putaran penuh menggunakan keduanya.
- Paling banyak 5000 domain per permintaan. Jika ada lebih banyak domain yang memiliki uji ini, domain dengan hasil yang belum ada atau tertua didahulukan dan sisanya menunggu permintaan berikutnya.
- Tidak ada permintaan untuk satu domain, sehingga `--only` melewati Internet.nl.

Setiap permintaan dicatat di `scans/internetnl-requests.json`, yang di-commit bersama hasilnya bahkan saat sebuah eksekusi gagal. Eksekusi yang mendapati batas mingguan sudah tercapai melewati Internet.nl dan mempertahankan hasil yang ada. Batch memakan waktu berjam-jam, sehingga status permintaan diperiksa setiap 5 menit, dan permintaan yang masih berjalan saat eksekusi berakhir diambil oleh eksekusi berikutnya alih-alih dikirim ulang. Internet.nl mengabaikan `--limit`, dan hanya eksekusi di branch default yang menggunakan kredensial Internet.nl, sehingga semua eksekusi berbagi satu catatan.

Situs web ini menggunakan ulang hasil pengujian yang disediakan oleh alat uji [Internet.nl](https://internet.nl).

## Konfigurasi

Semua pengaturan adalah secret repositori opsional (Settings › Secrets and variables › Actions):

| Secret | Tujuan |
| --- | --- |
| `SSLLABS_EMAIL` | Email yang terdaftar di [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Tanpanya, API v3 yang digunakan. Pendaftaran memerlukan alamat email organisasi. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Akun untuk [API batch Internet.nl](https://internet.nl/faqs/batch-and-dashboard/). Tanpanya, halaman menautkan ke uji publik Internet.nl dan kriteria Internet.nl tetap "tidak diketahui". |
| `INTERNETNL_API` | URL dasar API batch, untuk instans [Internet.nl yang di-host sendiri](https://github.com/internetstandards/Internet.nl). Default-nya `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory tidak memerlukan akun. Data lisensi GitHub menggunakan token bawaan workflow.

## Menjalankan pengujian secara lokal

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Domain mana yang diuji

Kolom `domain` sebaiknya berisi situs web utama atau aplikasi web tempat orang login, misalnya `mail.example.com`, bukan subdomain pemasaran di host yang berbeda. Vendor dapat mengusulkan domain yang lebih akurat melalui pull request.

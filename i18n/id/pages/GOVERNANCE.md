<!-- source: e696176d1bdb -->
# Tata kelola

Cara keputusan dibuat, cara pilihan ditentukan, dan cara konflik kepentingan ditangani.

## Pengelola

Pengelola meninjau dan menggabungkan pull request, memilah issue, dan memoderasi Discussions. Pengelola tercantum di [`.github/CODEOWNERS`](.github/CODEOWNERS). Siapa saja dapat menjadi pengelola setelah memiliki rekam jejak kontribusi yang akurat dan bersumber jelas.

## Cara perubahan diterima

1. Semua perubahan melalui pull request. Tidak ada seorang pun, termasuk pengelola, yang mendorong perubahan penilaian langsung ke `main`.
2. Setiap pull request harus lulus `npm test` (validasi dan build).
3. Setidaknya satu pengelola menyetujui pull request.
4. Jawaban memerlukan bukti dari sumber primer: dokumentasi resmi, kode sumber, berkas lisensi, laporan audit yang dipublikasikan, atau pengujian yang dapat direproduksi. Ulasan, posting blog, dan klaim pemasaran tanpa detail bukanlah bukti.
5. Jika sumber-sumber saling bertentangan, sumber primer terbaru yang berlaku. Jika masih belum jelas, jawabannya adalah "tidak diketahui".

## Perubahan kriteria

Kriteria menentukan setiap skor, sehingga perubahan pada `criteria/` memerlukan kehati-hatian lebih:

- Buka issue "Criteria change" atau Discussion terlebih dahulu.
- Pull request tetap terbuka setidaknya 7 hari untuk komentar publik.
- Pull request memerlukan persetujuan dari dua pengelola.
- Id kriterium tidak pernah diganti namanya setelah dipublikasikan. Pensiunkan sebuah kriterium dengan menghapusnya dalam pull request yang menjelaskan alasannya.

## Pilihan

- Setiap kategori dapat memiliki hingga dua pilihan.
- Sebuah pilihan harus memiliki `pick_reason` yang menjelaskan alasan pemilihan dengan bahasa sederhana.
- Setiap kategori memiliki paling banyak dua pilihan, diurutkan dengan `pick: 1` dan `pick: 2`.
- Pilihan bersifat editorial. Pilihan ditampilkan secara terpisah dan tidak pernah mengubah skor.
- Siapa saja dapat menggugat sebuah pilihan di kategori Discussions "Picks". Gugatan dijawab secara publik.

## Konflik kepentingan

Privacy Ratings dikelola oleh tim di balik Forward Email. Entri yang terhubung dengan pengelola adalah "entri terafiliasi". Saat ini, itu berarti Forward Email.

Aturan untuk entri terafiliasi:

- Setiap entri terafiliasi memuat `disclosure` yang ditampilkan di bagian atas halamannya.
- Pull request yang menaikkan skor entri terafiliasi, atau menjadikannya pilihan, harus menautkan bukti untuk setiap jawaban yang diubah dan tetap terbuka setidaknya 7 hari sebelum digabungkan.
- Pull request yang menurunkan skor entri terafiliasi dengan bukti yang sah digabungkan seperti pull request lainnya.
- Pengelola harus menambahkan pengungkapan pada setiap entri yang memiliki hubungan finansial atau pribadi dengan mereka atau pemberi kerja mereka.

## Uang

- Tidak ada tautan afiliasi. Validasi menolak URL dengan parameter rujukan atau pelacakan.
- Tidak ada penempatan berbayar, entri bersponsor, atau ulasan berbayar.
- Vendor dapat mengirimkan koreksi seperti orang lain, dengan bukti, dan harus menyatakan bahwa mereka adalah vendornya.

## Moderasi

Issue, pull request, dan Discussions mengikuti [Kode Etik](CODE_OF_CONDUCT.md). Pengelola dapat mengunci atau menyembunyikan komentar yang kasar, di luar topik, atau bersifat promosi.

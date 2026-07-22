# 🏰 01-3: Disney Island Tariff (Pseudocode)

## 🎯 Konsep yang Dilatih
Menyusun **algoritma percabangan bertingkat dengan syarat ganda** (umur **dan** tinggi) dalam bentuk pseudocode — sebelum nanti diubah menjadi kode JavaScript di soal `04-5`.

## 📖 Cerita
Wahana bermain **Disney Island** menentukan tarif tiket berdasarkan umur dan tinggi seorang anak. Tulislah **pseudocode** (bukan JavaScript) yang menerima `age` dan `height`, lalu menampilkan tarif yang tepat.

## 📊 Aturan Tarif
| Umur | Tarif Dasar | Tambahan |
|---|---|---|
| ≤ 1 tahun | — | Tampilkan `Dilarang masuk` |
| 2 – 3 tahun | 30.000 | +10.000 jika tinggi > 70 cm |
| 4 – 7 tahun | 40.000 | +15.000 jika tinggi > 120 cm |
| 8 – 10 tahun | 50.000 | +20.000 jika tinggi > 150 cm |
| > 10 tahun | 80.000 | — |

## 📤 Contoh
- `age = 3`, `height = 95` ➡️ `40000`  *(30.000 + 10.000 karena tinggi > 70)*
- `age = 8`, `height = 140` ➡️ `50000`  *(tinggi 140 tidak > 150, jadi tanpa tambahan)*

## 💡 Petunjuk
Pikirkan cabang **umur** dulu sebagai lapisan luar, baru di dalam tiap cabang cek **tinggi** untuk tarif tambahan.

> ✍️ Tulis jawabanmu di file **`01-3-disney-island-tariff.txt`**.
> 🔁 Soal ini akan muncul lagi sebagai kode JavaScript di **`04-5-disney-island-tariff`**.

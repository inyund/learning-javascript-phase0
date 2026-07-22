# 🏰 04-5: Disney Island Ticket Tariff

## 🎯 Konsep yang Dilatih
Percabangan bertingkat dengan **syarat ganda** (umur **dan** tinggi). Ini adalah versi JavaScript dari pseudocode yang kamu tulis di `01-3`.

## 📖 Cerita
Wahana bermain **Disney Island** menentukan tarif tiket berdasarkan umur dan tinggi anak. Diberikan `age` dan `height`, tampilkan tarif yang tepat.

## 📊 Aturan Tarif
| Umur | Tarif Dasar | Tambahan |
|---|---|---|
| ≤ 1 tahun | — | Tampilkan `Dilarang masuk` |
| 2 – 3 tahun | 30.000 | +10.000 jika tinggi > 70 cm |
| 4 – 7 tahun | 40.000 | +15.000 jika tinggi > 120 cm |
| 8 – 10 tahun | 50.000 | +20.000 jika tinggi > 150 cm |
| > 10 tahun | 80.000 | — |

## 📤 Contoh
```js
let age = 3,  height = 95;    // ➡️ 40000   (30000 + 10000, tinggi > 70)
let age = 8,  height = 140;   // ➡️ 50000   (tinggi 140 tidak > 150)
let age = 8,  height = 160;   // ➡️ 70000   (50000 + 20000, tinggi > 150)
let age = 1,  height = 60;    // ➡️ Dilarang masuk
let age = 15, height = 170;   // ➡️ 80000
```

## 💡 Petunjuk
Buat cabang **umur** sebagai lapisan luar. Di dalam tiap cabang umur, tambahkan `if` untuk cek tinggi yang memicu tarif tambahan.

> ✍️ Tulis jawabanmu di **`04-5-disney-island-tariff.js`**.

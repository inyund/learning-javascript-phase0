# 🧺 04-2: Laundry Day Simulation

## 🎯 Konsep yang Dilatih
Menggunakan perulangan `while` untuk mengubah sebuah **state** (kondisi) setelah syarat tertentu terpenuhi.

## 📖 Cerita
Sebuah mesin cuci awalnya `"MATI"`. Kamu memasukkan baju satu per satu sampai baju ke-20. Ketika baju ke-20 sudah masuk, mesin cuci berubah menjadi `"NYALA"`.

## ✅ Tugas
Starter code menyediakan:
```js
let mesincuci = "MATI";
```
1. Buat perulangan `while` yang menghitung baju dari `1` sampai `20`, cetak nomor bajunya di tiap iterasi.
2. Saat hitungan mencapai `20`, ubah `mesincuci` menjadi `"NYALA"`.
3. Setelah loop selesai, cetak nilai akhir `mesincuci`.

## 📤 Output yang Diharapkan
```
1
2
...
20
NYALA
```

## 💡 Petunjuk
Ubah `mesincuci` **di dalam** loop tepat saat penghitung `=== 20`, bukan di luar loop.

> ✍️ Tulis jawabanmu di **`05-2-laundry-day.js`**.

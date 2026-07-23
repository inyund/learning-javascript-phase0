# 🔍 07-5: Cari Nilai & Indeksnya

## 🎯 Konsep yang Dilatih
Menelusuri array untuk mencari sebuah nilai dan melaporkan **posisi (indeks)**-nya — logika di balik `.indexOf()`, dikerjakan manual.

## ✅ Tugas
Diberikan `let nama = ["Budi", "Ani", "Citra", "Dedi"]` dan `let cari = "Citra"`. Tentukan di indeks berapa `cari` berada.
- Jika ketemu ➡️ cetak `Ditemukan di indeks <n>`
- Jika tidak ada ➡️ cetak `Tidak ditemukan`

## 📤 Contoh
```js
let cari = "Citra";   // ➡️ Ditemukan di indeks 2
let cari = "Budi";    // ➡️ Ditemukan di indeks 0
let cari = "Eka";     // ➡️ Tidak ditemukan
```

## 💡 Petunjuk
- Telusuri array; saat elemen cocok dengan `cari`, kamu sudah tahu indeksnya (variabel loop).
- Siapkan penanda untuk kasus "tidak ketemu sama sekali", dan putuskan pesan mana yang dicetak setelah pencarian selesai.

> ✍️ Tulis jawabanmu di **`07-5-cari-dan-index.js`**.

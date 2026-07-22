# 📊 03-2: Grading System

## 🎯 Konsep yang Dilatih
Percabangan bertingkat pada sebuah **rentang nilai**. Bisa dikerjakan dengan `if/else if` atau dengan `switch (true)`.

## ✅ Tugas
Diberikan `nama` dan `nilai` seorang siswa. Tentukan `grade`-nya berdasarkan tabel di bawah, lalu tampilkan grade tersebut.

| Rentang Nilai | Grade |
|---|---|
| 80 – 100 | `A` |
| 65 – 79 | `B` |
| 50 – 64 | `C` |
| 35 – 49 | `D` |
| 0 – 34 | `E` |
| di luar 0–100 | `Nilai Invalid` |

## 📤 Contoh
```js
let nilai = 90;   // ➡️ A
let nilai = 70;   // ➡️ B
let nilai = 33;   // ➡️ E
let nilai = 150;  // ➡️ Nilai Invalid
```

## 💡 Petunjuk
Pastikan `nilai` bertipe **number**, bukan string. `"90" <= 100` bisa berperilaku tak terduga — gunakan angka asli (`90`), atau ubah dulu dengan `Number(nilai)`.

> ✍️ Tulis jawabanmu di **`04-2-grading-system.js`**. Ini adalah versi JavaScript dari pseudocode `01-2`.

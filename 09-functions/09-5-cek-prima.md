# 🔢 09-5: Cek Bilangan Prima

## 🎯 Konsep yang Dilatih
Membuat fungsi yang mengembalikan **`boolean`** (`true`/`false`), menggabungkan loop dan modulus untuk memeriksa keterbagian.

## 📖 Apa itu bilangan prima?
Bilangan lebih besar dari 1 yang **hanya** habis dibagi 1 dan dirinya sendiri (contoh: 2, 3, 5, 7, 11). Angka 1 dan angka ≤ 0 **bukan** prima.

## ✅ Tugas
Buat fungsi `cekPrima(n)` yang mengembalikan `true` jika `n` prima dan `false` jika bukan.

## 📤 Contoh
```js
cekPrima(7);   // ➡️ true
cekPrima(10);  // ➡️ false
cekPrima(1);   // ➡️ false
cekPrima(2);   // ➡️ true
```

## 💡 Petunjuk
- Tangani dulu kasus khusus: angka ≤ 1 langsung bukan prima.
- Untuk sisanya, periksa apakah `n` bisa dibagi habis oleh angka-angka di antara 2 dan `n-1`. Kalau ada satu saja yang membagi habis, berarti bukan prima.
- `return` bisa dipakai untuk keluar lebih awal begitu jawabannya sudah pasti.

> ✍️ Tulis jawabanmu di **`09-5-cek-prima.js`**.

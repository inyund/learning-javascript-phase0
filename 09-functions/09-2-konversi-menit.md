# ⏱️ 06-2: Konversi Menit

## 🎯 Konsep yang Dilatih
Operasi aritmatika (`Math.floor`, modulus `%`) dan **memformat output** dengan menambahkan `0` di depan (*zero padding*).

## ✅ Tugas
Diberikan `let detik = 70`. Konversi ke format `menit:detik` (`m:ss`) lalu cetak.
- **Menit** = `detik` dibagi 60, dibulatkan ke bawah.
- **Sisa detik** = `detik` modulus 60.
- Jika sisa detik kurang dari 10, tambahkan `0` di depannya (`5` ➡️ `05`).

## 📤 Contoh
```js
let detik = 70;   // ➡️ 1:10
let detik = 65;   // ➡️ 1:05
let detik = 125;  // ➡️ 2:05
let detik = 40;   // ➡️ 0:40
```

## 💡 Petunjuk
- Menit didapat dari pembagian yang **dibulatkan ke bawah** (ada `Math.floor`), sisa detik dari operator modulus.
- Untuk *zero padding*, cek dulu apakah sisa detiknya cuma satu digit — kalau iya, imbuhi `0` di depannya.

> ✍️ Tulis jawabanmu di **`09-2-konversi-menit.js`**.

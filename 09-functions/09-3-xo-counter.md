# ❌⭕ 06-3: X and O Counter

## 🎯 Konsep yang Dilatih
Menggabungkan **loop** untuk memindai string, **penghitung** (*counter*), dan **percabangan** untuk menyimpulkan hasil.

## ✅ Tugas
Diberikan sebuah string `kata`. Hitung berapa banyak huruf `'x'` dan berapa banyak huruf `'o'` di dalamnya.
- Jika jumlah `'x'` **sama dengan** jumlah `'o'` ➡️ cetak `true`
- Jika berbeda ➡️ cetak `false`

## 📤 Contoh
```js
var kata = 'xyzoxo';   // ➡️ true   (jumlah x = jumlah o)
var kata = 'xxo';                           // ➡️ false  (2 x, 1 o)
var kata = 'halo dunia';                    // ➡️ false  (0 x, 1 o)
```

## 💡 Petunjuk
- Siapkan dua penghitung, misal `let x = 0` dan `let o = 0`.
- Loop tiap karakter (`kata[i]`), tambahkan penghitung yang sesuai.
- Bandingkan kedua penghitung di akhir.
- Perhitungan bersifat *case-sensitive*: hanya huruf kecil `x` dan `o` yang dihitung.

> ✍️ Tulis jawabanmu di **`09-3-xo-counter.js`**.

# 🅰️ 06-4: Hitung Vokal

## 🎯 Konsep yang Dilatih
Memindai string dengan loop dan mencocokkan tiap karakter terhadap sekumpulan pilihan (huruf vokal).

## ✅ Tugas
Diberikan `let kata = "javascript"`. Hitung berapa banyak **huruf vokal** (`a`, `i`, `u`, `e`, `o`) di dalamnya, lalu cetak jumlahnya.

## 📤 Contoh
```js
let kata = "javascript";   // ➡️ 3   (a, a, i)
let kata = "pemrograman";  // ➡️ 4   (e, o, a, a)
let kata = "xyz";          // ➡️ 0
```

## 💡 Petunjuk
- Siapkan penghitung `let jumlah = 0`.
- Loop tiap karakter `kata[i]`, dan cek apakah termasuk vokal.
- Cara cek vokal: bandingkan satu per satu (`kata[i] === "a" || kata[i] === "i" || ...`), atau simpan vokal dalam string `"aiueo"` lalu cek keberadaannya.

> ✍️ Tulis jawabanmu di **`06-4-hitung-vokal.js`**.

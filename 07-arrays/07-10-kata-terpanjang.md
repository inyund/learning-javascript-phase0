# 📏 07-10: Kata Terpanjang

## 🎯 Konsep yang Dilatih
Menelusuri array string sambil melacak "juara sementara" — pola yang sama seperti mencari nilai terbesar, tapi ukurannya `.length`.

## ✅ Tugas
Diberikan `let kata = ["apel", "semangka", "jeruk", "pir"]`. Temukan kata **terpanjang**, lalu cetak.

## 📤 Contoh
```js
let kata = ["apel", "semangka", "jeruk", "pir"];   // ➡️ semangka
let kata = ["a", "bb", "ccc"];                     // ➡️ ccc
```

## 💡 Petunjuk
- Simpan sebuah "kata terpanjang sementara", awali dengan elemen pertama.
- Telusuri array; kalau ada kata yang `.length`-nya lebih besar dari juara sementara, ganti juaranya.
- Jika ada dua kata sama panjang, cukup ambil yang pertama ditemukan.

> ✍️ Tulis jawabanmu di **`07-10-kata-terpanjang.js`**.

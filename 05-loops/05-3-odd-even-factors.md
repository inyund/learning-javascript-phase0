# 🔢 04-3: Odd/Even & Modulus Step Factors

## 🎯 Konsep yang Dilatih
Perulangan dengan **step (langkah) kustom** (`i += n`) dan operator **modulus** (`%`) untuk mengecek habis-dibagi.

## ✅ Tugas
Buat **tiga** blok perulangan berikut:

1. **Ganjil/Genap** — dari `1` sampai `100`, langkah `+3`.
   - Jika `i` habis dibagi 2 ➡️ cetak `<i> - genap`
   - Jika tidak ➡️ cetak `<i> - ganjil`
2. **Faktor 3** — dari `50` sampai `200`, langkah `+5`.
   - Jika `i` habis dibagi 3 ➡️ cetak `<i> - faktor 3`
   - Jika tidak ➡️ cetak `<i> - tidak bisa dibagi 3`
3. **Kelipatan 8** — dari `100` sampai `200`, langkah `+7`.
   - Cetak `i` **hanya** jika `i` habis dibagi 8.

## 📤 Contoh Potongan Output
```
1 - ganjil
4 - genap
7 - ganjil
...
60 - faktor 3
65 - tidak bisa dibagi 3
...
128
184
```

## 💡 Petunjuk
- Setiap bagian punya titik awal, batas, dan **langkah** yang berbeda — atur langkah loop sesuai soal (bukan selalu satu-satu).
- Untuk cek "habis dibagi", pakai operator modulus (`%`) dari Bab 03: kalau sisanya `0`, berarti habis dibagi.

> ✍️ Tulis jawabanmu di **`05-3-odd-even-factors.js`**.

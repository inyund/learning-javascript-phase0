# 📦 07-1: Array Basics

## 🎯 Konsep yang Dilatih
Operasi dasar array: mengakses elemen lewat indeks, mengecek panjang (`.length`), menambah (`.push`), dan mengubah elemen.

## ✅ Tugas
Diberikan:
```js
let buah = ["apel", "mangga", "jeruk"];
```
Lakukan berurutan:
1. Cetak elemen pertama (`buah[0]`).
2. Cetak jumlah elemen (`buah.length`).
3. Tambahkan `"pisang"` ke akhir array (`.push`).
4. Ubah elemen indeks `1` menjadi `"durian"`.
5. Cetak array akhir.

## 📤 Output yang Diharapkan
```
apel
3
[ 'apel', 'durian', 'jeruk', 'pisang' ]
```

## 💡 Petunjuk
- Indeks array mulai dari `0`, jadi elemen pertama ada di indeks `0`, bukan `1`.
- Method `.push(...)` menambah elemen di posisi terakhir.
- Berbeda dengan string yang immutable, elemen array **bisa** diubah lewat indeksnya.

> ✍️ Tulis jawabanmu di **`07-1-array-basics.js`**.

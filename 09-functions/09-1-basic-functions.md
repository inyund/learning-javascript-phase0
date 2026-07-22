# ⚙️ 06-1: Basic Functions

## 🎯 Konsep yang Dilatih
Membuat fungsi dengan **parameter** dan **`return`**, memakai variabel dari luar fungsi (*global*), serta **memanggil fungsi di dalam fungsi lain** (*nested call*).

## ✅ Tugas
Starter code menyediakan variabel global `let bonus = 5`. Buat dua fungsi:

1. **`tambah(valueA, valueB)`** — kembalikan `valueA + valueB + bonus`.
2. **`perkalian(valueA, valueB, valueC)`** — kembalikan `valueA * valueB * tambah(valueA, valueC) + bonus`.

Lalu cetak hasil dari:
```js
console.log(tambah(5, 7));
console.log(perkalian(2, 5, 3));
```

## 📤 Output yang Diharapkan
```
17
105
```

## 🧮 Cara Hitung
- `tambah(5, 7)` = `5 + 7 + 5` = **17**
- `perkalian(2, 5, 3)` = `2 * 5 * tambah(2, 3) + 5` = `2 * 5 * (2 + 3 + 5) + 5` = `10 * 10 + 5` = **105**

## 💡 Petunjuk
Perhatikan bahwa `perkalian` memanggil `tambah` di dalamnya. Pastikan `tambah` sudah menambahkan `bonus` sebelum dipakai oleh `perkalian`.

> ✍️ Tulis jawabanmu di **`09-1-basic-functions.js`**.

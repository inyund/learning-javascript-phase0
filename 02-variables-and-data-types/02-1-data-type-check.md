# 🔍 02-1: Dynamic Type Checker (`typeof`)

## 🎯 Konsep yang Dilatih
Menggunakan operator `typeof` untuk memeriksa tipe data sebuah variabel dan menentukan aksi yang berbeda untuk tiap tipe.

## ✅ Tugas
Diberikan sebuah variabel `kata`. Buat pengkondisian yang memeriksa tipenya dan menampilkan output sesuai tabel berikut:

| Kondisi | Output |
|---|---|
| bertipe `string` | `username <isi kata>` |
| bertipe `number` | `age <isi kata>` |
| bertipe `boolean` bernilai `true` | `thank you for agreeing` |
| bertipe `boolean` bernilai `false` | `cannot proceed without agreement` |
| nilai kosong / *falsy* (`""`, `0`, `null`, `undefined`) | `Invalid Data` |

## 📤 Contoh
```js
let kata = 'Stefani';   // ➡️ username Stefani
let kata = 27;          // ➡️ age 27
let kata = true;        // ➡️ thank you for agreeing
let kata = '';          // ➡️ Invalid Data
```

## 💡 Petunjuk
- `typeof "halo"` menghasilkan `"string"`, `typeof 27` menghasilkan `"number"`, `typeof true` menghasilkan `"boolean"`.
- Hati-hati urutan pengecekan: nilai *falsy* sebaiknya dicek lebih dulu, atau pastikan cabangnya tidak saling tertimpa.

> ✍️ Tulis jawabanmu di **`02-1-data-type-check.js`**.

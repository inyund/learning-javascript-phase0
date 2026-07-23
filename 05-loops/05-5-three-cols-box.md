# 📦 04-5: Three Cols Box (Grid Angka Berurutan)

## 🎯 Konsep yang Dilatih
*Nested loop* untuk menghasilkan grid, sambil menjaga sebuah penghitung yang **terus bertambah** melintasi baris.

## ✅ Tugas
Diberikan sebuah variabel `row`. Cetak grid angka berurutan mulai dari `1`, di mana setiap baris berisi **3 kolom**. Antar angka dipisahkan **satu spasi**.

## 📤 Contoh
```js
let row = 3
// 1 2 3
// 4 5 6
// 7 8 9
```
```js
let row = 5
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12
// 13 14 15
```
```js
let row = 1
// 1 2 3
```

## 🚫 Batasan (opsional)
Coba kerjakan tanpa `.map`, `.filter`, `.reduce`, `.join`, atau `.split` — cukup loop biasa dan penggabungan string.

## 💡 Petunjuk
Kunci soal ini: sebuah penghitung angka yang **terus bertambah melintasi baris** (jangan di-reset tiap baris). Tiap baris menampung tiga angka berurutan, jadi pikirkan berapa penghitungnya harus naik setelah satu baris selesai.

> ✍️ Tulis jawabanmu di **`05-5-three-cols-box.js`**.

# ➗ 08-5: Total & Rata-rata dari Daftar Object

## 🎯 Konsep yang Dilatih
Mengakumulasi sebuah **properti** dari array of objects — pola yang sangat sering dipakai untuk membuat ringkasan data.

## ✅ Tugas
Diberikan:
```js
let siswa = [
  { nama: "Andi", nilai: 80 },
  { nama: "Bella", nilai: 90 },
  { nama: "Citra", nilai: 70 },
];
```
Hitung total dan rata-rata dari properti `nilai`, lalu cetak.

## 📤 Output yang Diharapkan
```
Total: 240
Rata-rata: 80
```

## 💡 Petunjuk
- Sama seperti akumulasi biasa, tapi yang ditambahkan adalah `nilai` dari tiap object, bukan elemen array itu sendiri.
- Banyaknya siswa untuk rata-rata bisa diambil dari `.length` array.

> ✍️ Tulis jawabanmu di **`08-5-total-nilai.js`**.

# 🎰 Challenge: System Gatcha (Switch Case)

## Objective
Menggunakan struktur `switch-case` untuk menangani berbagai kemungkinan angka acak (random).

## Problem Statement
Diberikan sebuah angka gatcha acak dari 1 sampai 5:
```javascript
let gatcha = Math.ceil(Math.random() * 5);
```

Tampilkan hadiah berdasarkan nilai `gatcha`:
- Angka **1**: `"coba lagi ya"`
- Angka **2**: `"selamat kamu mendapatkan kupon sebanyak 5"`
- Angka **3**: `"selamat kamu mendapatkan kupon sebanyak 15"`
- Angka **4**: `"selamat kamu mendapatkan kupon sebanyak 50"`
- Angka **5**: `"WOW, kamu menang jackpot! Selamat!!"`
- Default: `"gagal bos" + gatcha`

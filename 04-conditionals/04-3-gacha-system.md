# 🎰 03-3: Gacha System (Switch Case)

## 🎯 Konsep yang Dilatih
Menggunakan `switch-case` untuk memetakan sebuah nilai ke banyak kemungkinan hasil, lengkap dengan `break` dan `default`.

## ✅ Tugas
Sebuah sistem gacha mengeluarkan angka acak `1`–`5`. Starter code sudah menyediakan:
```js
let gacha = Math.ceil(Math.random() * 5);
```
Buat `switch-case` yang mencetak hadiah sesuai angka yang keluar:

| Angka | Output |
|---|---|
| 1 | `coba lagi ya` |
| 2 | `selamat kamu mendapatkan kupon sebanyak 5` |
| 3 | `selamat kamu mendapatkan kupon sebanyak 15` |
| 4 | `selamat kamu mendapatkan kupon sebanyak 50` |
| 5 | `WOW, kamu menang jackpot! Selamat!!` |
| lainnya | `gagal bos` |

## 💡 Petunjuk
- Jangan lupa `break` di setiap `case` agar tidak "jatuh" ke case berikutnya.
- Gunakan `default` untuk menangkap nilai tak terduga.
- Karena `gacha` acak, output akan berbeda tiap kali dijalankan — itu wajar.

> ✍️ Tulis jawabanmu di **`04-3-gacha-system.js`**.

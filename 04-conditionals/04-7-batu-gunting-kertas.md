# ✊✌️✋ 04-7: Batu Gunting Kertas

## 🎯 Konsep yang Dilatih
Percabangan **bersarang** dengan banyak kombinasi: membandingkan dua pilihan untuk menentukan pemenang.

## 📖 Aturan
Dua pemain memilih salah satu dari `"batu"`, `"gunting"`, atau `"kertas"`.
- **batu** mengalahkan **gunting**
- **gunting** mengalahkan **kertas**
- **kertas** mengalahkan **batu**
- pilihan sama ➡️ seri

## ✅ Tugas
Diberikan `let player1` dan `let player2`. Cetak salah satu:
- `Player 1 menang`
- `Player 2 menang`
- `Seri`

## 📤 Contoh
```js
let player1 = "batu",    player2 = "gunting";  // ➡️ Player 1 menang
let player1 = "kertas",  player2 = "gunting";  // ➡️ Player 2 menang
let player1 = "batu",    player2 = "batu";     // ➡️ Seri
```

## 💡 Petunjuk
- Tangani kasus **seri** lebih dulu (`player1 === player2`), sisanya tinggal 3 kombinasi menang untuk Player 1.
- Kalau bukan seri dan bukan kemenangan Player 1, berarti Player 2 yang menang.

> ✍️ Tulis jawabanmu di **`04-7-batu-gunting-kertas.js`**.

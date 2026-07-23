# ❗ 09-6: Faktorial

## 🎯 Konsep yang Dilatih
Membuat fungsi yang memakai loop untuk **mengakumulasi hasil perkalian**, dan mengembalikannya dengan `return`.

## 📖 Apa itu faktorial?
Faktorial `n` (ditulis `n!`) adalah hasil kali semua bilangan dari 1 sampai `n`.
```
5! = 1 × 2 × 3 × 4 × 5 = 120
```
Menurut definisi, `0! = 1`.

## ✅ Tugas
Buat fungsi `faktorial(n)` yang mengembalikan nilai `n!`.

## 📤 Contoh
```js
faktorial(5);   // ➡️ 120
faktorial(3);   // ➡️ 6
faktorial(0);   // ➡️ 1
```

## 💡 Petunjuk
- Akumulasi perkalian butuh penampung yang diawali `1` (bukan `0`, karena apa pun dikali 0 jadi 0).
- Kalikan penampung itu dengan tiap angka dari 1 sampai `n` di dalam loop, lalu `return` di akhir.

> ✍️ Tulis jawabanmu di **`09-6-faktorial.js`**.

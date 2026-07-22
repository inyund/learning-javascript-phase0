# 🔁 08-3: Iterasi Object (`for...in`)

## 🎯 Konsep yang Dilatih
Menelusuri seluruh pasangan key–value sebuah object dengan `for...in`, sekaligus mengakumulasi nilainya.

## ✅ Tugas
Diberikan:
```js
let nilai = { matematika: 90, fisika: 85, kimia: 80 };
```
1. Cetak tiap mata pelajaran beserta nilainya dengan format `pelajaran: nilai`.
2. Cetak total seluruh nilai.

## 📤 Output yang Diharapkan
```
matematika: 90
fisika: 85
kimia: 80
Total: 255
```

## 💡 Petunjuk
- `for (let key in nilai)` memberi kamu **nama key** di tiap putaran; nilainya diakses dengan `nilai[key]`.
- Untuk total, pakai teknik akumulasi yang sama seperti di Bab Loops.

> ✍️ Tulis jawabanmu di **`08-3-iterasi-object.js`**.

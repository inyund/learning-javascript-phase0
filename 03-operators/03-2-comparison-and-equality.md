# ⚖️ 03-2: Comparison & Equality

## 🎯 Konsep yang Dilatih
Operator perbandingan (`>`, `<`, `>=`, `<=`) yang menghasilkan `boolean`, dan perbedaan penting **`==` (loose)** vs **`===` (strict)**.

## ✅ Tugas
Diberikan:
```js
let x = 10;
let y = 5;
let z = "10";   // string, bukan number
```
Cetak hasil dari:
1. `x > y`
2. `x < y`
3. `x >= 10`
4. `x <= 4`
5. `x == z`   *(loose: nilai dibandingkan setelah tipe disamakan)*
6. `x === z`  *(strict: tipe **dan** nilai harus sama)*

## 📤 Output yang Diharapkan
```
true
false
true
false
true
false
```

## 💡 Petunjuk
- `==` menyamakan tipe dulu, jadi `10 == "10"` dianggap `true`.
- `===` **tidak** menyamakan tipe, jadi `10 === "10"` bernilai `false` (number ≠ string).
- **Best practice:** biasakan pakai `===` agar tidak tertipu perbedaan tipe.

> ✍️ Tulis jawabanmu di **`03-2-comparison-and-equality.js`**.

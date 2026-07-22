# 🔗 03-3: Logical Operators

## 🎯 Konsep yang Dilatih
Menggabungkan beberapa kondisi `boolean` dengan `&&` (DAN), `||` (ATAU), dan `!` (BUKAN).

## 📚 Ringkasan
| Operator | Nama | Hasil `true` jika... |
|---|---|---|
| `&&` | AND | **kedua** sisi `true` |
| `\|\|` | OR | **salah satu** sisi `true` |
| `!` | NOT | membalik: `!true` ➡️ `false` |

## ✅ Tugas
Diberikan:
```js
let punyaKTP = true;
let umur = 16;
```
Cetak hasil dari:
1. `punyaKTP && umur >= 17`
2. `punyaKTP || umur >= 17`
3. `!punyaKTP`
4. `umur >= 13 && umur <= 17`  *(apakah termasuk usia remaja?)*

## 📤 Output yang Diharapkan
```
false
true
false
true
```

## 💡 Petunjuk
- `&&` butuh **semua** benar; karena `umur >= 17` bernilai `false`, hasil `punyaKTP && umur >= 17` jadi `false`.
- `||` cukup **satu** benar.
- Rentang seperti "antara 13 dan 17" ditulis `umur >= 13 && umur <= 17`.

> ✍️ Tulis jawabanmu di **`03-3-logical-operators.js`**.

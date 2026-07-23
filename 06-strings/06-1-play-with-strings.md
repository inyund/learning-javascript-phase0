# 🔤 05-1: Play With Strings

## 🎯 Konsep yang Dilatih
Tiga cara bekerja dengan string: **penggabungan** (`+`), **akses karakter per indeks** (`str[i]`), dan **pengambilan substring** (`str.substring(start, end)`).

## ✅ Tugas
Starter code menyediakan:
```js
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
console.log(word + ' ' + second + ' ' + third);   // ➡️ JavaScript is awesome

var word2 = 'wow JavaScript is so cool';
var exampleFirstWord = word2[0] + word2[1] + word2[2];
console.log('First Word: ' + exampleFirstWord);    // ➡️ First Word: wow
```

Dari kalimat `word2 = 'wow JavaScript is so cool'`, kerjakan dua bagian:

**Bagian A — via indeks (`word2[i]`)** ambil dan cetak tiap kata:
```
First Word: wow
Second Word: JavaScript
Third Word: is
Fourth Word: so
Fifth Word: cool
```

**Bagian B — via `substring(start, end)`** ambil tiap kata, lalu cetak juga panjangnya (`.length`):
```
First Word: wow, with length: 3
Second Word: JavaScript, with length: 10
Third Word: is, with length: 2
Fourth Word: so, with length: 2
Fifth Word: cool, with length: 4
```

## 💡 Petunjuk
- Hitung posisi indeks tiap huruf/kata dengan teliti — spasi juga menempati satu indeks.
- `word2.substring(4, 14)` mengambil karakter dari indeks 4 sampai **sebelum** 14.

> ✍️ Tulis jawabanmu di **`06-1-play-with-strings.js`**.

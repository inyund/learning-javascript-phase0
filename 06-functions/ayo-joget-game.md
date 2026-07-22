# 💃 Exercise 1: Ayo Joget Game (RMT-26 Zurich Fox Challenge)

## Problem Statement
Terdapat permainan 'Ayo Joget' di mana user memasukkan input berupa urutan tombol panah (`<`, `>`, `^`, `v`).
Bandingkan karakter variabel `userInput` dengan `exercise`:
- Setiap karakter posisi yang **sama** bernilai 10 poin.
- Hitung persentase skor: `(totalPoin / maxPoin) * 100` (pembulatan ke bawah).
- Kategori Persentase:
  - 100% ➡️ `Perfect`
  - 80% - 99% ➡️ `Great`
  - 60% - 79% ➡️ `Good`
  - 0% - 59% ➡️ `Bad`
- Jika panjang `exercise` dan `userInput` berbeda ➡️ `"Input yang anda masukkan tidak lengkap!"`

### Example:
```javascript
let exercise = '<>^v>>>';
let userInput = '<>^^>><';
// Output: "Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good"
```

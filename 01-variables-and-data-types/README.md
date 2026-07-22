# 📝 Variables & Data Types Mutability

## Objective
Memahami perbedaan sifat mutabilitas (*mutability*) antara tipe data primitif String dan tipe data Array pada JavaScript.

## Problem Statement
Diberikan beberapa variabel dengan tipe data String dan Array. 
Cobalah untuk mengubah karakter pada indeks tertentu dari String dan elemen dari Array, lalu amati serta jelaskan hasilnya.

## Starter Code (`solution.js`)
```javascript
const dua = "defaultvaluedua";
dua[2] = "x";
console.log(dua);

const tiga = "defaultvaluetiga";
console.log(tiga);

const empat = [1, 9, 6];
console.log(empat);
empat[1] = "valuedilistpertama";
console.log(empat);
```

## Pertanyaan Refleksi
1. Mengapa variabel `dua` nilainya tidak berubah saat dilakukan `dua[2] = "x"`?
2. Mengapa elemen variabel `empat` berhasil diubah saat dilakukan `empat[1] = "valuedilistpertama"`?

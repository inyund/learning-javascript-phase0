# 🧪 Exercise 1: String Immutability vs Array Mutability

## Objective
Memahami mengapa String pada JavaScript bernilai *immutable* (tidak dapat diubah karakter per karakter) sedangkan Array bernilai *mutable*.

## Starter Code (`mutability-check.js`)
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

## Tugas Refleksi:
1. Jalankan kode di atas dengan `node mutability-check.js`.
2. Tulis penjelasan singkat mengapa `dua[2] = "x"` tidak mengubah isi variabel `dua`, sedangkan `empat[1] = "valuedilistpertama"` berhasil mengubah isi array `empat`.

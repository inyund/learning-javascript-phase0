# 📋 08-4: Array of Objects

## 🎯 Konsep yang Dilatih
Menggabungkan array (Bab 07) dan object: sebuah **daftar object**, di mana tiap elemen array adalah satu object.

## ✅ Tugas
Diberikan:
```js
let siswa = [
  { nama: "Andi", nilai: 80 },
  { nama: "Bella", nilai: 90 },
  { nama: "Citra", nilai: 70 },
];
```
Telusuri daftar dan cetak tiap siswa dengan format `nama - nilai`.

## 📤 Output yang Diharapkan
```
Andi - 80
Bella - 90
Citra - 70
```

## 💡 Petunjuk
- Loop array seperti biasa; tiap elemen (`siswa[i]`) adalah sebuah object.
- Ambil properti tiap object dengan notasi titik (`siswa[i].nama`, `siswa[i].nilai`).

> ✍️ Tulis jawabanmu di **`08-4-array-of-objects.js`**.

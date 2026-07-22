# 🏆 08-6: Cari Nilai Tertinggi

## 🎯 Konsep yang Dilatih
Mencari object "juara" di dalam array of objects berdasarkan sebuah properti — gabungan pola cari-terbesar (Bab 07) dengan akses properti object.

## ✅ Tugas
Diberikan:
```js
let siswa = [
  { nama: "Andi", nilai: 80 },
  { nama: "Bella", nilai: 95 },
  { nama: "Citra", nilai: 70 },
];
```
Temukan siswa dengan `nilai` tertinggi, lalu cetak dengan format `Nilai tertinggi: <nama> (<nilai>)`.

## 📤 Output yang Diharapkan
```
Nilai tertinggi: Bella (95)
```

## 💡 Petunjuk
- Simpan sebuah "juara sementara", awali dengan siswa pertama.
- Telusuri daftar; kalau ada siswa dengan `nilai` lebih tinggi dari juara sementara, ganti juaranya. Yang kamu simpan cukup object siswanya.

> ✍️ Tulis jawabanmu di **`08-6-cari-tertinggi.js`**.

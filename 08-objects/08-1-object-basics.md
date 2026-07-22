# 🗃️ 08-1: Object Basics

## 🎯 Konsep yang Dilatih
Operasi dasar object: mengakses properti (dua cara: `.key` dan `["key"]`), menambah properti baru, dan mengubah nilai properti.

## ✅ Tugas
Diberikan:
```js
let mahasiswa = { nama: "Andi", umur: 20, jurusan: "Informatika" };
```
Lakukan berurutan:
1. Cetak `nama` dengan notasi titik (`mahasiswa.nama`).
2. Cetak `umur` dengan notasi kurung siku (`mahasiswa["umur"]`).
3. Tambahkan properti baru `ipk` bernilai `3.5`.
4. Ubah `umur` menjadi `21`.
5. Cetak object akhir.

## 📤 Output yang Diharapkan
```
Andi
20
{ nama: 'Andi', umur: 21, jurusan: 'Informatika', ipk: 3.5 }
```

## 💡 Petunjuk
- Dua cara akses itu setara; notasi `["..."]` berguna kalau nama key disimpan dalam variabel.
- Menambah properti baru caranya sama seperti mengubah: cukup tetapkan nilai ke key yang dituju.

> ✍️ Tulis jawabanmu di **`08-1-object-basics.js`**.

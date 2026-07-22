# 🧹 07-8: Hapus Duplikat

## 🎯 Konsep yang Dilatih
Membangun array **unik**: memasukkan sebuah nilai ke array hasil hanya jika belum ada di sana.

## ✅ Tugas
Diberikan `let angka = [1, 2, 2, 3, 3, 3, 4]`. Buat array baru yang berisi nilai unik saja (tanpa kembar), lalu cetak.

## 📤 Output yang Diharapkan
```
[ 1, 2, 3, 4 ]
```

## 💡 Petunjuk
- Siapkan array hasil kosong. Untuk tiap elemen, cek dulu apakah nilai itu **sudah ada** di array hasil; kalau belum, baru masukkan.
- Untuk mengecek keberadaan, kamu bisa memakai method `.includes(nilai)` (mengembalikan `true`/`false`), atau menelusuri array hasil secara manual.

> ✍️ Tulis jawabanmu di **`07-8-hapus-duplikat.js`**.

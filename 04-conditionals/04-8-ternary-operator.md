# ❓ 04-8: Ternary Operator

## 🎯 Konsep yang Dilatih
Menulis percabangan singkat satu baris dengan operator ternary:
```
kondisi ? nilaiJikaBenar : nilaiJikaSalah
```

## ✅ Tugas
1. Diberikan `let nilai = 75`. Buat variabel `hasil` yang berisi `"Lulus"` jika `nilai >= 60`, selain itu `"Gagal"`. Cetak `hasil`.
2. Diberikan `let umur = 20`. Cetak `"Dewasa"` jika `umur >= 18`, selain itu `"Anak-anak"`.
3. Diberikan `let angka = 7`. Cetak `"genap"` jika `angka % 2 === 0`, selain itu `"ganjil"`.

## 📤 Output yang Diharapkan
```
Lulus
Dewasa
ganjil
```

## 💡 Petunjuk
Ternary adalah bentuk ringkas dari `if/else`. Contoh:
```js
// if/else biasa
let hasil;
if (nilai >= 60) hasil = "Lulus";
else hasil = "Gagal";

// versi ternary (setara)
let hasil = nilai >= 60 ? "Lulus" : "Gagal";
```

> ✍️ Tulis jawabanmu di **`04-8-ternary-operator.js`**.

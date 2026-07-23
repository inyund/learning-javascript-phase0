# ✖️ 05-8: Tabel Perkalian (Nested Loop)

## 🎯 Konsep yang Dilatih
*Nested loop* untuk menghasilkan kombinasi baris × kolom — pola yang sama dipakai membuat tabel, grid, dan matriks.

## ✅ Tugas
Diberikan `let batas = 3`. Buat tabel perkalian dari `1` sampai `batas`, di mana tiap angka dikali `1` sampai `batas`. Cetak tiap baris dengan format `a x b = hasil`.

## 📤 Output yang Diharapkan
```
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
```

## 💡 Petunjuk
- Loop luar untuk `a` (`1..batas`), loop dalam untuk `b` (`1..batas`).
- Di loop dalam, cetak `a + " x " + b + " = " + (a * b)`.

> ✍️ Tulis jawabanmu di **`05-8-tabel-perkalian.js`**.

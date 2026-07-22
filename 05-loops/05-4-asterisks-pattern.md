# ⭐ 04-4: Asterisks Pattern (Nested Loop)

## 🎯 Konsep yang Dilatih
Perulangan **bersarang** (*nested loop*): loop luar mengatur baris, loop dalam menyusun isi tiap baris.

## ✅ Tugas
Diberikan `let rows = 5`. Buat **dua** pola bintang:

### Pola 1 — Persegi 5 × 5
5 baris, setiap baris berisi 5 bintang.
```
*****
*****
*****
*****
*****
```

### Pola 2 — Segitiga Siku-siku Terbalik
Baris pertama 5 bintang, berkurang satu tiap baris hingga 1 bintang.
```
*****
****
***
**
*
```

## 💡 Petunjuk
- Gunakan variabel penampung string (misal `let baris = ""`) di dalam loop luar, tambahkan `"*"` di loop dalam, lalu `console.log(baris)` setelah loop dalam selesai.
- Perhatikan kondisi loop dalam: untuk segitiga terbalik, jumlah bintang mengikuti nomor baris yang menurun. Kalibrasikan batas loop-mu agar jumlah bintang **persis** seperti contoh (hati-hati *off-by-one*).

> ✍️ Tulis jawabanmu di **`05-4-asterisks-pattern.js`**.

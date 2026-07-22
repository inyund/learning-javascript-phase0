# 🔄 05-2: Balik Kata (Reverse String)

## 🎯 Konsep yang Dilatih
Memproses string karakter demi karakter dengan `for` loop untuk membangun string baru — **tanpa** menggunakan built-in `.reverse()`.

## ✅ Tugas
Diberikan `let kata = "Javascript"`. Balik urutan hurufnya secara manual dan cetak hasilnya.

## 📤 Output yang Diharapkan
```
tpircsavaJ
```

## 💡 Petunjuk
- Siapkan string penampung kosong, misal `let hasil = ""`.
- Lakukan loop dari **indeks terakhir** (`kata.length - 1`) menuju `0`, dan tempelkan tiap karakter ke `hasil`.
- Dilarang memakai `.reverse()`; tujuan latihan ini justru memahami loop mundur.

> ✍️ Tulis jawabanmu di **`06-2-balik-kata.js`**.

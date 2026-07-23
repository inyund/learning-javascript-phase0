# 🚚 10-4: Ongkos Kirim (Modular Functions)

## 🎯 Konsep yang Dilatih
Memecah masalah besar menjadi beberapa **fungsi bantu** yang saling dipakai — inti dari *modular programming*. Menggabungkan string, array, object, dan fungsi.

## 📖 Cerita
Sebuah program menghitung ongkos kirim. Tiap transaksi berbentuk string `"Nomor-Nama-Asal-Tujuan"` (contoh: `"2-Rafi-Jakarta-Depok"`). Kamu diminta membangun **4 fungsi**, dengan `calculatePrice` sebagai fungsi utama.

## 🧩 Fungsi yang Dibuat
1. **`splitTransactions(array)`** — pisahkan tiap string berdasarkan `-` menjadi array.
   `"2-Rafi-Jakarta-Depok"` ➡️ `["2", "Rafi", "Jakarta", "Depok"]`
2. **`sortItemsByNumber(array)`** — urutkan transaksi berdasarkan nomornya (kecil ke besar).
3. **`objectify(item)`** — ubah satu array transaksi menjadi object:
   `["1","Zara","Tangerang","Bekasi"]` ➡️ `{ Number: "1", Name: "Zara", Origin: "Tangerang", Destination: "Bekasi" }`
4. **`calculatePrice(items)`** — hitung ongkos tiap transaksi, kembalikan array of object `{ Name, Cost }` terurut berdasarkan nomor.

## 🗺️ Aturan Ongkos
Ada 5 kota berurutan:
```
Jakarta → Depok → Bogor → Tangerang → Bekasi
```
Biaya = **20.000 per perpindahan kota** (jarak antar posisi kota). Berlaku dua arah.
- Jakarta → Depok = 1 lompatan = 20.000
- Bogor → Bekasi = 2 lompatan = 40.000
- Tangerang → Jakarta = 3 lompatan = 60.000

## 📤 Contoh
```js
calculatePrice([
  "2-Rafi-Jakarta-Depok",
  "3-Afif-Bekasi-Tangerang",
  "4-Rafki-Bogor-Bekasi",
  "1-Zara-Tangerang-Bekasi",
]);
/*
[
  { Name: 'Zara', Cost: 20000 },
  { Name: 'Rafi', Cost: 20000 },
  { Name: 'Afif', Cost: 20000 },
  { Name: 'Rafki', Cost: 40000 }
]
*/
```

## 💡 Petunjuk
- Bangun bertahap: pastikan `splitTransactions` benar dulu, baru fungsi berikutnya yang memakainya.
- Jarak antar kota = selisih **posisi** kota di daftar. Gunakan nilai mutlak agar arah bolak-balik hasilnya sama.
- `calculatePrice` tinggal merangkai fungsi-fungsi bantu di atas.

> ✍️ Tulis jawabanmu di **`10-4-ongkos-kirim.js`**.

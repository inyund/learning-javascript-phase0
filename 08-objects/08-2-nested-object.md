# 🪆 08-2: Nested Object

## 🎯 Konsep yang Dilatih
Mengakses data yang bersarang: object di dalam object, dan array di dalam object.

## ✅ Tugas
Diberikan:
```js
let user = {
  nama: "Bella",
  alamat: { kota: "Bandung", kodePos: "40123" },
  hobi: ["membaca", "renang"],
};
```
1. Cetak nama kota tempat tinggal `user`.
2. Cetak hobi **pertama** `user`.

## 📤 Output yang Diharapkan
```
Bandung
membaca
```

## 💡 Petunjuk
- Akses bertingkat dilakukan bertahap: dari object luar ke properti di dalamnya (`user.alamat` ➡️ lalu `.kota`).
- `hobi` adalah array, jadi ambil elemennya dengan indeks seperti di Bab 07.

> ✍️ Tulis jawabanmu di **`08-2-nested-object.js`**.

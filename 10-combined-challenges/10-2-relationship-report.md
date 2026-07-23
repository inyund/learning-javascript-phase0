# 💔 10-2: Relationship Report

## 🎯 Konsep yang Dilatih
Mengurai (*parse*) string menjadi bagian-bagian, mengubah array of string menjadi array of array, lalu meringkas data ke dalam sebuah laporan.

## 📖 Cerita
Kamu diminta menyimpulkan data "history pacaran" seseorang. Data tiap pasangan berbentuk `"Nama-LamaPacaran"`, di mana lama pacaran `0` berarti **masih pacaran** (statusnya pacar, bukan mantan).

## ✅ Tugas — Dua Fungsi

### Release 1 — `arrangeData(data)`
Ubah tiap string di `historyPacaran` menjadi array `[nama, lama]`.
```js
arrangeData({
  nama: "Yumi", umur: 23,
  historyPacaran: ["Andhika-125", "Budiarto-95", "Chris-38"],
});
/*
{
  nama: "Yumi", umur: 23,
  historyPacaran: [ ["Andhika","125"], ["Budiarto","95"], ["Chris","38"] ],
}
*/
```

### Release 2 — `relationshipReport(data)`
Kembalikan array ringkasan berformat:
```
[namaOrang, jumlahMantan, jumlahPacar, rekorPacaranTerlama]
```
- **Mantan** = pasangan dengan lama > 0.
- **Pacar** = pasangan dengan lama = 0 (masih pacaran).
- **Rekor terlama** = angka lama pacaran terbesar.

## 📤 Contoh
```js
relationshipReport({
  nama: "Yumi", umur: 23,
  historyPacaran: ["Andhika-125","Budiarto-95","Chris-38","Daniel-900","Edwin-15","Frans-365"],
});
// ["Yumi", "6 orang", "0 orang", "900 hari"]

relationshipReport({
  nama: "Yume", umur: 25,
  historyPacaran: ["Andhika-125","Budiarto-95","Chris-38","Daniel-0","Edwin-0"],
});
// [ 'Yume', '3 orang', '2 orang', '125 hari' ]
```

## 📝 Aturan
- Asumsikan selalu ada minimal 1 mantan.
- Asumsikan data input selalu valid.

## 💡 Petunjuk
Untuk memisahkan `"Andhika-125"`, kamu bisa loop karakter dan pisahkan di tanda `-`, atau pakai teknik string yang sudah dipelajari di Bab 05.

> ✍️ Tulis jawabanmu di **`10-2-relationship-report.js`**.

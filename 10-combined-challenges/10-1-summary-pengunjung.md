# 🧾 10-1: Summary Pengunjung

## 🎯 Konsep yang Dilatih
Menelusuri **array multidimensi** (array berisi array) dengan loop, lalu merangkai data dari beberapa array paralel menjadi satu kalimat laporan.

## 📖 Cerita
Sebuah toko online ingin membuat *summary* pelanggannya. Data disimpan sebagai array multidimensi, di mana tiap baris mewakili satu jenis informasi (nama depan, nama belakang, tanggal, bulan, tahun lahir), dan kolom yang sama menunjuk ke orang yang sama.

```js
let pengunjung = [
  ["Acong", "Djoko", "Sitorus"],       // Nama depan
  ["Budiman", "Abimantra", "Prayitno"],// Nama belakang
  [13, 24, 22],                        // Tanggal lahir
  ["Januari", "Maret", "Mei"],         // Bulan lahir
  [1980, 1965, 1990],                  // Tahun lahir
];
```

## ✅ Tugas
Buat fungsi `summaryPengunjung(input)` yang mengembalikan **array of string** dengan format:
```
<Nama depan> <Nama belakang> - <2 digit tanggal>/<3 huruf pertama bulan>/<Tahun> - <Umur> Tahun
```

## 📤 Contoh
```js
summaryPengunjung([
  ["Acong", "Djoko", "Sitorus"],
  ["Budiman", "Abimantra", "Prayitno"],
  [13, 24, 22],
  ["Januari", "Maret", "Mei"],
  [1980, 1965, 1990],
]);
/*
[
  'Acong Budiman - 13/Jan/1980 - 42 Tahun',
  'Djoko Abimantra - 24/Mar/1965 - 57 Tahun',
  'Sitorus Prayitno - 22/Mei/1990 - 32 Tahun'
]
*/
```

## 📝 Aturan
- Tanggal selalu **2 digit** (`1` ➡️ `01`).
- Bulan diambil **3 huruf pertama** (`Januari` ➡️ `Jan`, `Mei` ➡️ `Mei`).
- **Umur** dihitung dengan acuan tahun **2022** (`2022 - tahunLahir`).
- Asumsikan data input selalu valid.

## 💡 Petunjuk
Data satu orang tersebar di kolom yang sama: `input[0][i]` nama depan, `input[1][i]` nama belakang, dst. Loop dari `i = 0` sampai jumlah orang.

> ✍️ Tulis jawabanmu di **`10-1-summary-pengunjung.js`**.

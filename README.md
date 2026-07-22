# 🚀 Learning JavaScript Phase 0

Kumpulan soal latihan dasar logika pemrograman dengan JavaScript, dari menulis pseudocode sampai mengolah array & object. Cocok sebagai persiapan (*Phase 0*) sebelum masuk materi yang lebih berat.

Bab diurutkan mengikuti **alur belajar**: tiap bab hanya memakai konsep yang sudah diajarkan di bab sebelumnya, jadi tidak ada materi yang "meloncat".

---

## 🗂️ Peta Kurikulum

| # | Bab | Fokus | Jumlah Soal |
|---|---|---|---|
| 01 | 📐 Pseudocode & Algorithms | Menulis logika dalam bahasa manusia *(jawaban `.txt`)* | 5 |
| 02 | 📦 Variables & Data Types | `typeof`, mutability, `var`/`let`/`const` | 4 |
| 03 | ➕ Operators | Aritmatika, perbandingan, logika, penugasan | 4 |
| 04 | 🔀 Conditionals | `if/else`, `switch-case`, nested, ternary | 8 |
| 05 | 🔄 Loops | `for`, `while`, modulus, nested pattern | 8 |
| 06 | 🔤 Strings | Indeks, `substring`, membalik, memindai | 6 |
| 07 | 📚 Arrays | Akses, agregasi, cari, filter, dedup | 10 |
| 08 | 🗃️ Objects | Key–value, nested, iterasi, array of objects | 6 |
| 09 | ⚙️ Functions | `parameter`, `return`, nested call | 6 |
| 10 | 🎯 Combined Challenges | Gabungan semua materi (gaya *live code*) | 4 |

Daftar soal lengkap tiap bab ada di **`README.md`** di dalam masing-masing folder.

## 🧭 Alur Belajar
```
Pseudocode → Variables → Operators → Conditionals → Loops
   → Strings → Arrays → Objects → Functions → Combined Challenges
```
Operator dipelajari sebelum percabangan; percabangan & loop sebelum manipulasi string; array & object sebelum function; dan semua bermuara di *combined challenges*.

## 🛠️ Cara Mengerjakan
1. **Clone** repository ini:
   ```bash
   git clone https://github.com/inyund/learning-javascript-phase0.git
   ```
2. Kerjakan bab secara berurutan. Di tiap folder, baca dulu `README.md`, lalu tiap file soal `.md` sesuai nomornya.
3. Tulis jawabanmu di file starter yang bernama sama:
   - Bab 01 ➡️ file `.txt` (pseudocode)
   - Bab 02–10 ➡️ file `.js` (kode JavaScript)
4. Jalankan & cek hasilnya via Node.js:
   ```bash
   node <nama-file>.js
   ```

# 💃 06-4: Ayo Joget Game (Challenge)

## 🎯 Konsep yang Dilatih
Challenge penutup yang menggabungkan **fungsi**, **loop**, **percabangan**, dan **manipulasi string** menjadi satu program utuh.

## 📖 Cerita
Ada permainan "Ayo Joget". User memasukkan urutan arah (`userInput`) mengikuti contoh (`exercise`). Untuk **setiap arah pada posisi yang sama** yang cocok, skor bertambah **10**. Program menampilkan skor, persentase, dan kategori.

## 📊 Aturan
1. Bandingkan `exercise` dan `userInput` **karakter per karakter pada indeks yang sama**. Tiap kecocokan = **+10 poin**.
2. Total poin maksimal = panjang `exercise` × 10.
3. Persentase = `poin / totalPoin × 100`, **dibulatkan ke bawah** (`Math.floor`).
4. Kategori berdasarkan persentase:

| Persentase | Kategori |
|---|---|
| 100% | `Perfect` |
| 80% – 99% | `Great` |
| 60% – 79% | `Good` |
| 0% – 59% | `Bad` |

5. **Validasi:** jika panjang `exercise` dan `userInput` **berbeda**, kembalikan `Input yang anda masukkan tidak lengkap!` (tanpa menghitung skor).

## 📤 Format Output & Test Case
```js
ayoJoget('<>^v>>>', '<>^^>><');
// Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good

ayoJoget('<>^v', '<>^v');
// Anda mendapatkan score 40 / 40. Persentase: 100%, Kategori : Perfect

ayoJoget('<>^v', '<');
// Input yang anda masukkan tidak lengkap!
```

## 💡 Petunjuk
- Cek panjang kedua string **paling awal**; kalau beda, langsung `return` pesan error.
- Gunakan `Math.floor` untuk persentase agar `50/70×100 = 71.4...` menjadi `71`.
- Susun string output persis seperti contoh, termasuk spasi (`Kategori : Good`).

> ✍️ Tulis jawabanmu di **`09-4-ayo-joget-game.js`** (starter sudah menyediakan kerangka fungsi `ayoJoget`).

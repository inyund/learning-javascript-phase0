# 🔒 02-4: `var`, `let`, dan `const`

## 🎯 Konsep yang Dilatih
Memahami tiga cara mendeklarasikan variabel dan kapan masing-masing boleh diubah (*reassign*).

## 📚 Ringkasan
| Kata kunci | Bisa di-*reassign*? | Catatan |
|---|---|---|
| `var` | ✅ | Cara lama, jarang dipakai lagi. |
| `let` | ✅ | Untuk nilai yang memang akan berubah. |
| `const` | ❌ | Untuk nilai tetap; *reassign* memicu error. |

## ✅ Tugas
1. Buat `let umur = 20`, lalu ubah menjadi `21` dan cetak. (Berhasil.)
2. Buat `const namaKota = "Jakarta"` dan cetak.
3. Tambahkan baris yang mencoba `namaKota = "Bandung"`. Jalankan dan **amati error** yang muncul. Lalu jadikan baris itu komentar (`//`) agar program tetap bisa jalan, dan tulis di komentar apa nama error-nya.
4. **Refleksi (tulis sebagai komentar):** kenapa `const` cocok untuk `namaKota` tapi `let` lebih cocok untuk `umur`?

## 📤 Output yang Diharapkan (setelah baris error dikomentari)
```
21
Jakarta
```

## 💡 Petunjuk
`const` hanya mencegah **reassign** variabel itu sendiri. (Isi elemen array yang dideklarasikan `const` tetap bisa diubah — itu yang kamu lihat di soal `02-2`.)

> ✍️ Tulis jawabanmu di **`02-4-var-let-const.js`**.

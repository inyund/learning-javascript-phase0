# ⚕️ 04-6: BMI Category

## 🎯 Konsep yang Dilatih
Menghitung sebuah nilai lalu mengklasifikasikannya ke dalam **rentang** dengan `if / else if / else`.

## 📖 Cerita
Body Mass Index (BMI) dihitung dengan rumus:
```
BMI = berat / (tinggi × tinggi)
```
dengan `berat` dalam kilogram dan `tinggi` dalam meter.

## 📊 Aturan Kategori
| BMI | Kategori |
|---|---|
| < 18.5 | `Kurus` |
| 18.5 – 24.9 | `Normal` |
| 25 – 29.9 | `Gemuk` |
| ≥ 30 | `Obesitas` |

## ✅ Tugas
Diberikan `let berat = 70` dan `let tinggi = 1.75`. Hitung BMI-nya, lalu cetak kategorinya.

## 📤 Output yang Diharapkan
```
Normal
```
*(BMI = 70 / (1.75 × 1.75) ≈ 22.86 ➡️ Normal)*

## 💡 Petunjuk
- Hitung BMI dulu ke sebuah variabel, baru bandingkan rentangnya.
- Kuadrat tinggi bisa `tinggi * tinggi` atau `tinggi ** 2` (ingat Bab 03).

> ✍️ Tulis jawabanmu di **`04-6-bmi-category.js`**.

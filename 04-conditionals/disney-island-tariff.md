# 🏰 Exercise 1: Disney Island Ticket Tariff (RMT-26 Zurich Fox Challenge)

## Problem Statement
Sebuah wahana bermain 'Disney Island' memberikan tarif tiket sesuai umur dan tinggi anak:
- **Umur 1 tahun ke bawah**: Tampilkan `"Dilarang masuk"`
- **Umur 2 - 3 tahun**: Rp 30.000. Jika tinggi > 70cm, tarif bertambah Rp 10.000.
- **Umur 4 - 7 tahun**: Rp 40.000. Jika tinggi > 120cm, tarif bertambah Rp 15.000.
- **Umur 8 - 10 tahun**: Rp 50.000. Jika tinggi > 150cm, tarif bertambah Rp 20.000.
- **Umur di atas 10 tahun**: Rp 80.000 (tanpa biaya tambahan tinggi).

### Test Cases:
1. `age = 3, height = 95` ➡️ Output: `40000`
2. `age = 8, height = 140` ➡️ Output: `50000`

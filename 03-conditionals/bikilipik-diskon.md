# 🛍️ Challenge: System Voucher Diskon Bikilipik

## Objective
Mampu menerapkan pengkondisian `if-else` bertingkat dan *nested conditional logic*.

## Problem Statement
Toko "Bikilipik" ingin memberikan diskon khusus kepada anggotanya dengan ketentuan:
1. Jika `name` kosong, tampilkan: `"Nama tidak boleh kosong!"`
2. Jika `role` adalah `"member baru"`:
   - Jika `birthMonth` adalah `"Januari"`, tampilkan: `"Selamat [name]!. Anda berhak mendapatkan voucher diskon sebesar 50%!"`
   - Jika lahir di bulan lain, tampilkan: `"Maaf [name], voucher diskon hanya untuk yang lahir di bulan Januari."`
3. Jika `role` adalah `"member lama"`:
   - Jika `birthMonth` adalah `"Januari"`, tampilkan: `"Selamat [name]!. Anda berhak mendapatkan voucher diskon sebesar 30%!"`
   - Jika lahir di bulan lain, tampilkan: `"Maaf [name], voucher diskon hanya untuk yang lahir di bulan Januari."`
4. Jika `role` selain di atas (atau belum terdaftar), tampilkan: `"Selamat datang di Bikilipik, [name]. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu."`

## Test Cases
Uji kode Anda di `bikilipik-diskon.js` dengan mengubah nilai variabel berikut:

- **Case 1**: `name = ""`, `role = "member baru"`, `birthMonth = "Januari"` -> Output: `"Nama tidak boleh kosong!"`
- **Case 2**: `name = "Jaka"`, `role = "belum terdaftar"`, `birthMonth = "Januari"` -> Output: `"Selamat datang di Bikilipik, Jaka. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu."`
- **Case 3**: `name = "Joko"`, `role = "member baru"`, `birthMonth = "Januari"` -> Output: `"Selamat Joko!. Anda berhak mendapatkan voucher diskon sebesar 50%!"`
- **Case 4**: `name = "Aji"`, `role = "member lama"`, `birthMonth = "Januari"` -> Output: `"Selamat Aji!. Anda berhak mendapatkan voucher diskon sebesar 30%!"`
- **Case 5**: `name = "Johan"`, `role = "member baru"`, `birthMonth = "Maret"` -> Output: `"Maaf Johan, voucher diskon hanya untuk yang lahir di bulan Januari."`

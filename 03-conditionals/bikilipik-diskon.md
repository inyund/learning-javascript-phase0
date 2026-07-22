# 🛍️ Exercise 1: System Voucher Diskon Bikilipik

## Problem Statement
Toko Bikilipik menentukan diskon anggota dengan aturan:
1. Jika `name` kosong ➡️ `"Nama tidak boleh kosong!"`
2. Jika `role === "member baru"`:
   - Lahir bulan `"Januari"` ➡️ Voucher diskon 50%
   - Bulan lain ➡️ Voucher diskon khusus bulan Januari saja
3. Jika `role === "member lama"`:
   - Lahir bulan `"Januari"` ➡️ Voucher diskon 30%
   - Bulan lain ➡️ Voucher diskon khusus bulan Januari saja
4. Role lainnya ➡️ Wajib mendaftar terlebih dahulu.

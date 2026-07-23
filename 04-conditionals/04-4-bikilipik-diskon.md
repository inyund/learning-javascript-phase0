# 🛍️ 03-4: Bikilipik Voucher Diskon

## 🎯 Konsep yang Dilatih
Percabangan **bersarang** (*nested if*): keputusan lapis pertama menentukan cabang, lalu di dalam cabang ada keputusan lapis kedua.

## 📖 Cerita
Toko "Bikilipik" memberi voucher diskon berdasarkan **role** pelanggan dan **bulan lahir**. Diberikan `name`, `role`, dan `birthMonth`, cetak pesan yang sesuai.

## 📊 Aturan
1. Jika `name` kosong (`""`) ➡️ `Nama tidak boleh kosong!`
2. Jika `role` = `"member baru"`:
   - `birthMonth` = `"Januari"` ➡️ `Selamat <name>!. Anda berhak mendapatkan voucher diskon sebesar 50%!`
   - selain Januari ➡️ `Maaf <name>, voucher diskon hanya untuk yang lahir di bulan Januari.`
3. Jika `role` = `"member lama"`:
   - `birthMonth` = `"Januari"` ➡️ `Selamat <name>!. Anda berhak mendapatkan voucher diskon sebesar 30%!`
   - selain Januari ➡️ `Maaf <name>, voucher diskon hanya untuk yang lahir di bulan Januari.`
4. Role lainnya (belum terdaftar) ➡️ `Selamat datang di Bikilipik, <name>. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu.`

## 🧪 Test Case
| `name` | `role` | `birthMonth` | Output |
|---|---|---|---|
| `""` | member baru | Januari | `Nama tidak boleh kosong!` |
| `Jaka` | belum terdaftar | Januari | `Selamat datang di Bikilipik, Jaka. Mohon maaf ...` |
| `Joko` | member baru | Januari | `Selamat Joko!. ... diskon sebesar 50%!` |
| `Aji` | member lama | Januari | `Selamat Aji!. ... diskon sebesar 30%!` |
| `Johan` | member baru | Maret | `Maaf Johan, voucher diskon hanya untuk yang lahir di bulan Januari.` |

## 💡 Petunjuk
Cek `name` kosong **paling awal**. Baru setelah itu bercabang berdasarkan `role`, dan di dalam tiap role cek `birthMonth`.

> ✍️ Tulis jawabanmu di **`04-4-bikilipik-diskon.js`**. Coba uji dengan kelima test case di atas.

# 🔁 05-3: Palindrome Checker

## 🎯 Konsep yang Dilatih
Menggabungkan **manipulasi string** (membalik) dengan **percabangan** untuk mengambil kesimpulan `true`/`false`.

## 📖 Apa itu palindrome?
Kata yang dibaca **sama** dari depan maupun belakang. Contoh: `katak`, `civic`, `level`. Bukan palindrome: `kodok`, `javascript`.

## ✅ Tugas
Diberikan `let kata = "katak"`. Tentukan apakah `kata` adalah palindrome.
- Jika palindrome ➡️ cetak `true`
- Jika bukan ➡️ cetak `false`

## 📤 Contoh
```js
let kata = "katak";   // ➡️ true
let kata = "civic";   // ➡️ true
let kata = "kodok";   // ➡️ false
```

## 💡 Petunjuk
Kamu bisa memakai kembali teknik dari `05-2`: balik dulu `kata`, lalu bandingkan hasil baliknya dengan `kata` asli. Jika sama persis, berarti palindrome.

> ✍️ Tulis jawabanmu di **`06-3-palindrome-checker.js`**.

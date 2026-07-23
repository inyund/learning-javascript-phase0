# 🧪 02-2: String Immutability vs Array Mutability

## 🎯 Konsep yang Dilatih
Memahami bahwa **String bersifat immutable** (karakter di sebuah indeks tidak bisa diubah) sedangkan **Array bersifat mutable** (elemen di sebuah indeks bisa diubah).

## ✅ Tugas
Diberikan starter code berikut:
```js
const dua = "defaultvaluedua";
dua[2] = "x";
console.log(dua);

const empat = [1, 9, 6];
empat[1] = "valuedilistpertama";
console.log(empat);
```

1. Sebelum menjalankan, **tebak** dulu apa yang akan tercetak di masing-masing `console.log`.
2. Jalankan kodenya dan bandingkan dengan tebakanmu.
3. Tambahkan sebuah komentar `//` di bawah tiap `console.log` yang menjelaskan **kenapa** hasilnya seperti itu.

## 📤 Output yang Diharapkan
```
defaultvaluedua
[ 1, 'valuedilistpertama', 6 ]
```

## ❓ Pertanyaan Refleksi (jawab sebagai komentar)
- Kenapa `dua[2] = "x"` **tidak** mengubah string `dua`?
- Kenapa `empat[1] = ...` **berhasil** mengubah array `empat`, padahal keduanya sama-sama dideklarasikan dengan `const`?

> ✍️ Tulis jawaban & komentarmu di **`02-2-mutability-check.js`**.

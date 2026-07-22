# 🔔 05-6: FizzBuzz

## 🎯 Konsep yang Dilatih
Soal klasik yang menggabungkan **loop**, **modulus** (`%`), dan **percabangan bertingkat** — sering muncul di interview.

## ✅ Tugas
Loop dari `1` sampai `20`. Untuk tiap angka:
- Habis dibagi **3 dan 5** ➡️ cetak `FizzBuzz`
- Habis dibagi **3** saja ➡️ cetak `Fizz`
- Habis dibagi **5** saja ➡️ cetak `Buzz`
- Selain itu ➡️ cetak angkanya

## 📤 Output yang Diharapkan
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
```

## 💡 Petunjuk
- Cek kondisi **"habis dibagi 3 dan 5"** (`i % 3 === 0 && i % 5 === 0`) **paling awal**. Kalau tidak, angka seperti 15 akan keburu tertangkap oleh cek "habis dibagi 3" saja.

> ✍️ Tulis jawabanmu di **`05-6-fizzbuzz.js`**.

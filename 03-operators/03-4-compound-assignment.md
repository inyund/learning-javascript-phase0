# ➕➕ 03-4: Compound Assignment & Increment

## 🎯 Konsep yang Dilatih
Operator penugasan gabungan (`+=`, `-=`, `*=`, `/=`) sebagai cara singkat mengubah nilai variabel, serta `++` / `--` untuk menaik/menurunkan satu.

## 📚 Ringkasan
| Ditulis | Sama dengan |
|---|---|
| `skor += 5` | `skor = skor + 5` |
| `skor -= 3` | `skor = skor - 3` |
| `skor *= 2` | `skor = skor * 2` |
| `i++` | `i = i + 1` |
| `i--` | `i = i - 1` |

## ✅ Tugas
Mulai dari `let skor = 10`. Lakukan **berurutan** dan cetak `skor` setelah tiap langkah:
1. `skor += 5`
2. `skor -= 3`
3. `skor *= 2`

Lalu, mulai dari `let nyawa = 3`, cetak hasil `nyawa--` diikuti cetak `nyawa` (amati bedanya).

## 📤 Output yang Diharapkan
```
15
12
24
3
2
```

## 💡 Petunjuk
- Tiap operasi mengubah nilai variabel, bukan cuma menghitung sekali.
- `nyawa--` mengembalikan nilai **lama** (`3`) lalu baru menguranginya, sehingga cetak berikutnya menampilkan `2`. Operator `++`/`--` ini akan sangat sering dipakai di Bab Loops.

> ✍️ Tulis jawabanmu di **`03-4-compound-assignment.js`**.

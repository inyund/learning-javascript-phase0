# 🔍 Exercise 2: Pengecekan Tipe Data (typeof)

## Objective
Mengidentifikasi tipe data secara dinamis menggunakan `typeof` dan mengevaluasi kondisi boolean.

## Problem Statement
Diberikan variabel `kata`. Buatlah logika pengkondisian:
- Jika `typeof kata === 'string'`, cetak: `username [kata]`
- Jika `typeof kata === 'number'`, cetak: `age [kata]`
- Jika `typeof kata === 'boolean'`:
  - Jika `true` ➡️ `thank you for agreeing`
  - Jika `false` ➡️ `cannot proceed without agreement`
- Jika `kata` bernilai *falsy* (null/undefined/empty string) ➡️ `Invalid Data`

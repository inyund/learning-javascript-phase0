# 🔴 10-3: Gotta Group 'Em All

## 🎯 Konsep yang Dilatih
Mengolah **array of objects**: membaca properti bersarang (`obj.status.attack`), mengelompokkan (*grouping*) berdasarkan sebuah properti, dan mencari elemen dengan nilai maksimum.

## ✅ Tugas — Dua Fungsi

### Release 1 — `findStrongest(arr)`
Kembalikan **nama** pokemon dengan **total status** tertinggi.
> Total status = `attack + hp + defense`
```js
findStrongest([
  { name: "Charizard", status: { attack: 84, hp: 78, defense: 78 }, type: "Flying" },
  { name: "Gengar",    status: { attack: 65, hp: 60, defense: 60 }, type: "Ghost" },
  { name: "Arbok",     status: { attack: 95, hp: 60, defense: 69 }, type: "Poison" },
]);
// "Charizard"
```

### Release 2 — `gottaGroupEmAll(arr)`
Kelompokkan pokemon berdasarkan `type`, lalu tambahkan key `strongestPokemon` berisi nama pokemon terkuat secara keseluruhan.

## 📤 Contoh
```js
gottaGroupEmAll([
  { name: "Charizard",  status: { attack: 84, hp: 78, defense: 78 }, type: "Flying" },
  { name: "Talonflame", status: { attack: 81, hp: 78, defense: 71 }, type: "Flying" },
  { name: "Gengar",     status: { attack: 65, hp: 60, defense: 60 }, type: "Ghost" },
  { name: "Grimer",     status: { attack: 80, hp: 80, defense: 50 }, type: "Poison" },
  { name: "Arbok",      status: { attack: 95, hp: 60, defense: 69 }, type: "Poison" },
]);
/*
{
  Flying: { list: [ 'Charizard', 'Talonflame' ] },
  Ghost: { list: [ 'Gengar' ] },
  Poison: { list: [ 'Grimer', 'Arbok' ] },
  strongestPokemon: 'Charizard'
}
*/
```

## 💡 Petunjuk
- Untuk grouping, buat object kosong `{}`. Untuk tiap pokemon, kalau `type`-nya belum jadi key, buat dulu `{ list: [] }`, lalu `push` namanya.
- Manfaatkan kembali `findStrongest` untuk mengisi `strongestPokemon`.

> ✍️ Tulis jawabanmu di **`10-3-gotta-group-em-all.js`**.

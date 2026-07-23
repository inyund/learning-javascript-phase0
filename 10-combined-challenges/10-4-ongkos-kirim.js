// Urutan kota: Jakarta -> Depok -> Bogor -> Tangerang -> Bekasi
// Biaya = 20000 per perpindahan kota (jarak antar posisi).

function splitTransactions(array) {
  // "2-Rafi-Jakarta-Depok" -> ["2","Rafi","Jakarta","Depok"]
}

function sortItemsByNumber(array) {
  // urutkan berdasarkan nomor transaksi (kecil ke besar)
}

function objectify(item) {
  // ["1","Zara","Tangerang","Bekasi"]
  // -> { Number:"1", Name:"Zara", Origin:"Tangerang", Destination:"Bekasi" }
}

function calculatePrice(items) {
  // kembalikan array of { Name, Cost } terurut berdasarkan nomor
}

console.log(
  calculatePrice([
    "2-Rafi-Jakarta-Depok",
    "3-Afif-Bekasi-Tangerang",
    "4-Rafki-Bogor-Bekasi",
    "1-Zara-Tangerang-Bekasi",
  ])
);
/*
[
  { Name: 'Zara', Cost: 20000 },
  { Name: 'Rafi', Cost: 20000 },
  { Name: 'Afif', Cost: 20000 },
  { Name: 'Rafki', Cost: 40000 }
]
*/

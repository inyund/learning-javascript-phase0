function arrangeData(data) {
  // Tulis logika Release 1 di sini
}

function relationshipReport(data) {
  // Tulis logika Release 2 di sini
}

console.log(
  relationshipReport({
    nama: "Yumi",
    umur: 23,
    historyPacaran: ["Andhika-125", "Budiarto-95", "Chris-38", "Daniel-900", "Edwin-15", "Frans-365"],
  })
);
// ["Yumi", "6 orang", "0 orang", "900 hari"]

console.log(
  relationshipReport({
    nama: "Yume",
    umur: 25,
    historyPacaran: ["Andhika-125", "Budiarto-95", "Chris-38", "Daniel-0", "Edwin-0"],
  })
);
// [ 'Yume', '3 orang', '2 orang', '125 hari' ]

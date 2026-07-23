function findStrongest(arr) {
  // Tulis logika Release 1 di sini
}

function gottaGroupEmAll(arr) {
  // Tulis logika Release 2 di sini
}

console.log(
  gottaGroupEmAll([
    { name: "Charizard", status: { attack: 84, hp: 78, defense: 78 }, type: "Flying" },
    { name: "Talonflame", status: { attack: 81, hp: 78, defense: 71 }, type: "Flying" },
    { name: "Gengar", status: { attack: 65, hp: 60, defense: 60 }, type: "Ghost" },
    { name: "Grimer", status: { attack: 80, hp: 80, defense: 50 }, type: "Poison" },
    { name: "Arbok", status: { attack: 95, hp: 60, defense: 69 }, type: "Poison" },
  ])
);
/*
{
  Flying: { list: [ 'Charizard', 'Talonflame' ] },
  Ghost: { list: [ 'Gengar' ] },
  Poison: { list: [ 'Grimer', 'Arbok' ] },
  strongestPokemon: 'Charizard'
}
*/

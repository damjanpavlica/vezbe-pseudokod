const fs = require('fs')
const karakteri = require('./karakteri.json')

const recnik = {}
// for (let i = 0; i < karakteri.length; i++) {
//   const rasa = karakteri[i].race
//   if (!recnik[rasa])
//     recnik[rasa] = 1
//   else
//     recnik[rasa]++
// }

for (let i = 0; i < karakteri.length; i++) {
  const rasa = karakteri[i].race
  recnik[rasa] = recnik[rasa] ? recnik[rasa] + 1 : 1
}

console.log(recnik);

fs.writeFileSync('rezultati.json', JSON.stringify(recnik, null, 2))

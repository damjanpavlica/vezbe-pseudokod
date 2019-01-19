const fs = require('fs')
const karakteri = require('./karakteri.json')

/*
const rezultati = []
for (let i = 0; i < karakteri.length; i++) {
  if (!rezultati.includes(karakteri[i].race))
    rezultati.push(karakteri[i].race)
}
*/

// ALTERNATIVNO

const skup = new Set()
for (let i = 0; i < karakteri.length; i++) {
  skup.add(karakteri[i].race)
}

// ALTERNATIVNO 2

const rezultat = new Set(karakteri.map(x => x.race))

console.log(rezultat)

fs.writeFileSync('rezultati.json', JSON.stringify(skup, null, 2))

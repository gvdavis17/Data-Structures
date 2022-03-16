const jedi =[];
jedi[0] = "Luke";
console.log(jedi);
jedi.push("Obi-Wan Kenobi");
console.log(jedi);
jedi.unshift("Yoda");
console.log(jedi);
console.log(jedi(1));
const force = jedi.pop();
console.log(jedi);
jedi.shift();
console.log(jedi);
const sithLords = [
    'Darth Vader',
    'Darth Disious',
    'Darth Maul',
];

const imperialOfficer = [
    'Grand Moff Tarkin',
    'Orson Krennic',
]

const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

console.log(starWarsVillians.slice(0, 2));
 const droids = {
     astromech: 'R2-D2',
     protocol: 'C-3P0',
     assassin: 'IG-88'
 };
 console.log(droids('astromech'));

 console.log(droids.protocol);

 droids['assassin'] = 'IG-11'

console.log(droids);

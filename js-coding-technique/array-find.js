// Longhand:

const pets = [
  { type: 'Dog', name: 'tommy' },
  { type: 'Cat', name: 'miu' },
  { type: 'Dog', name: 'maxxian' }
];

function findDog(name) {
  for (let i = 0; i < pets.length; ++i) {
    if (pets[i].type === 'Dog' && pets[i].name === name) {
      return pets[i];
    }
  }
}

// Shorthand:

pet = pets.find(pet => pet.type === 'Dog' && pet.name === 'tommy');
console.log(pet); // { type: 'Dog', name: 'tommy' }

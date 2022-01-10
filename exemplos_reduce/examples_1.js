const data = require('./data/api_data');

const totalOfMonstersDefeatedByAdventurers = (arrayOfAdventurers) => {
  return arrayOfAdventurers.reduce((acc, adventurer) => {
    return acc + adventurer.defeatedMonsters.length;
  }, 0);
};

// console.log(totalOfMonstersDefeatedByAdventurers(data.adventurers));


// const obj = { name: 'Thalles' };
// const name = obj.name;
// const { name } = obj;

// const array = [1,5,'thalles', null];
// const { length } = array;
// console.log(length);

// const string = 'Thalles';
// const { length } = string;
// console.log(length);

const weaponsWeightReport = (arrayOfWeapons) => {
  // const length = arrayOfWeapons.length;
  const { length } = arrayOfWeapons;

  return arrayOfWeapons.reduce((accumulator, weapon, index) => {
    const { name, weight } = weapon;

    if (index === length - 1) {
      return `${accumulator}Weapon: ${name} | Weight: ${weight}`;
    }

    return `${accumulator}Weapon: ${name} | Weight: ${weight}\n`;
  }, '')/* .trim() */;
};

// console.log(weaponsWeightReport(data.weapons));
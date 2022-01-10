const data = require('./data/api_data');

// const obj = {};
// obj.name = 'Thalles';
// console.log(obj);

const monsterSpecialAbilities = (arrayOfMonsters) => {
  return arrayOfMonsters.reduce((accumulator, monster) => {
    const { name, special_abilities } = monster;
    accumulator[name] = special_abilities;
    // accumulator[name] = special_abilities.map(({ name }) => name);

    return accumulator;
  }, {});
};

// console.log(monsterSpecialAbilities(data.monsters));

const highStrengthMonstersNameAndExp = (arrayOfMonsters) => {
  return arrayOfMonsters.reduce((accumulator, monster) => {
    const { stats: { strength }, name, exp_by_defeating } = monster;

    if (strength >= 20) {
      accumulator.push({ name, exp_by_defeating });
    }

    return accumulator;
  }, []);
};

// console.log(highStrengthMonstersNameAndExp(data.monsters));

// let newArray = [];
// const array = [1,2,3,5];
// for (let index = 0; index < array.length; index++) {
//   newArray.push(array[index] * 2);
// }

// console.log(newArray);

const data = require('./data/api_data');

/*
  Categorias de pessoas aventureiras por level:
  lv 1-5 -> novice
  lv 6-10 -> intermediate
  lv > 10 -> advanced
*/

const countAdventurersPerLv = (arrayOfAdventurers) => {
  return arrayOfAdventurers.reduce((acc, { level }) => {
    if (level >= 1 && level <= 5) acc.novice += 1;
    if (level >= 6 && level <= 10) acc.intermediate += 1;
    if (level > 10) acc.advanced += 1;

    return acc;
  },
  { novice: 0, intermediate: 0, advanced: 0 });
};

// console.log(countAdventurersPerLv(data.adventurers));




const reportOfAdventurersMission = (arrayOfAdventurers) => {
  const { monsters, weapons } = data;

  return arrayOfAdventurers.reduce((acc, adventurer) => {
    const { name, race, class: adventurerClass, weapons: adventurerWeapons, defeatedMonsters } = adventurer;
    acc[0][name] = { race, class: adventurerClass };

    acc[1].totalExpGained += defeatedMonsters.reduce((acc, monsterId) => {
      const { exp_by_defeating } = monsters.find((monster) => monster.id === monsterId);
      return acc + exp_by_defeating;
    }, 0);

    acc[2].totalWeaponsDmg += adventurerWeapons.reduce((acc, weaponInd) => {
      const { damage } = weapons.find((weapon) => weapon.id === weaponInd);
      return acc + damage;
    }, 0);

    return acc;
  },
  [{}, { totalExpGained: 0 }, { totalWeaponsDmg: 0 }]);
};

// console.log(reportOfAdventurersMission(data.adventurers));
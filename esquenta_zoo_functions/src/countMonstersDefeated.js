const data = require('../data/api_data');

function getAdventurerWithHigherDamageWeapon(options) {
  const { adventurers, monsters } = data;

  const monsterDefeatedMap = monsters.reduce((acc, { type }) => {
    if (!acc[type]) {
      const monstersByType = monsters.filter((m) => m.type === type).map((m) => m.id);

      const monsterDefeatedCount = adventurers.reduce((acc, { defeatedMonsters }) => {
        if(defeatedMonsters.includes(...monstersByType)) return acc + 1;
        return acc;
      }, 0);

      acc[type] = monsterDefeatedCount;
    }
    return acc;
  }, {});

  if(options) {
    const { type } = options;
    return monsterDefeatedMap[type];
  }

  return monsterDefeatedMap;
}

module.exports = getAdventurerWithHigherDamageWeapon;
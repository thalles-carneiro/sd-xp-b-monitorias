const data = require('../data/api_data');

function getMonstersNameBySize() {
  const { monsters } = data;

  const monsterSizeMap = monsters.reduce((acc, { size }) => {
    const monstersNameBySize = monsters.filter((m) => m.size === size).map((m) => m.name);

    acc[size] = monstersNameBySize;

    return acc;
  }, {});

  return monsterSizeMap;
}

module.exports = getMonstersNameBySize;
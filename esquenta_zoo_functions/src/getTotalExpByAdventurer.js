const data = require('../data/api_data');

function getTotalExpByAdventurer(id) {
  const { adventurers, monsters } = data;

  const adventurer = adventurers.find((a) => a.id === id);

  if (!adventurer) {
    throw new Error('O id inserido não é de uma pessoa aventureira!');
  }

  const { defeatedMonsters } = adventurer;

  const totalExp = monsters.reduce((accExp, { id, exp_by_defeating }) => {
    if (defeatedMonsters.includes(id)) return accExp + exp_by_defeating;
    return accExp;
  }, 0);

  return totalExp;
}

module.exports = getTotalExpByAdventurer;
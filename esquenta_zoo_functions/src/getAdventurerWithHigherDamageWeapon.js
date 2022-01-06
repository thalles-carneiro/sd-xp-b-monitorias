const data = require('../data/api_data');

function getAdventurerWithHigherDamageWeapon() {
  const { adventurers, weapons } = data;

  const maxLv = Math.max(...adventurers.map((a) => a.level));

  const { weapons: weaponsOfAdventurerOfMaxLv } = adventurers.find((adventurer) => adventurer.level === maxLv);

  const weaponsFiltered = weapons.filter((w) => weaponsOfAdventurerOfMaxLv.includes(w.id));

  weaponsFiltered.sort((a, b) => b.damage - a.damage);

  return weaponsFiltered[0];
}

module.exports = getAdventurerWithHigherDamageWeapon;
const getAdventurerWithHigherDamageWeapon = require('../src/getAdventurerWithHigherDamageWeapon');

describe('1 - Crie uma função que busca a arma com maior dano que o aventureiro de maior level possui', () => {
  it('encontra a arma com maior dano da pessoa aventureira de maior level, e retorna o objeto contendo as informações da arma', () => {
    const actual = getAdventurerWithHigherDamageWeapon();

    const expected = {
      id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
      name: 'Halberd',
      category: 'Martial Melee Weapons',
      weight: '6 lb.',
      damage: 18,
      properties: [
        'heavy',
        'reach',
        'two-handed',
      ],
    };

    expect(actual).toEqual(expected);
  });
});
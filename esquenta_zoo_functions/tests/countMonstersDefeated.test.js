const countMonstersDefeated = require('../src/countMonstersDefeated');

describe('4 - Crie uma função que realiza a contagem dos monstros derrotados', () => {
  it('sem parâmetros, retorna os tipos de monstros e quantos já foram derrotados pelos aventureiros', () => {
    const actual = countMonstersDefeated();

    const expected = {
      monstrosity: 2,
      dragon: 1,
      elemental: 3,
      celestial: 1,
      humanoid: 1,
    };

    expect(actual).toStrictEqual(expected);
  });

  it('recebendo como parâmetro um objeto com a chave \'type\', retorna um número, a quantidade de monstros que já foi derrotado daquele tipo', () => {
    {
      const actual = countMonstersDefeated({ type: 'elemental' });
      const expected = 3;
      expect(actual).toBe(expected);
    }

    {
      const actual = countMonstersDefeated({ type: 'dragon' });
      const expected = 1;
      expect(actual).toBe(expected);
    }
  });
});

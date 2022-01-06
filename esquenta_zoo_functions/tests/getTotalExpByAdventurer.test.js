const getTotalExpByAdventurer = require('../src/getTotalExpByAdventurer');

const emeryId = 'b0dc644a-5335-489b-8a2c-4e086c7819a2';
const ardithId = '4b40a139-d4dc-4f09-822d-ec25e819a5ad';

describe('4 - Crie uma função que calcula o total de experiência ganha por uma pessoa aventureira de acordo com os monstros que já derrotou', () => {
  it('retorna o valor total da experiência ganha pela pessoa aventureira passada pelo id', () => {
    {
      const actual = getTotalExpByAdventurer(emeryId);
      const expected = 300;
      expect(actual).toEqual(expected);
    }

    {
      const actual = getTotalExpByAdventurer(ardithId);
    const expected = 1050;
    expect(actual).toEqual(expected);
    }
  });

  it('dispara erro com a mensagem "O id inserido não é de uma pessoa aventureira!", quando o id inserido não for de uma pessoa aventureira', () => {
    const actual = '4b40a139-d2dc-4f09-832d-ac25y814a5ad';

    expect(() => getTotalExpByAdventurer(actual)).toThrow(/^O id inserido não é de uma pessoa aventureira!$/);
  });
});

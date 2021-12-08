const cnhProcess = require('../src/cnhProcess');

/*
  Essa função recebe o nome e o ano de nascimento de uma pessoa,
  retornando se ela pode dar entrada na CNH.

  Parâmetros:
    - Uma string e um número. Exemplos: 'Daniel', 2000;

  Comportamento:
    - cnhProcess('Ingrid', 2000) // Retorno: "Ingrid tem 21 anos de idade e pode iniciar o processo."
    - cnhProcess('João', 2010) // Retorno: "João tem 11 anos de idade e não pode iniciar o processo."

  Obs.: Se a pessoa tiver menos de 18 anos ela não pode iniciar o processo.
*/

describe('Implemente a função `cnhProcess`', () => {
  it('Ao passar os argumentos "Ingrid" e 2000, deve retornar: "Ingrid tem 21 anos de idade e pode iniciar o processo.', () => {
    expect(cnhProcess("Ingrid", 2000)).toBe('Ingrid tem 21 anos de idade e pode iniciar o processo.');
  });

  it('Ao passar os argumentos "João" e 2010, deve retornar: "João tem 11 anos de idade e pode iniciar o processo.', () => {
    expect(cnhProcess("João", 2010)).toBe('João tem 11 anos de idade e não pode iniciar o processo.');
  });
});
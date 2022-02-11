// Criando a div como elemento pai da img, h3 e p
const filmesDisponiveis = document.getElementById('filmes-disponiveis');

for (let index = 0; index < movies.length; index += 1) {
  const div = createCardElement('div');
  div.classList.add('card-filmes-disponiveis');
  appendCardElement(filmesDisponiveis, div);

  // Criando o elemento img e colocando como filho da div
  createAppendAndSetElement('img', div, 'src', movies[index].imagePath, []);

  // Criando o elemento h3 e colocando como filho da div
  createAppendAndSetElement('h3', div, 'innerText', 'Título: ' + movies[index].title, ['blue', 'underline']);

  // Criando o elemento p e colocando como filho da div
  createAppendAndSetElement('p', div, 'innerText', 'Nota do filme: ' + movies[index].rating, []);
}
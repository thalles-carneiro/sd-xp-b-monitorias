/*
  Função que faz uma requisição
  para o endpoint e retorna o array de filmes
*/
const fetchFilmList = async () => {
  const url = 'https://ghibliapi.herokuapp.com/films';

  const response = await fetch(url);
  const result = await response.json();

  return result;
}

/*
  Função que cria um card para o
  filme que vier por parâmetro
*/
const createCard = (film) => {
  const { title, image, description } = film;

  const filmDiv = document.createElement('div');

  filmDiv.classList.add('card');

  const h3Title = document.createElement('h3');
  h3Title.innerText = title;
  const filmImage = document.createElement('img');
  filmImage.src = image;
  const pDescription = document.createElement('p');
  pDescription.innerText = description;

  filmDiv.appendChild(h3Title);
  filmDiv.appendChild(filmImage);
  filmDiv.appendChild(pDescription);

  return filmDiv;
}

/*
  Função que utilizar o array recebido pela requisição
  para inserir na tela um card para cada filme
*/
const createFilmList = async () => {
  const filmsSection = document.querySelector('#films');

  const films = await fetchFilmList();
  films.forEach((film) => {
    const card = createCard(film);
    filmsSection.appendChild(card);
  });
}

createFilmList();

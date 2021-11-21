const button = document.querySelector('button');
const buttonSalvaNome = document.getElementById('salva-nome');
const sectionLog = document.querySelector('#console-log');
const section = document.querySelector('#mostra-nome');

const nome = localStorage.getItem('nome');
section.innerHTML = nome;

function createElement(tag, classCss, text) {
  const element = document.createElement(tag);
  element.classList.add(classCss);
  element.innerText = text;
  sectionLog.appendChild(element);
}

createElement('h4', 'log', 'Nosso texto de console.log()');

const h4 = document.querySelector('.log');
h4.classList.remove('amarelo');

button.addEventListener('click', function () {
  const input = document.querySelector('#input-text');
  const inputValue = input.value;

  const section = document.querySelector('#mostra-nome');
  section.innerHTML = '<h3>' + inputValue + '</h3>';
});

buttonSalvaNome.addEventListener('click', salvaNomeFn);

function salvaNomeFn() {
  const input = document.querySelector('#input-text');
  const inputValue = input.value;

  localStorage.setItem('nome', inputValue);
  input.value = '';
}

createElement('h3', 'amarelo', 'Outro texto');

const h3 = document.getElementsByClassName('amarelo')[1];

const h1 = document.getElementsByTagName('h1')[0];

h4.innerText = h3.outerHTML;

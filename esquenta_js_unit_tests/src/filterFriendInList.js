/*
  Essa função recebe um array de strings,
  retornando um array apenas com as strings que contenham exatamente 4 caracteres.

  Parâmetros:
    - Um array de strings. Exemplos: ["Ryan", "Kieran", "Mark"];

  Comportamento:
    - filterFriendInList(["Ryan", "Kieran", "Mark"]) // Retorno: ["Ryan", "Mark"]
    - filterFriendInList(["Ryan", "Jimmy", "123", "4", "Cool Man"]) // Retorno: ["Ryan"]
    - filterFriendInList(["Ryan", "Kieran", "Mark"]) // Retorno: ["Ryan", "Mark"]

  Obs.: Mantenha no retorno os nomes na ordem da lista original.
*/

const filterFriendInList = (listOfNames) => {
  const myFriends = [];
  for (const name of listOfNames) {
    if (name.length === 4) {
      myFriends.push(name);
    }
  }
  return myFriends;
}

module.exports = filterFriendInList;
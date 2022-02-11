function updateBillAndTotalValue(event) {
  billValue = parseFloat(event.target.value);

  updateTotalValue(billValue, numberOfPeopleValue);
}

function updateNumberOfPeopleAndTotalValue(event) {
  numberOfPeopleValue = parseInt(event.target.value);

  updateTotalValue(billValue, numberOfPeopleValue);
}

function updateTotalValue(billValueInput, numberOfPeopleInput) {
  totalValue = (billValueInput * (1 + tipValue)) / numberOfPeopleInput;
  const tipAmount = (billValueInput * tipValue) / numberOfPeopleInput;

  const tipAmountPerPerson = document.querySelector('#result-tip-amount');
  tipAmountPerPerson.innerText = '$ ' + tipAmount.toFixed(2);

  const totalPerPerson = document.querySelector('#result-total');
  totalPerPerson.innerText = '$ ' + totalValue.toFixed(2);
}

function applyTipAndUpdateTotalValue(event) {
  const selectedTip = document.querySelector('.selected');

  if (selectedTip) {
    selectedTip.classList.toggle('selected');
  }
  event.target.classList.toggle('selected');

  const regex = /\d+/;
  const string = event.target.innerText;
  const value = string.match(regex)[0];
  const tip = parseInt(value) / 100;
  tipValue = tip;

  updateTotalValue(billValue, numberOfPeopleValue);
}
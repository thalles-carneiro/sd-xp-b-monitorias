let billValue = 0;
let numberOfPeopleValue = 1;
let totalValue = 0;
let tipValue = 0;

const bill = document.querySelector('#bill');
bill.addEventListener('change', updateBillAndTotalValue);

const numberOfPeople = document.querySelector('#number-of-people');
numberOfPeople.addEventListener('change', updateNumberOfPeopleAndTotalValue);

const selectTipContainer = document.querySelector('#select-tip');
selectTipContainer.addEventListener('click', applyTipAndUpdateTotalValue);
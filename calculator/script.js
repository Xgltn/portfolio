const displayCurrent = document.getElementById('current');
const displayPrevious = document.getElementById('previous');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === 'C') {
      currentInput = '';
      previousInput = '';
      operator = '';
      displayCurrent.innerText = '0';
      displayPrevious.innerText = '';
    } else if (value === '=') {
      if (previousInput && currentInput && operator) {
        const result = eval(`${previousInput}${operator}${currentInput}`);
        displayCurrent.innerText = result;
        displayPrevious.innerText = '';
        currentInput = result;
        previousInput = '';
        operator = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        displayPrevious.innerText = `${previousInput} ${operator}`;
        currentInput = '';
        displayCurrent.innerText = '0';
      }
    } else {
      currentInput += value;
      displayCurrent.innerText = currentInput;
    }
  });
});

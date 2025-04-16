const display = document.getElementById('display');
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
      display.innerText = '0';
    } else if (value === '=') {
      if (previousInput && currentInput && operator) {
        const result = eval(`${previousInput}${operator}${currentInput}`);
        display.innerText = result;
        currentInput = result;
        previousInput = '';
        operator = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});

const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

let currentInput = '0';
let operator = null;
let previousInput = '';

function updateScreen() {
  screen.textContent = currentInput;
}

buttons.forEach((button) => {
  if (button.id === 'clear') {
    return;
  }
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (!isNaN(value) || value === '.') {
      handleNumber(value);
    } else {
      handleOperator(value);
    }

    updateScreen();
  });
});

function handleNumber(num) {
  if (currentInput === '0' && num !== '.') {
    currentInput = num;
  } else {
    if (!(num === '.' && currentInput.includes('.'))) {
      currentInput += num;
    }
  }
}

function handleOperator(op) {
  switch (op) {
    case 'DEL':
      currentInput = currentInput.slice(0, -1) || '0';
      break;
    case '±':
      currentInput = (parseFloat(currentInput) * -1).toString();
      break;
    case '%':
      currentInput = (parseFloat(currentInput) / 100).toString();
      break;
    case '÷':
    case '×':
    case '−':
    case '+':
      operator = op;
      previousInput = currentInput;
      currentInput = '';
      break;
    case '=':
      if (operator && previousInput !== '' && currentInput !== '') {
        calculate();
        operator = null;
      }
      break;
  }
}

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  currentInput = '0';
  operator = null;
  previousInput = '';
  updateScreen();
});

function calculate() {
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case '+':
      currentInput = (prev + curr).toString();
      break;
    case '−':
      currentInput = (prev - curr).toString();
      break;
    case '×':
      currentInput = (prev * curr).toString();
      break;
    case '÷':
      currentInput = curr !== 0 ? (prev / curr).toString() : 'Error';
      break;
  }

  previousInput = '';
}

updateScreen();

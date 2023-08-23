let displayValue = '';
let operator = '';
let firstOperand = '';
let shouldClearDisplay = false;

function updateDisplay() {
  const display = document.getElementById('result');
  display.value = displayValue;
}

function appendNumber(number) {
  if (shouldClearDisplay) {
    displayValue = '';
    shouldClearDisplay = false;
  }
  displayValue += number;
  updateDisplay();
}

function appendOperator(op) {
  calculate();
  operator = op;
  firstOperand = displayValue;
  shouldClearDisplay = true;
}

function calculate() {
  if (operator && firstOperand) {
    switch (operator) {
      case '+':
        displayValue = String(parseFloat(firstOperand) + parseFloat(displayValue));
        break;
      case '-':
        displayValue = String(parseFloat(firstOperand) - parseFloat(displayValue));
        break;
      case '*':
        displayValue = String(parseFloat(firstOperand) * parseFloat(displayValue));
        break;
      case '/':
        displayValue = String(parseFloat(firstOperand) / parseFloat(displayValue));
        break;
    }
    updateDisplay();
    operator = '';
    firstOperand = '';
  }
}

function clearDisplay() {
  displayValue = '';
  operator = '';
  firstOperand = '';
  shouldClearDisplay = false;
  updateDisplay();
}

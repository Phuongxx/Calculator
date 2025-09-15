let currentInput = 0;
let previousInput = 0;
let operator = "+";
let liste = "";

function number(num) {
  if (operator === "=") {
    previousInput = 0;
    operator = "+";
    currentInput = 0;
    updatePreviousInput("");
    updateCurrentInput(currentInput);
  }
  currentInput = currentInput * 10 + num;
  updateCurrentInput(currentInput);
}

function addition() {
  performOperator();
  operator = "+";
  currentInput = 0;
  updatePreviousInput(previousInput + operator);
}
function subtract() {
  performOperator();
  operator = "-";
  currentInput = 0;
  updatePreviousInput(previousInput + operator);
}

function multiply() {
  performOperator();
  operator = "*";
  currentInput = 0;
  updatePreviousInput(previousInput + operator);
}

function divide() {
  performOperator();
  operator = "/";
  currentInput = 0;
  updatePreviousInput(previousInput + operator);
}

function square() {
  performOperator();
  operator = "^2";
  currentInput = 0;
  updatePreviousInput(previousInput + operator);
}
function root() {
  performOperator();
  operator = "√";
  currentInput = 0;
  updatePreviousInput(previousInput + operator);
}

function calculate() {
  performOperator();
  operator = "=";
  updatePreviousInput(previousInput + operator);
  updateCurrentInput(previousInput);
}

function clearList() {
  liste = "";
  previousInput = 0;
  currentInput = 0;
  operator = "+";
  updatePreviousInput("");
  updateCurrentInput(currentInput);
  showHistory();
}

function performOperator() {
  let currentResult = previousInput;

  if (operator === "+") {
    currentResult = previousInput + currentInput;
  } else if (operator === "-") {
    currentResult = previousInput - currentInput;
  } else if (operator === "*") {
    currentResult = previousInput * currentInput;
  } else if (operator === "/") {
    currentResult = previousInput / currentInput;
  } else if (operator === "^2") {
    currentResult = previousInput * previousInput;
  } else if (operator === "√") {
    currentResult = Math.sqrt(previousInput);
  }
  if (operator !== "=") {
    let listString =
      "<p>" +
      previousInput +
      operator +
      currentInput +
      " = " +
      currentResult +
      "</p>";

    liste = listString + liste;
    showHistory();

    previousInput = currentResult;
  }
  currentInput = 0;
  updateCurrentInput(currentInput);
}
function updatePreviousInput(text) {
  document.getElementById("interimState").value = text;
}

function updateCurrentInput(text) {
  document.getElementById("currentInput").value = text;
}

function showHistory() {
  document.getElementById("history").innerHTML = liste;
}

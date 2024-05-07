let digits = document.getElementsByClassName("digit");
let operators = document.getElementsByClassName("operator");
let input_box = document.getElementById("input_box");
let equal = document.getElementById("equal");
let clearall = document.getElementById("clearall");
let deleteitem = document.getElementById("delete");

let value = "";
let result = 0;

function calculator(button) {
const lastCharIsOperator = /[+\-*/.]/.test(value[value.length - 1]);

if (lastCharIsOperator && /[+\-*/.]/.test(button.value)) {
  return;
}

value = value.trim() + button.value;
input_box.value = value;

if (
  !value.endsWith("+") &&
  !value.endsWith("-") &&
  !value.endsWith("/") &&
  !value.endsWith("*") &&
  
  !value.startsWith("+") &&
  !value.startsWith("-") &&
  !value.startsWith("/") &&
  !value.startsWith("*") &&
  value !== ""
) {
  result = eval(value);
}
}


function showResult() {
  input_box.value = result;
}

function clearAll() {
  value = "";
  input_box.value = "";
}

function deleteLastInput() {
  value = value.slice(0, -1);
  input_box.value = value;
}

// Event listeners
Array.from(digits).forEach((button) => {
  button.addEventListener("click", () => calculator(button));
});

Array.from(operators).map((button) => {
  button.addEventListener("click", () => calculator(button));
});

equal.addEventListener("click", showResult);
clearall.addEventListener("click", clearAll);

deleteitem.addEventListener("click", deleteLastInput);

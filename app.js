function clearInputs() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
}
function multiplyBy() {
  num1 = parseFloat(document.getElementById("firstNumber").value);
  num2 = parseFloat(document.getElementById("secondNumber").value);
  document.getElementById("result").innerHTML = num1 * num2;
  clearInputs();
}

function divideBy() {
  num1 = parseFloat(document.getElementById("firstNumber").value);
  num2 = parseFloat(document.getElementById("secondNumber").value);
  document.getElementById("result").innerHTML = num1 / num2;
  clearInputs();
}

function plusBy() {
  num1 = parseFloat(document.getElementById("firstNumber").value);
  num2 = parseFloat(document.getElementById("secondNumber").value);
  document.getElementById("result").innerHTML = num1 + num2;
  clearInputs();
}
function minusBy() {
  num1 = parseFloat(document.getElementById("firstNumber").value);
  num2 = parseFloat(document.getElementById("secondNumber").value);
  document.getElementById("result").innerHTML = num1 - num2;
  clearInputs();
}

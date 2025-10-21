let calculation = "";
function getValue(value) {
  calculation += value;
  document.querySelector(".js-output").innerHTML = calculation;
}
function evaluation() {
  calculation = eval(calculation);
  document.querySelector(".js-output").innerHTML = calculation;
}

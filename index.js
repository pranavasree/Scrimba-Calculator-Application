let num1El = document.getElementById("num1");
let num2El = document.getElementById("num2");
let resvalEl = document.getElementById("res");
function add() {
  let res = parseFloat(num1El.value) + parseFloat(num2El.value);
  resvalEl.innerHTML += res;
}
function sub() {
  let res = parseFloat(num1El.value) - parseFloat(num2El.value);
  resvalEl.innerHTML += res;
}
function mul() {
  let res = parseFloat(num1El.value) * parseFloat(num2El.value);
  resvalEl.innerHTML += res;
}
function div() {
  let res = parseFloat(num1El.value) / parseFloat(num2El.value);
  resvalEl.innerHTML += res;
}

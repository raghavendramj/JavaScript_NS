function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

// var callBack = add;
// console.log("My Result : ", add(10, 20));
// console.log("My Result : ", callBack(10, 20));

function operate(a, b, callBack) {
  var result = callBack(a, b);
  console.log("Result : ", result);
}

operate(10, 20, add);
operate(50, 10, subtract);
operate(50, 10, multiply);

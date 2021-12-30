function showMessage(message, name) {
  console.log(message, " : ", name);
}

showMessage("Welcome to the class", " John Doe");

function addNumbers(a, b) {
  for (let eachArgument of arguments) {
    console.log("Each Argument passed : ", eachArgument);
  }
  return a + b;
}
addNumbers(10, 20);

//Normal function -> 2 parameters
function divideNumbers(num, den) {
  //Base condition check
  if (den == 0) {
    console.log("Denomintor can't be zero!");
    return -1;
  }

  //Perfoming the operation
  var result = num / den;

  //returning the resukt
  return result;
}


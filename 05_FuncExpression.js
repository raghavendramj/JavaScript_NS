//Normal Function
function printMessage(message) {
  console.log("Your message : ", message);
}
printMessage("Welcome to the class");

//Function expression -> Anonymous function
var printMessage = function (message) {
  console.log("Your message : ", message);
};
printMessage("Welcome to the class");

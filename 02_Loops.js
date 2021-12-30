function forLoopExample() {
  var fruits = ["Apple", "oranges", "Bananas", "Mangoes"];

  //For Loop
  console.log("For Loop......");

  //initialzation; conditioncheck ; increment
  for (var i = 0; i < fruits.length; i++) {
    var fruit = fruits[i];
    console.log("Each Fruit Name : ", fruit);
  }

  //For Each Loop
  console.log("For Each Loop......");
  for (var eachFruit of fruits) {
    console.log("Each Fruit is  : ", eachFruit);
  }
}

// forLoopExample();
function whileLoop() {
  var numbers = [1, 2, 3, 4, 5, 6, 7];

  //initialzation;
  var i = 0;
  //conditioncheck ;
  while (i < numbers.length) {
    console.log("Each Number is : ", numbers[i]);
    // increment
    i++;
  }
}

// whileLoop();

function doWhileLoop() {
  var names = ["Virat", "Rahul", "Rishabh", "Bumrah"];

  //initialzation;
  var i = 0;
  do {
    var eachName = names[i];
    console.log("Each Name is : ", eachName);
    // increment
    i++;
  } while (i < names.length);
  //conditioncheck ;
}

doWhileLoop();

function callByValue() {
  var a = 10;
  var b = a;
  console.log("Value of A : ", a); // 10
  console.log("Value of B : ", b); //10
  console.log("*************** After modification of Array A ");
  a = 23;
  console.log("Value of A : ", a); //23
  console.log("Value of B : ", b); //10
}

callByValue();

function passByReference() {
  var arr1 = ["Bangalore", "Mysore", "Mumbai", "Chennai"];
  var arr2 = arr1;
  console.log("Value of arr1 : ", arr1); // -> "Bangalore", "Mysore", "Mumbai", "Chennai"
  console.log("Value of arr2 : ", arr2); // -> "Bangalore", "Mysore", "Mumbai", "Chennai"

  arr1.push("Kolkota"); //"Bangalore", "Mysore", "Mumbai", "Chennai", "Kolkota"
  arr1.push("Delhi"); // "Bangalore", "Mysore", "Mumbai", "Chennai", "Kolkota", "Delhi"

  console.log("*************** After modification of Array 1 ");

  console.log("Value of arr1 : ", arr1);
  console.log("Value of arr2 : ", arr2);
}

passByReference();

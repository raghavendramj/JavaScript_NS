function removeDuplicates(arr, size) {
  if (size == 0 || size == 1) 
    return size;

  var temp = new Array();

  var j = 0;
  for (var i = 0; i < size; i++) {
    if (arr[i] != arr[i + 1]) 
        temp[j++] = arr[i];
  }

  temp[j++] = arr[size - 1];

  for (var i = 0; i < j; i++) 
     arr[i] = temp[j];

  return j;
}

console.log("Result is : ", removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5], 9));

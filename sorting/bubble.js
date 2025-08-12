let arrayToSort = [1, 32, 43, 12, 34, 90];
function sort(inputArray) {
  // let swap = false;
  // do {
  //   swap = false;
  //   for (let i = 0; i < inputArray.length; i++) {
  //     if (inputArray[i + 1] < inputArray[i]) {
  //       let temp = inputArray[i];
  //       inputArray[i] = inputArray[i + 1];
  //       inputArray[i + 1] = temp;
  //       swap = true;
  //     }
  //   }
  // } while (swap);
  // return inputArray;
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length - 1 - i; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        let temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
      }
    }
  }
  return inputArray;
}
console.log(sort(arrayToSort));

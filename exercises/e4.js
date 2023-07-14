// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
  // let maxNum = Math.max(array[i]);
  // let minNum = Math.min(...array);

  // let minNum = [];
  // for (let i = 0; i < array.length; i++) {
  //   if(Math.min(array[i])) {
  //     return minNum.push(Math.min(array[i]))
  //   }
  // }
  
  // return minNum
  
}

export function findMaxValueInArray(array) {
  // Your code goes here...
  // let maxNum = Math.max(...array);
  let maxNum = [];
  for (let i = 0; i < array.length; i++) {
    if(Math.max(array[i])) {
      return maxNum.push(Math.max(array[i]));
    }
  }

  return maxNum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

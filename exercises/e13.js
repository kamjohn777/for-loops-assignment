
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
    // let depositValues = [];
    
    // for (let i = 0; i < array.length; i++) {
    //   const sumOfDeposits = (array[i].deposits || []).reduce(function(acc, val) {
    //     return acc + val;
    //   }, 0);
  
    //   if (sumOfDeposits < 2000) {
    //     depositValues.push(array[i]);
    //   }
    // }
  
    // return depositValues;
    
      return array.filter((account) => {
        const sumOfDeposits = (account.deposits || []).reduce((acc, val) => acc + val, 0);
        return sumOfDeposits < 2000;
      });
    }
    
  



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

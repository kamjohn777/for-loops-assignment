
// EXERCISE 5
// Return an array of all bank account holders names
// Array example: bankAccounts in /data/data.js
// getAllClientNames(bankAccounts) => ['Kevin', 'Spenser']

export function getAllClientNames(array) {
  // Your code goes here...
  const bankAccountsNoPositiveBalance = [
    { id: 1, name: "Susan", balance: -100.32 },
    { id: 2, name: "Morgan", balance: -1100.0 },
    { id: 3, name: "Joshua", balance: -18456.57 },
    { id: 4, name: "Candy", balance: 0.0 },
    { id: 5, name: "Phil", balance: -18 },
  ];

  let clientNames = [];

  for(let i = 0; i < array.length; i++) {
    clientNames.push(array[i].name);
  }
  return clientNames;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

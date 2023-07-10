
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    const deposits = account.deposits || [];
    const withdrawals = account.withdrawals || [];
    let depositSum = 0;
    let withdrawalSum = 0;

    for (let j = 0; j < deposits.length; j++) {
      depositSum += deposits[j];
    }

    for (let j = 0; j < withdrawals.length; j++) {
      withdrawalSum += withdrawals[j];
    }

    const balance = depositSum - withdrawalSum;

    if (balance !== account.balance) {
      result.push(account);
    }
  }

  return result;
  }




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

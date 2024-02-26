const accountId = 144553
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" 
let accountState;

// accountId = 2
// This will throw an error.

accountEmail = "xyz@abcd.com"
accountPassword = "2121212212"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

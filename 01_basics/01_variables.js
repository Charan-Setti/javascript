const accountId = 123
let accountEmail = 'charan@gmail.com'
var accountPassword = '456'
accountCity = 'Delhi'

// we can declare the variables in javascript in the above mentioned ways

let accountState;

// accountId = 3 // not allowed because we are using const "const" for accountId

accountEmail = 'chne@gmail.com'
accountPassword = '234'
accountCity = 'Hyderabad'

lastName = "setti"

/*

Prefer not to use "var"
because of issue in block scope and functional scope

*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

const accountID = 12345
let accountEmail = "gourav@gmail"
var accountPassword = "9876"
accountCity = "Hisar"

// accountID = 67890    "Constant value can't be changed"
accountEmail = "bansal@gmail"
accountPassword = "0000"
accountCity = "Delhi"
let accountState

// Prefer not to use var
//   because of issue in block scope and function scope
console.log(accountID)
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

const accountId = 1
let accountEmail = "malvirohitabcd@gmail.com"
var accountPassword = "12345"
accountCity = "Vasai"
let accountState;

// accountId = 2 // not allowed

accountEmail = "malvirohit123@gmail.com"
accountPassword = "223344"
accountCity = "Virar"

/*
Prefer not use var 
bacuse of issue in block scope and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
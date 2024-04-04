const accountId = 123456
let accountMail ="ashwani@gmail.com"
var accountpass = "1258"
accountcity = "Etah"
let accountState ;


//accountId = 2 // not allowed

accountMail = "abc@gmail.com"
accountpass = "515151"
accountcity = "Agra"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountMail, accountpass, accountcity, accountState])
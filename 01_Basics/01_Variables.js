const accountId = 144553;
let accountEmail = "pravinchavan@gamil.com";
var accountpassword ="123456";
accountCity ="Sambhajinagar";

// accountId = 2; // not allowed

accountEmail = "pc@gmail.com";
accountpassword = "12345678";
accountCity = "Mumbai";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountpassword, accountCity])
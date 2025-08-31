const account_id = 12345;
let account_email = "abc@gmail.com";
var account_password = "12345";
account_city = "Pune";
let account_state;

/*
Prefer not to use Var
Because of issue in block scope & function scope and hoisting issues
*/

// account_id = 54321;
account_email = "pqr@gmail.com";
account_password = "54321";
account_city = "Mumbai";

console.table([account_id, account_email, account_password, account_city, account_state]);
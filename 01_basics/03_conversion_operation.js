let score = "qwerty"

// console.log(typeof score)
// console.log(typeof(score))
let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber + " - " +score)

/*
33 => 33
NaN => NaN
"33" => 33
"33abc" => NaN
true => 1 false => 0
"" => 0
" " => 0
"abc" => NaN
null => 0
undefined => NaN
*/

let isLoggedIn = "0"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

/*
1, "0", "abc" => true
0, "", null, undefined, NaN => false
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
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
// console.log(stringNumber)
// console.log(typeof stringNumber)

// ###############  OPERATIONS  #####################
let value = 3
let negValue = value
// console.log(2+2)
// console.log("2" + 2) // "22"
// console.log("2" - 2) // 0
// console.log("2" * 2) // 4
// console.log("2" / 2) // 1
// console.log(2 ** 3) // 8
// console.log(6 % 4) // 2

let str1 = "Hello"
let str2 = " Nilesh"
str3 = str1 + str2 // str1 = str1 + str2
console.log(str1)

console.log('1' + 2) // "12"
console.log(1 + '2') // "12"
console.log('1' + '2') // "12"
console.log('1' + 2 + 2) // "122"
console.log(1 + 2 + '2')
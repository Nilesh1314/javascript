const score = 100
// console.log(score)

const balance = new Number(100) // object
// console.log(balance)    // [Number: 100]
// console.log(balance.toString().length)//
// console.log(balance.toFixed(2)) // 100.00

const onther_number = 123.456789
// console.log(onther_number.toPrecision(5)) // 123.5

const num = 1000000.123456
// console.log(num.toLocaleString())
// console.log(num.toLocaleString('en-IN'))


//++++++++++++++++ Math Object ++++++++++++++++++++

console.log(Math)
// console.log(Math.abs(-5)) // 5
// console.log(Math.round(4.6)) // 5
// console.log(Math.ceil(4.1)) // 5
// console.log(Math.floor(4.9)) // 4
// console.log(Math.min(1,2,3,-4,5)) // -4
// console.log(Math.max(1,2,3,-4,5)) // 5
// console.log(Math.pow(2,3)) // 8
// console.log(2**3) // 8
// console.log(Math.sqrt(64)) // 8
// console.log(Math.random()) // 0 to 1
// console.log(Math.floor(Math.random() * 10000 + 1))

const max = 20
const min = 10

console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max - min + 1) + min))
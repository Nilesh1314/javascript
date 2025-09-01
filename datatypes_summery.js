// ### Primitive Data Types in JavaScript
// ## Types: String, Number, Boolean, null, undefined, BigInt, Symbol

const score = 100
const score_value = 100.1

const isLoggedIn = false
const outsideTemp = null

let userEmail; // undefined

const id = Symbol("123")
const another_id = Symbol("123")

// console.log(id === another_id) // false

const big_number = 234n
// console.log(big_number)

// ### Reference type / Non-primitive Data Types
// ## Types: Objects, Array, Functions

const heros = ['hanuman', 'ram', 'krishna'] // Array
let my_obj = {
    name:"Nilesh",
    age: 23,
    isLoggedIn: false,
} // Object literal

const my_function = function() {
    console.log("Hello World")
} // Function expression

console.log(typeof my_function) 
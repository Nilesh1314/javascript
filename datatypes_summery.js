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

// console.log(typeof my_function) 


// +++++++++++++++++++++++++++++++++++++++++
// +++++++++++ Stack (Primitive) Memory & Heap (Non-Primitive) Memory

let my_name = "Nilesh"

let another_name = my_name
another_name = "Nilesh B"

// console.log(my_name) // Nilesh
// console.log(another_name) // Nilesh


let user = {
    name: "Nilesh",
    age: 23,
    email: "nilesh@gmail.com",
    upi_id: "nilesh@okaxis"
}

let user2 = user

user2.email = "nileshb@gmail.com"

console.log(user.email) //
console.log(user2.email) //
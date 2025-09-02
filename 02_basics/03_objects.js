// Singleton objects (Created from constructor function)
// object.create()

// Object literal syntax

const my_sym = Symbol("key1")
let user = {
    name: "Nilesh",
    "Full Name": "Nilesh Borkar",
    [my_sym]: my_sym,
    age: 29,
    location: "Pune Maharashtra",
    email: "nilesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(user.name) // Nilesh
// console.log(user["name"]) // Nilesh
// console.log(user["Full Name"]) // Nilesh Borkar
// console.log(user[my_sym]) // Symbol(key1)

user.email = "nileshb@gmail.com";
// Object.freeze(user) // Object.preventExtensions(user) // Object.seal(user)
user.email = "nil@gmaol.com";

// console.log(user.email)

user.greeting = function() {
    console.log("Hello User")
}

user.greeting_two = function() {
    console.log(`Hello ${this.name}  Welcome back`)
}
console.log(user.greeting())
console.log(user.greeting_two())

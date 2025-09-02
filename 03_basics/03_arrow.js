const user = {
    username: "Nilesh",
    price: 3000,
    isLoggedIn: false,
    welcome_message: function() {
        console.log(`${this.username}, Welcome to website.`)
        console.log(this) // user object
    }
}

// user.welcome_message()
// user.username = "Sam"
// user.welcome_message()

// console.log(this) // window object

// function myFunc() {
//     let username = "Nilesh"
//     console.log(this.username) // window object
// }
// myFunc()


const my_arrow_function = () => {
    let username = "Nilesh"
    console.log(this.username) 
}

// my_arrow_function()

// const sum = (num1, num2) =>  num1 + num2
// const sum = (num1, num2) => {
//  return num1 + num2
// }
// const sum = (num1, num2) =>  (num1 + num2)
const sum = (num1, num2) =>  ({username: "Nilesh"})

// console.log(sum(3,4)) // 7

const my_array = [1,2,3,4,5]

my_array.forEach( (num) => {
    console.log(num)
} )
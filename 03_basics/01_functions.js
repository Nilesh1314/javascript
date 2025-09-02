
function printMyName() {
    console.log("N")
    console.log("i")
    console.log("l")
    console.log("e")
    console.log("s")
    console.log("h")
}

// printMyName()

function add_two_numbers(num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = add_two_numbers(3, 4) // 30

// console.log(result)

function login_user_message (username = "Sam") {
    if(!username){
        return "Please enter username"
    }
    return `Hello ${username}, Just logged in`
}

// const message = login_user_message("Nilesh")
const message = login_user_message()

// console.log(message)


function calculate_cart_price(val1, val2, ...num1) {
    return num1
}

const price = calculate_cart_price(100, 200, 400, 2300) // 100

// console.log(price)

const user = {
    name: "Nilesh",
    ages: 29,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

function handle_object(obj) {
    // console.log(`Hello ${obj.name}  Welcome back & age is ${obj.age}`)
}

// handle_object(user)
handle_object({
    name: "Sam", 
    age: 30
})

const my_new_arr = [100,300,400,500,600]

function handle_array(arr) {
    return `First element is ${arr[0]} & 4th element is ${arr[3]}`
}

// console.log(handle_array(my_new_arr))
// console.log(handle_array([4,5,7,2,90]))
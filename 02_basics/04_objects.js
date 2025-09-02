
const tinder_user = new Object()
tinder_user.id = "12345"
tinder_user.name = "Nilesh"
tinder_user.isLoggedIn = false
tinder_user.age = 23
tinder_user.email = "nilesh@gmail.com"
tinder_user.city = "Pune"
tinder_user.state = "Maharashtra"
tinder_user.country = "India"

// console.log(tinder_user)

const regular_user = {
    id: "54321",
    name: "Nilesh Borkar",
    isLoggedIn: true,
    age: 23,
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            first_name: "Nilesh",
            last_name: "Borkar",
        }
    }
}

// console.log(regular_user.fullname.userfullname.first_name)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2, 5:"e", 6:"f"}
const obj3 = Object.assign({}, obj1, obj2, {5:"e", 6:"f"})
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj4 = {...obj1, ...obj2, 5:"e", 6:"f"}
// console.log(obj4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


const users = [
    {user_id: 1, user_name: "nilesh"},
    {user_id: 2, user_name: "ram"},
    {user_id: 3, user_name: "shyam"},
]
// console.log(users[1].user_name) // ram

// console.log(Object.keys(tinder_user)) // [ 'id', 'name', 'isLoggedIn', 'age', 'email', 'city', 'state', 'country' ]
// console.log(Object.values(tinder_user)) // [ '12345', 'Nilesh', false, 23
// console.log(Object.entries(tinder_user)) 
// console.log(tinder_user.hasOwnProperty("isLoggedIn")) // true



const course = {
    course_name: "JavaScript",
    course_price: 999,
    course_instructor: "Nilesh Borkar",
    course_platform: "Udemy",
    course_discount: "10%",
    course_official: true,
    course_tags: ["JS", "JS-ES6", "JavaScript", "Programming"]
}

const {course_instructor: instructor} = course
console.log(instructor) // Nilesh Borkar


// {
//     "name": "Nilesh",
//     "course_name": "JavaScript",
//     "course_price": 999,
//     "course_instructor": "Nilesh Borkar",
// }
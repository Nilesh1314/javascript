// Array

const my_array = [1, 6, 3, 2, 4, 5]

// console.log(my_array) // [ 1, 6, 3, 2, 4, 5 ]
// console.log(typeof my_array) // object
// console.log(Array.isArray(my_array)) // true
// console.log(my_array.length) // 6
// console.log(my_array[0]) // 1
// console.log(my_array[2]) // 3
// console.log(my_array[my_array.length - 1]) // 5

const heros_arr = ["shaktiman", "naagraj", "doga", "nagraj"]
const new_arr = new Array("a", "b", "c")
// console.log(heros_arr) // [ 'shaktiman', 'naagraj', 'doga', 'nagraj' ]
// console.log(new_arr) // [ 'a', 'b', 'c' ]


// ######### Array Methods #########
// 1. push - add element at last
heros_arr.push("superman")
heros_arr.push("batman")
// console.log(heros_arr) // [ 'shaktiman', 'naagraj', 'doga', 'nagraj', 'superman', 'batman' ]


// 2. pop - remove element from last
heros_arr.pop()
// console.log(heros_arr) // [ 'shaktiman', 'naagraj', 'doga', 'nagraj', 'superman' ]


// 3. unshift - add element at start
heros_arr.unshift("nilesh")
// console.log(heros_arr) // [ 'ironman', 'shaktiman', 'naagraj', 'doga', 'nagraj', 'superman' ]


// 4. shift - remove element from start
heros_arr.shift()
// console.log(heros_arr) // [ 'shaktiman', 'naagraj', 'doga', 'nagraj', 'superman' ]

// 5. indexOf - return index of element
// console.log(heros_arr.indexOf("doga")) // 2
// console.log(heros_arr.indexOf("nilesh")) // -1  

// 6. includes - return true/false
// console.log(heros_arr.includes("doga")) // true
// console.log(heros_arr.includes("nilesh")) // false

// 7. reverse - reverse the array
heros_arr.reverse()
// console.log(heros_arr) // [ 'superman', 'nagraj', 'doga', 'naagraj', 'shaktiman' ]

// 8. sort - sort the array
new_arr.sort()
// console.log(new_arr) // [ 'a', 'b', 'c' ]


// 9. slice - return subarray
const new_slice_arr = my_array.slice(1, 3)
console.log("B " + my_array) // [ 1, 6, 3, 2, 4, 5 ]
console.log(new_slice_arr) // [ 6, 3 ]

// 10. splice - add/remove element
const new_arr2 = my_array.splice(1, 3)
console.log("A " + my_array) // [ 1, 4, 5 ]
console.log(new_arr2) // [ 6, 3, 2 ]


// 11. join - return string from array
const heros_str = heros_arr.join(", ")
// console.log(heros_str) // superman, wonderwoman, flash, nagraj, shaktiman
// console.log(typeof heros_str) // string

// 12. split - return array from string
const my_str = "Hello, I am Nilesh Borkar"
console.log(my_str.split(" ")) // [ 'Hello,', 'I', 'am', 'Nilesh', 'Borkar' ]

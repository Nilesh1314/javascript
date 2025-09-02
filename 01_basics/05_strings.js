const name = "Nilesh"
const repo_count = 5

// console.log(name + " - " + repo_count) // Nilesh5

console.log(`Hello my name is ${name} & my repo count is ${repo_count}` )


const new_name = new String("Nilesh Borkar")

// console.log(new_name)

// console.log(new_name[0])
// console.log(new_name.__proto__)
// console.log(new_name.length)
// console.log(new_name.toUpperCase())
// console.log(new_name.toLowerCase())
// console.log(new_name.charAt(4))
// console.log(new_name.indexOf('B'))


const new_str = new_name.substring(4,6)
// console.log(new_str)

const another_str = new_name.slice(-14,6)
// console.log(another_str)

const trimmed_str = "     Nilesh Borkar     "
// console.log(trimmed_str)
// console.log(trimmed_str.trim())

const url = "https://nilesh.com/learn?name%20nilesh&age%2023"
// console.log(url.replace("nilesh","nileshb"))
// console.log(url.includes("nilesh"))
// console.log(url.includes("nileshb"))

console.log(new_name.split(' ')) // ['Nilesh', 'Borkar']
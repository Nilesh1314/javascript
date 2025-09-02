const marvel_heroes = ["Thor", "Iron", "Spiderman", "Hulk"]
const dc_heroes = new Array("Superman", "Batman", "Flash", "Aquaman")


// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes) // [ 'Thor', 'Iron', 'Spiderman', 'Hulk', [ 'Superman', 'Batman', 'Flash', 'Aquaman' ] ]
// console.log(marvel_heroes[4][2]) // Flash

// 1. concat - to merge two arrays
const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes) // [ 'Thor', 'Iron', 'Spiderman', 'Hulk', [ 'Superman', 'Batman',

// 2. spread operator - to merge two arrays
const all_heroes2 = [...dc_heroes, ...marvel_heroes]
// console.log(all_heroes2) // [ 'Thor', 'Iron', 'Spiderman', 'Hulk', 'Superman', 'Batman', 'Flash', 'Aquaman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6,[4,5],7], 8]

// 3. flat - to convert 2D or nD array to 1D array 
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) // [ 1, 2, 3, 4, 5, 6, 7, 6, 4, 5, 7, 8 ]


// 4. Array.isArray() - to check if variable is array or not
console.log(Array.isArray("Nilesh")) // false

// 5. Array.from() - to convert string or other iterable to array 
// console.log(Array.from("Nilesh")) // [ 'N', 'i', 'l', 'e', 's', 'h' ]
// console.log(Array.from({name: "Nilesh"})) // []

let score1 = 100
let score2 = 200
let score3 = 300
// 6. Array.of() - to convert comma separated values to array
console.log(Array.of(score1, score2, score3)) // [ 100, [Number: 200], 300 ]
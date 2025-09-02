// Dates

let date = new Date();
// console.log(date) // current date & time 2025-09-01T06:46:50.290Z
// console.log(date.toString()) // Mon Sep 01 2025 12:16:50 GMT+0530 (India Standard Time)
// console.log(date.toDateString()) // Mon Sep 01 2025
// console.log(date.toISOString()) // 2025-09-01T06:46:50.290Z
// console.log(date.toLocaleString()) // 9/1/2025, 12:16:50 PM
// console.log(date.toLocaleDateString()) // 9/1/2025
// console.log(date.toLocaleTimeString()) // 12:16:50 PM
// console.log(date.getFullYear()) // 2025
// console.log(date.getMonth()) // 0-11
// console.log(date.getDate()) // 1-31
// console.log(date.getDay()) // 0-6

// console.log(typeof date) // object

// let my_ciurrent_date = new Date(2025, 8, 1, 12, 19, 50)
let my_ciurrent_date = new Date("2025-09-01")
// console.log(my_ciurrent_date.toLocaleString())
// console.log(my_ciurrent_date.toDateString()) // Mon Sep 01 2025 12:19:50 GMT+0530 (India Standard Time)

let my_timestamp = Date.now()

// console.log(my_timestamp) // 1693553990273
// console.log(date.getTime()) // 1693553990273
// console.log(Math.floor(Date.now()/1000)) // 1693553990 (in seconds)

let new_date = new Date()
// console.log(new_date) // 2025-09-01T06:46:50.290Z
// console.log(new_date.getDate()) // 1
// console.log(new_date.getDay()) // 1 (Monday)
// console.log(new_date.getMonth()) // 8 (September, month is 0 based)
// console.log(new_date.getFullYear()) // 2025
// console.log(new_date.getHours()) // 12 (in 24 hours format)


new_date.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
})

console.log(new_date) // September
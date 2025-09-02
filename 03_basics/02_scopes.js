
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ",a) // 10
}

// console.log(a) // 10 
// console.log(b) // 20
// console.log(c) // 30


function test1() {
    const name = "Nilesh"

    function test2() {
        const message = "Hello"
        console.log(name) // Nilesh
    }

    // console.log(message)

    test2()
}

// test1()


if(true) {
    const username = "Nilesh"

    if( username === "Nilesh") {
        const message = "Hello sam"
        // console.log(message + " " + username)
    }
    // console.log(message)
}


// +++++++ Interesting +++++++++
console.log(add_one(5)) // 6

function add_one(num) {
    return num + 1;
}



const add_two = function(num) {
    return num + 2
}
console.log(add_two(5))
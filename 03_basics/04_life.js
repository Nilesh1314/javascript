// Immediately Invoked Function Expression (IIFE)

(function my_fun () {
    console.log("Hello World")
}) ();

(function demo () {
    console.log("Demo Function")
}) ();


(() => {
    console.log("Arrow Function")
}) ();

((name) => {
    console.log("Hello " + name)
}) ("Nilesh");
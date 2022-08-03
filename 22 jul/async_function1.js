//Synchronous function
//setInterval

console.log("Before function execution");

function demo() {
    console.log("Demo function invoked");
}

//demo();
setInterval(demo, 3000);

console.log("After function execution");

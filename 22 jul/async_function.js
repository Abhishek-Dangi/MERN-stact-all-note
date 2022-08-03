//Synchronous function
//setTimeout

console.log("Before function execution");

function demo()
{
 console.log("Demo function invoked");
}

//demo();
setTimeout(demo,3000);

console.log("After function execution");

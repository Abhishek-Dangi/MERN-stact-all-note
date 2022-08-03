//callback : Asynchronous
console.log("Before function execution");

function demo(cb)
{ 
 console.log("Demo function executed");
 setTimeout(cb,3000);
}

demo(()=>{
 console.log("Callback function execution");
});

console.log("After function execution");




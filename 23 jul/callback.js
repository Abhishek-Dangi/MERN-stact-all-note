//callback : synchronous
console.log("Before function execution");

function demo(cb)
{ 
 console.log("Demo function executed");
 cb();
}

demo(()=>{
 console.log("Callback function execution");
});

console.log("After function execution");




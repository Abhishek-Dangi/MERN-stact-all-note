//callback : synchronous with arguments
console.log("Before function execution");

function add(a,b,cb)
{
 var c=a+b; 
 cb(c);
}

var a,b;
a=100;
b=200;
add(a,b,(result)=>{
 console.log("Callback function execution , add = "+result);
});

console.log("After function execution");




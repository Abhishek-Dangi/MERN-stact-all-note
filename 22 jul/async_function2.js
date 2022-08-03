//Synchronous function
//setInterval

console.log("Before function execution");

function demo()
{
 console.log("Demo function invoked");
}

var t=setTimeout(demo,3000);
var flag=false;
if(flag==false)
 clearTimeout(t); 
 
console.log("After function execution");

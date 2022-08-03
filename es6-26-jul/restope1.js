//rest operator (...)
/* function overloading : cannot be implemented by traditional approach */

function add(...args)
{
 //console.log(args);    
 var s=0;
 for(let x of args)
  s+=x;
 console.log("Add = "+s);   
}

add(10,20);
add(10,20,30);
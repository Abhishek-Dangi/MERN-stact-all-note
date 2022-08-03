//rest operator (...)
/* function overloading : cannot be implemented by traditional approach */

//Error

function add(a,b)
{
 var res=a+b;
 console.log("Add = "+res);     
}

function add(a,b,c)
{
 var res=a+b+c;
 console.log("Add = "+res);     
}

add(10,20);
add(10,20,30);